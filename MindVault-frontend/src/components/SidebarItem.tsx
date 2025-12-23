import type { ReactElement } from "react";

export function SidebarItem({ icon, text }: {
    icon : ReactElement;
    text: string
}
) {
    return <div className="flex items-center text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg transition-colors py-2 px-4 my-1">
        <div className="p-2">
            {icon}
        </div>
        <div className="p-2">
            {text}
        </div>
    </div>
}