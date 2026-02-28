"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { TopicCard } from "@/components/topic-card";
import { chapters, allTopics } from "@/lib/data";

export default function Home() {
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);

  const filteredTopics = useMemo(() => {
    if (!activeTopicId) return allTopics;

    const chapter = chapters.find((ch) =>
      ch.topics.some((t) => t.id === activeTopicId)
    );
    if (chapter) {
      return chapter.topics;
    }
    return allTopics;
  }, [activeTopicId]);

  const activeChapter = activeTopicId
    ? chapters.find((ch) => ch.topics.some((t) => t.id === activeTopicId))
    : null;

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden lg:block border-r">
          <div className="pl-6 pr-4">
            <Sidebar
              activeTopicId={activeTopicId}
              onTopicClick={setActiveTopicId}
            />
          </div>
        </aside>
        <main className="flex-1 min-w-0">
          <div className="px-8 py-6">
            <div className="flex flex-col gap-1 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">
                {activeChapter
                  ? activeChapter.title
                  : "Managerial Economics"}
              </h1>
              <p className="text-muted-foreground text-base">
                {activeChapter
                  ? `${activeChapter.topics.length} topics in this chapter.`
                  : "ECON E-1615 · Harvard Extension · Browse chapters and key concepts."}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredTopics.map((topic, i) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  index={i}
                  isActive={activeTopicId === topic.id}
                  onClick={() =>
                    setActiveTopicId(
                      activeTopicId === topic.id ? null : topic.id
                    )
                  }
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
