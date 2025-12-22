import { useState } from "react";
import { BACKEND_URL } from "../config";
import { ShareIcon } from "../icons/ShareIcon";
import { Button } from "./Button";
import axios from "axios";
import { ContentModal } from "./ContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ContentType } from "../types/content";

interface NavbarProps {
  type: ContentType;
}


export function Navbar ({type} : NavbarProps) {
    const [modalOpen , setModalOpen ] = useState(false)

    const headingMap: Record<ContentType, string> = {
    [ContentType.All]: "All Content",
    [ContentType.Youtube]: "YouTube Videos",
    [ContentType.X]: "Twitter Posts",
    [ContentType.LinkedIn]: "LinkedIn Posts",
    [ContentType.Blog]: "Blogs & Articles",
    [ContentType.Github]: "Github repositories",
    [ContentType.Other]: "Saved Links"
  };
    
    return <div className="min-h-[64px] py-3">
        <ContentModal open={modalOpen} onClose = {()=>{
                    setModalOpen(false)
                 }} />
        <div className='flex justify-between gap-2 '>
            <h1 className="px-4 py-2 text-black-800 font-bold text-xl">
                {headingMap[type]} 
            </h1>
                <div className="justify-end flex gap-2 px-6">
                    <Button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/mind/share`, {
                        share: true
                    }, {
                        headers: {
                        "Authorization": localStorage.getItem("token")
                        }
                    })
                    const shareUrl = `http://localhost:5173/mind/${response.data.hash}`;
                    
                    try {
                        await navigator.clipboard.writeText(shareUrl);
                        alert("Link copied to clipboard");
                    } catch (err) {
                        alert("Failed to copy link");
                    }


                    }} variant="primary" text="Share Brain" startIcon={<ShareIcon />}/>
                    <Button onClick={ () => {
                    setModalOpen(true)
                    }} variant="secondary" text="Add Content" startIcon={<PlusIcon />}/>
                </div>
        </div>
    
            
    </div>
}