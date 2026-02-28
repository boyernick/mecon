"use client";

import { BookOpen, Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-[18px] w-[18px]" />
          <span className="text-sm font-bold">mecon</span>
        </div>
        <nav className="flex items-center gap-0.5 text-sm">
          <a href="#" className="px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
          <a href="#" className="px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">
            Components
          </a>
          <a href="#" className="px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">
            Blocks
          </a>
          <a href="#" className="px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">
            Charts
          </a>
          <a href="#" className="px-3 py-1.5 text-foreground font-medium transition-colors">
            Create
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent transition-colors w-[200px]">
            <Search className="h-3.5 w-3.5" />
            <span>Search topics...</span>
          </button>
        </div>
      </div>
    </header>
  );
}
