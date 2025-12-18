import mongoose, {model, Schema} from "mongoose"
import { ref } from "process"

mongoose.connect('mongodb+srv://kartikchaudhari246:kartik2607@cluster0.csgllht.mongodb.net/Brainly')
const UserSchema = new Schema({
    username : {type: String, unique : true},
    password : String
})

const tagSchema = new Schema({
    tag : {type : String, required : true, unique: true}
})

const ContentSchema = new Schema({
    link: String,
    type: String,
    title: String,
    shareToken: { type: String, unique: true, sparse: true},
    tags: [{type: Schema.Types.ObjectId, ref: "tags"}],
    userId: {type : Schema.Types.ObjectId, ref : "users", required: true}
})

const LinkSchema = new Schema ({
    hash: String,
    userId : { type: mongoose.Types.ObjectId, ref: 'users', required: true, unique: true}
})

export const LinkModel = model('links', LinkSchema)
export const UserModel = model("users", UserSchema)
export const ContentModel = model("content", ContentSchema)
export const TagModel = model("tags", tagSchema)

