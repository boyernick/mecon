"use client";

import { cn } from "@/lib/utils";
import { chapters } from "@/lib/data";

interface SidebarProps {
  activeTopicId: string | null;
  onTopicClick: (topicId: string) => void;
}

export function Sidebar({ activeTopicId, onTopicClick }: SidebarProps) {
  return (
    <div className="w-[240px] shrink-0">
      <div className="sticky top-14">
        <div className="h-[calc(100vh-3.5rem)] overflow-y-auto pb-10 pt-4">
          <div className="flex flex-col gap-6">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="flex flex-col gap-1">
                <h4 className="px-2 text-sm font-semibold tracking-tight text-foreground">
                  {chapter.title}
                </h4>
                <div className="flex flex-col">
                  {chapter.topics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => onTopicClick(topic.id)}
                      className={cn(
                        "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
                        activeTopicId === topic.id &&
                          "bg-accent text-foreground font-medium"
                      )}
                    >
                      {topic.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
