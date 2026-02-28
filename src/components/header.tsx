"use client";

import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

const navItems = [
  { label: "Create", href: "/", active: true },
  { label: "Study Guide", href: "#study-guide", active: false },
  { label: "Formulas", href: "#formulas", active: false },
  { label: "Exam Prep", href: "#exam-prep", active: false },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-6">
        <div className="flex items-center gap-2 mr-6">
          <BookOpen className="h-5 w-5" />
          <span className="text-sm font-bold tracking-tight">mecon</span>
        </div>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                item.active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
