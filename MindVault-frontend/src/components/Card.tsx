import type { ReactNode } from "react";
import { DeleteIcon } from "../icons/DeleteIcon";
import { DocIcon } from "../icons/DocIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { ContentType } from "../types/content";
import { LinkIcon } from "../icons/LinkIcon";
import { BlogIcon } from "../icons/BlogIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { YTIcon } from "../icons/YTIcon";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { GithubIcon } from "../icons/GithubIcon";

interface CardProps {
    _id: string
    title : string;
    link : string;
    type : ContentType;
    refresh?: () => void;
    onClick?: ()=> void;
    readOnly?: boolean;
}

const deleteContent = async (contentId: string) => {
    const confirmation=window.confirm("Are you Fuckinnnnn sureeeeee!!!!!!!!!");
    if(confirmation){
await axios.delete(`${BACKEND_URL}/api/v1/content/:contentId`, {
        data: { contentId },
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    }else{
        window.alert("YOu areee safeee!")
    }
    
    // window.alert("hit done");
}

const copyContentLink = async (link: string) => {
    console.log("link copied")
    try {
        await navigator.clipboard.writeText(link);
        alert("Link copied to clipboard");
    } catch (err) {
        alert("Failed to copy link");
    }
};



export function Card ( { _id, title , link , type, readOnly} : CardProps) {
    return (
        <div className="bg-white rounded-md shadow-md border-slate-200 p-8 max-w-90 min-w-90 flex flex-col border min-h-45"> 
            <div className="flex justify-between">
                <div className="flex items-center pr-4 text-md">
                    <div className="text-gray-500 pr-3">
                        {type === ContentType.Youtube && <YTIcon /> || 
                         type === ContentType.X && <TwitterIcon /> ||
                         type === ContentType.Blog && <BlogIcon /> ||
                         type === ContentType.LinkedIn && <LinkedInIcon /> ||
                         type === ContentType.Github && <GithubIcon /> ||
                         type === ContentType.Other && <LinkIcon />}
                    </div>
                    <span className="leading-none"> {title}</span>
                </div>
                { !readOnly && <div className="flex">
                    <div className="pr-3 text-gray-500" onClick={()=>copyContentLink(link)}>
                        <ShareIcon />
                    </div>
                    <div className="pr-3 text-gray-500" onClick={()=>deleteContent(_id)} > 
                        <DeleteIcon />

                    </div>
                    
                </div>}
            </div>
            <div className="mt-3 h-[180px] overflow-hidden rounded-md bg-gray-50">
                { type === ContentType.Youtube && <iframe className="w-full h-full" width="560" height="315" src={`https://www.youtube.com/embed/${link.split("v=")[1]}`} /*this converts watch?v=abc123 → embed/abc123*/ title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                { type === ContentType.X && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                 </blockquote>}

                { type === ContentType.LinkedIn &&
                 <a
                    href={link}
                    target="_blank"
                    className="flex h-full w-full items-center justify-center bg-[#0A66C2] text-white rounded-md"
                    >
                    <div className="text-center">
                        <div className="text-sm opacity-80">LinkedIn Post</div>
                        <div className="font-semibold mt-1">View on LinkedIn</div>
                    </div>
                </a> }
           
        </div>
    </div>
    )
}