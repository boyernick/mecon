"use client";

import { cn } from "@/lib/utils";
import { chapters } from "@/lib/data";

interface SidebarProps {
  activeChapterId: string;
  onChapterClick: (chapterId: string) => void;
}

export function Sidebar({ activeChapterId, onChapterClick }: SidebarProps) {
  return (
    <div className="flex h-full flex-col">
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mb-2 px-3 text-[13px] font-medium text-muted-foreground">
          Chapters
        </div>
        <ul className="flex flex-col gap-0.5">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <button
                onClick={() => onChapterClick(chapter.id)}
                className={cn(
                  "flex w-full items-center rounded-[6px] px-3 py-[7px] text-sm transition-colors",
                  activeChapterId === chapter.id
                    ? "bg-accent font-medium text-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
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
