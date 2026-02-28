"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Content } from "@/components/content";
import { TableOfContents } from "@/components/toc";
import { chapters } from "@/lib/data";

export default function Home() {
  const [activeChapterId, setActiveChapterId] = useState("ch1");
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"study-guide" | "practice-exam">(
    "study-guide"
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const chapter =
    chapters.find((ch) => ch.id === activeChapterId) ?? chapters[0];

  const handleChapterClick = (chapterId: string) => {
    setActiveChapterId(chapterId);
    setActiveTopicIndex(0);
  };

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        {sidebarOpen && (
          <aside className="hidden lg:flex w-[240px] shrink-0 flex-col border-r bg-sidebar">
            <Sidebar
              activeChapterId={activeChapterId}
              onChapterClick={handleChapterClick}
            />
          </aside>
        )}

        {/* Center content */}
        <main className="flex-1 overflow-y-auto">
          <Content
            chapter={chapter}
            activeTopicIndex={activeTopicIndex}
            onTopicChange={setActiveTopicIndex}
          />
        </main>

        {/* Right sidebar - Table of Contents */}
        <aside className="hidden xl:block w-[220px] shrink-0 border-l">
          <TableOfContents
            chapter={chapter}
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
          />
        </aside>
      </div>
    </div>
  );
}
