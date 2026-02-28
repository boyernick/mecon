"use client";

import { cn } from "@/lib/utils";
import { chapters } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  activeTopicId: string | null;
  onTopicClick: (topicId: string) => void;
}

export function Sidebar({ activeTopicId, onTopicClick }: SidebarProps) {
  const [expandedChapters, setExpandedChapters] = useState<string[]>(
    chapters.map((ch) => ch.id)
  );

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto py-6 pr-2">
      <div className="flex flex-col gap-1">
        {chapters.map((chapter) => {
          const isExpanded = expandedChapters.includes(chapter.id);
          return (
            <div key={chapter.id}>
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="flex w-full items-center gap-1 rounded-md px-2 py-1 text-sm font-semibold hover:bg-accent transition-colors"
              >
                <ChevronRight
                  className={cn(
                    "h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform",
                    isExpanded && "rotate-90"
                  )}
                />
                {chapter.title}
              </button>
              {isExpanded && (
                <div className="ml-3 flex flex-col border-l pl-2 mt-0.5">
                  {chapter.topics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => onTopicClick(topic.id)}
                      className={cn(
                        "w-full rounded-md px-2 py-1 text-left text-sm text-muted-foreground hover:text-foreground transition-colors",
                        activeTopicId === topic.id &&
                          "text-foreground font-medium"
                      )}
                    >
                      {topic.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
