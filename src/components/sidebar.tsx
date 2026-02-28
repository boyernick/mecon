"use client";

import { cn } from "@/lib/utils";
import { chapters } from "@/lib/data";

interface SidebarProps {
  activeChapterId: string;
  onChapterClick: (chapterId: string) => void;
}

export function Sidebar({ activeChapterId, onChapterClick }: SidebarProps) {
  return (
    <div className="flex h-full flex-col text-sidebar-foreground">
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-1 px-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
          Chapters
        </div>
        <ul className="flex flex-col gap-px">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <button
                onClick={() => onChapterClick(chapter.id)}
                className={cn(
                  "flex w-full items-center rounded-md px-2 py-1.5 text-sm transition-colors",
                  activeChapterId === chapter.id
                    ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                {chapter.shortTitle}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
