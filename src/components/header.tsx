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
    <header className="sticky top-0 z-50 flex h-14 items-center border-b bg-background px-4">
      {/* Left: toggle + brand */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors lg:hidden"
        >
          <PanelLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-bold tracking-tight text-foreground">
          mecon
        </span>
      </div>

      {/* Center: navigation links */}
      <nav className="ml-6 flex items-center gap-1">
        <button
          onClick={() => onTabChange("study-guide")}
          className={cn(
            "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
            activeTab === "study-guide"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Study Guide
        </button>
        <button
          onClick={() => onTabChange("practice-exam")}
          className={cn(
            "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
            activeTab === "practice-exam"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Practice Exam
        </button>
      </nav>

      {/* Right: search + icons */}
      <div className="ml-auto flex items-center gap-2">
        <button className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent transition-colors">
          <Search className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Search...</span>
          <kbd className="pointer-events-none ml-4 hidden select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline-flex">
            <span className="text-xs">&#x2318;</span>K
          </kbd>
        </button>
        <div className="mx-1 h-4 w-px bg-border" />
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
          <Link2 className="h-4 w-4" />
        </button>
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
          <Sun className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
