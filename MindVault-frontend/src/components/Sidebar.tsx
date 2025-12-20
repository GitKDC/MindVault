import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YTIcon } from "../icons/YTIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar () {
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
            <SidebarItem icon={<YTIcon />} text="Youtube" />
            <SidebarItem icon={<TwitterIcon />} text="X" />
        </div>
        
    </div>
}