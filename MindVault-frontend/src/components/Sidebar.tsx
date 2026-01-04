import { Brain, Home, Youtube, Twitter, Linkedin, Github, FileText, Link2 } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

type ContentFilter = "all" | "youtube" | "twitter" | "linkedin" | "github" | "blog" | "other";

interface SidebarProps {
  filter: ContentFilter;
  setFilter: (type: ContentFilter) => void;
}

export function Sidebar({ filter, setFilter }: SidebarProps) {
  return (
    <div className="h-screen w-72 bg-card/80 backdrop-blur-xl border-r border-border fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 p-6 border-b border-border">
        <div className="p-2 rounded-xl bg-primary/20">
          <Brain className="h-6 w-6 text-primary" />
        </div>
        <span className="text-xl font-bold text-foreground">MindVault</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <SidebarItem
          icon={<Home className="h-5 w-5" />}
          text="All Content"
          active={filter === "all"}
          onClick={() => setFilter("all")}
        />
        <SidebarItem
          icon={<Youtube className="h-5 w-5" />}
          text="YouTube"
          active={filter === "youtube"}
          onClick={() => setFilter("youtube")}
        />
        <SidebarItem
          icon={<Twitter className="h-5 w-5" />}
          text="Twitter / X"
          active={filter === "twitter"}
          onClick={() => setFilter("twitter")}
        />
        <SidebarItem
          icon={<Linkedin className="h-5 w-5" />}
          text="LinkedIn"
          active={filter === "linkedin"}
          onClick={() => setFilter("linkedin")}
        />
        <SidebarItem
          icon={<Github className="h-5 w-5" />}
          text="GitHub"
          active={filter === "github"}
          onClick={() => setFilter("github")}
        />
        <SidebarItem
          icon={<FileText className="h-5 w-5" />}
          text="Blogs"
          active={filter === "blog"}
          onClick={() => setFilter("blog")}
        />
        <SidebarItem
          icon={<Link2 className="h-5 w-5" />}
          text="Other Links"
          active={filter === "other"}
          onClick={() => setFilter("other")}
        />
      </nav>

      {/* Storage indicator */}
      <div className="p-4 border-t border-border">
        <div className="p-4 rounded-xl bg-secondary/50">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Storage</span>
            <span className="text-foreground font-medium">2.4 GB / 5 GB</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-[48%] bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
