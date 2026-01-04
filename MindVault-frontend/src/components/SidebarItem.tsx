import type { ReactElement } from "react";

interface SidebarItemProps {
  icon: ReactElement;
  text: string;
  active?: boolean;
  onClick?: () => void;
}

export function SidebarItem({ icon, text, active, onClick }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 group ${
        active
          ? "bg-primary/20 text-primary border border-primary/30"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      }`}
    >
      <div className={`${active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}>
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
}
