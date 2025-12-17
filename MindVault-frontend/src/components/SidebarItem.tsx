import type { ReactElement } from "react";

export function SidebarItem({ icon, text }: {
    icon : ReactElement;
    text: string
}
) {
    return <div className="flex items-center text-gray-600 cursor-pointer hover:bg-gray-200 rounded-md transition-all  max-w-50">
        <div className="p-2">
            {icon}
        </div>
        <div className="p-2">
            {text}
        </div>
    </div>
}