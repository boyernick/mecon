"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react";
import type { Chapter } from "@/lib/data";

interface ContentProps {
  chapter: Chapter;
  activeTopicIndex: number;
  onTopicChange: (index: number) => void;
}

function ImportanceBadge({ level }: { level: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        level === "Very Important" && "border-orange-200 bg-orange-50 text-orange-700",
        level === "Important" && "border-blue-200 bg-blue-50 text-blue-700",
        level === "Review" && "border-border bg-muted text-muted-foreground"
      )}
    >
      {level}
    </span>
  );
}

function ExamTrap({ text }: { text: string }) {
  return (
    <div className="my-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
      <div className="flex gap-3">
        <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-orange-500" />
        <div>
          <p className="text-sm font-semibold text-orange-800 mb-1">Exam Trap</p>
          <p className="text-sm leading-relaxed text-orange-700">{text}</p>
        </div>
      </div>
    </div>
  );
}

export function Content({
  chapter,
  activeTopicIndex,
  onTopicChange,
}: ContentProps) {
  const topic = chapter.topics[activeTopicIndex];
  if (!topic) return null;

  const prevTopic =
    activeTopicIndex > 0 ? chapter.topics[activeTopicIndex - 1] : null;
  const nextTopic =
    activeTopicIndex < chapter.topics.length - 1
      ? chapter.topics[activeTopicIndex + 1]
      : null;

  return (
    <div className="mx-auto max-w-[680px] px-8 py-8">
      {/* Prev / Next arrows */}
      <div className="flex items-center gap-1.5 mb-6">
        <button
          onClick={() => onTopicChange(activeTopicIndex - 1)}
          disabled={!prevTopic}
          className={cn(
            "inline-flex h-7 w-7 items-center justify-center rounded-md border transition-colors",
            prevTopic
              ? "hover:bg-accent text-foreground"
              : "text-muted-foreground/30 cursor-not-allowed border-border/50"
          )}
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={() => onTopicChange(activeTopicIndex + 1)}
          disabled={!nextTopic}
          className={cn(
            "inline-flex h-7 w-7 items-center justify-center rounded-md border transition-colors",
            nextTopic
              ? "hover:bg-accent text-foreground"
              : "text-muted-foreground/30 cursor-not-allowed border-border/50"
          )}
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Chapter breadcrumb */}
      <p className="mb-2 text-sm text-muted-foreground">
        Chapter {chapter.number} &middot; {chapter.fullTitle}
      </p>

      {/* Topic title + badge */}
      <div className="flex items-start gap-3 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {topic.title}
        </h1>
        {topic.importance && <ImportanceBadge level={topic.importance} />}
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {topic.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h3 className="text-base font-semibold text-foreground mb-2">
              {section.heading}
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              {section.content}
            </p>
            {section.examTrap && <ExamTrap text={section.examTrap} />}
          </section>
        ))}
      </div>

      {/* Bottom navigation */}
      {nextTopic && (
        <div className="mt-12 pt-6 border-t">
          <button
            onClick={() => onTopicChange(activeTopicIndex + 1)}
            className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>{nextTopic.title}</span>
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      )}
    </div>
  );
}
