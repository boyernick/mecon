"use client";

import { cn } from "@/lib/utils";
import type { Chapter } from "@/lib/data";

interface TocProps {
  chapter: Chapter;
  activeTopicIndex: number;
  onTopicClick: (index: number) => void;
}

export function TableOfContents({
  chapter,
  activeTopicIndex,
  onTopicClick,
}: TocProps) {
  return (
    <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 px-4">
      <div className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        On This Page
      </div>
      <ul className="flex flex-col border-l border-border">
        {chapter.topics.map((topic, i) => (
          <li key={topic.id}>
            <button
              onClick={() => onTopicClick(i)}
              className={cn(
                "block w-full text-left py-1 pl-3 text-sm transition-colors -ml-px border-l",
                i === activeTopicIndex
                  ? "border-foreground text-foreground font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
              )}
            >
              {topic.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
