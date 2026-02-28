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
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto py-8 px-6">
      <div className="mb-3 text-[13px] font-medium text-muted-foreground">
        On This Page
      </div>
      <ul className="flex flex-col gap-0.5">
        {chapter.topics.map((topic, i) => (
          <li key={topic.id}>
            <button
              onClick={() => onTopicClick(i)}
              className={cn(
                "w-full text-left rounded-[6px] px-2 py-[5px] text-sm transition-colors",
                i === activeTopicIndex
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
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
