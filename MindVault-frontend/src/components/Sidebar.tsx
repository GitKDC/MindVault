import { useContent } from "../hooks/useContent";
import { BlogIcon } from "../icons/BlogIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YTIcon } from "../icons/YTIcon";
import type { ContentType } from "../types/content";
import { SidebarItem } from "./SidebarItem";
import { useEffect, useState } from 'react'

interface SidebarProps {
    setFilter? : ()=> void;
}

export function Sidebar ({setFilter}: SidebarProps) {
   
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
             <div onClick={() => setFilter("all")}>
                <SidebarItem icon={<LinkIcon />} text="All" />
            </div>
            <div onClick={()=> setFilter("youtube")}>
                <SidebarItem  icon={<YTIcon />} text="Youtube" />
            </div>
            <div onClick={()=> setFilter("x")}>
                <SidebarItem icon={<TwitterIcon />} text="X" />
            </div>
            <div onClick={()=> setFilter("linkedin")}>
                <SidebarItem  icon={<LinkedInIcon />} text="LinkedIn" />
            </div>
            <div onClick={()=> setFilter("github")}>
                <SidebarItem  icon={<GithubIcon />} text="Github" />
            </div>
            <div onClick={()=> setFilter("blog")}>
                <SidebarItem  icon={<BlogIcon />} text="Blogs" />
            </div>
        </div>
        
    </div>
}