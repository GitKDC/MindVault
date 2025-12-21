import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"; 
import { ContentModel, LinkModel, UserModel } from "./db.js";
import { JWT_SECRET } from "./config.js";
import { userMiddleware } from "./middleware.js";
import crypto, { hash } from "crypto";
import bcrypt from "bcrypt";
import cors from 'cors';
import { random } from "./utils.js";
import { ObjectTypeDeclaration } from "typescript";

const app = express();
app.use(express.json()); //middleware for parsing json request bodies 
app.use(cors());

//User signup
app.post("/api/v1/signup", async (req, res) => {
    //zod validation 
    const username = req.body.username;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        await UserModel.create({
        username: username,
        password: hashedPassword
    })

    res.json({
        message : "User Signed Up"
    })
    }catch(err){
        res.status(411).json({
            message : "User already exist"
        })
        console.log(err)
    }


})

//User signin
app.post("/api/v1/signin", async (req, res) => {
    console.log("BODY:", req.body);

    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
    })

    console.log("USER:", existingUser);


    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        },JWT_SECRET)

        console.log("TOKEN GENERATED:", token);
        
        res.json({
            token
        })
        console.log("TOKEN SENT:", token);
    }
    else{
        res.status(403).json({
            message : "Incorrect Credetials"
        })
    }
    
})

//User Add Content
app.post("/api/v1/content",userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;

    await ContentModel.create({
        title,
        link,
        type,
        userId: req.userId,
        tags: []
    })
    res.json({
        message: "Content added"
    })
})

//User Access Content
app.get("/api/v1/content", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const contents = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        contents
    })
})

//User Delete Content
app.delete("/api/v1/content/:contentId", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteOne({
        _id: contentId,
        userId: req.userId
    })
    res.json({
        message: "Content deleted"
    })
})

//User Search Content
app.get("/api/v1/content/title", userMiddleware, async (req, res) => {
    const searchTerm = req.query.searchTerm;
    const userId = req.userId;

    const results = await ContentModel.find({
        userId: userId,
            $or : [
                {title : {$regex: searchTerm, $options:'i'}},
                {link: {$regex: searchTerm, $options: 'i'}}
            ]
    }).select("title link");
    res.json({
        message: "Search SUccessful",
        results
    })
})

app.post("/api/v1/mind/share", userMiddleware, async (req, res) => {
    const { share } = req.body;
    if( share ) {

            const hash = random(10)

            const existingLink = await LinkModel.findOne({
                userId: req.userId
            })

            if(existingLink) {
                res.json({
                    hash: existingLink.hash
                })
                return;
            }
            
            await LinkModel.create({
                userId: req.userId,
                hash: hash
            })

            res.json({
                hash
            })
    } else {
        await LinkModel.deleteOne({
            userId: req.userId
        })

        res.json({
            message: "Removed link"
        })
    }

    res.json({
        message : "Updated shareable link",
        hash
    })

})

app.get("/api/v1/mind/:shareLink", userMiddleware, async (req, res) => {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash
    })

    if(!link) {
        res.status(411).json({
            message: "Incorrect Input"
        })
        return;
    }
    const content = await ContentModel.findOne({
        userId: link.userId
    })

    const User = await UserModel.findOne({
        _id: link.userId 
    })

    if(!User) {
        res.status(411).json({
            message: "Incorrect Input"
        })
    }

    res.json({
        username: User?.username,
        content: content
    })

    

})



app.listen(3000);
