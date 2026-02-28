"use client";

import { cn } from "@/lib/utils";
import { PanelLeft, Search, Link2, Sun } from "lucide-react";

interface HeaderProps {
  activeTab: "study-guide" | "practice-exam";
  onTabChange: (tab: "study-guide" | "practice-exam") => void;
  onToggleSidebar: () => void;
}

export function Header({ activeTab, onTabChange, onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center border-b bg-background">
      <div className="flex h-full items-center border-r px-3">
        <button
          onClick={onToggleSidebar}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent transition-colors"
        >
          <PanelLeft className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 items-center justify-between px-4">
        <div className="flex items-center">
          <div className="flex items-center gap-0.5 rounded-lg border p-0.5">
            <button
              onClick={() => onTabChange("study-guide")}
              className={cn(
                "rounded-md px-3 py-1 text-sm font-medium transition-colors",
                activeTab === "study-guide"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Study Guide
            </button>
            <button
              onClick={() => onTabChange("practice-exam")}
              className={cn(
                "rounded-md px-3 py-1 text-sm font-medium transition-colors",
                activeTab === "practice-exam"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Practice Exam
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent transition-colors">
            <Search className="h-3.5 w-3.5" />
            <span>Search...</span>
            <kbd className="pointer-events-none ml-4 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </button>
          <button className="inline-flex h-8 w-8 items-center justify-center rounded-md border hover:bg-accent transition-colors">
            <Link2 className="h-3.5 w-3.5" />
          </button>
          <button className="inline-flex h-8 w-8 items-center justify-center rounded-md border hover:bg-accent transition-colors">
            <Sun className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
