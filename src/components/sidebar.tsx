"use client";

import { cn } from "@/lib/utils";
import { chapters } from "@/lib/data";
import { BookOpen } from "lucide-react";

interface SidebarProps {
  activeChapterId: string;
  onChapterClick: (chapterId: string) => void;
}

export function Sidebar({ activeChapterId, onChapterClick }: SidebarProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-14 items-center gap-2 border-b px-6">
        <BookOpen className="h-[18px] w-[18px]" />
        <span className="text-sm font-bold">Mecon</span>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="flex flex-col gap-0.5">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <button
                onClick={() => onChapterClick(chapter.id)}
                className={cn(
                  "flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors",
                  activeChapterId === chapter.id
                    ? "bg-accent text-accent-foreground font-medium"
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
