import { useContent } from "../hooks/useContent";
import { BlogIcon } from "../icons/BlogIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YTIcon } from "../icons/YTIcon";
import { ContentType } from "../types/content";
import { SidebarItem } from "./SidebarItem";
import { useEffect, useState } from 'react'

interface SidebarProps {
    setFilter? : ()=> void;
    setSelectedType?: string;
}

export function Sidebar ({setFilter,setSelectedType}: SidebarProps) {


    const selectFilter =(type: string)=>{
        //@ts-ignore
        setFilter(type);
        console.log("IN filter:: ",type);
        //@ts-ignore
        setSelectedType(type);
    }
   
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex items-center gap-3 text-2xl pt-8">
            <div className="pr-1 text-purple-800">
                <Logo />
            </div>
            <div className="font-semibold">
                MindVault
            </div>
        </div>
        <div className="pt-8 pl-4">
             <div onClick={() => selectFilter("all")}>
                <SidebarItem icon={<LinkIcon />} text="All" />
            </div>
            <div onClick={()=> selectFilter("youtube")}>
                <SidebarItem  icon={<YTIcon />} text="Youtube" />
            </div>
            <div onClick={()=> selectFilter("x")}>
                <SidebarItem icon={<TwitterIcon />} text="X" />
            </div>
            <div onClick={()=> selectFilter("linkedin")}>
                <SidebarItem  icon={<LinkedInIcon />} text="LinkedIn" />
            </div>
            <div onClick={()=> selectFilter("github")}>
                <SidebarItem  icon={<GithubIcon />} text="Github" />
            </div>
            <div onClick={()=> selectFilter("blog")}>
                <SidebarItem  icon={<BlogIcon />} text="Blogs" />
            </div>
        </div>
        
    </div>
}