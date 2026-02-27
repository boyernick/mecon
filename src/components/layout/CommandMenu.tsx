'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { getAllSections } from '@/lib/guide-nav'
import { chapters } from '@/data/chapters'

export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const sections = getAllSections()

  const handleOpen = useCallback(() => setOpen((v) => !v), [])

  useEffect(() => {
    function down(e: KeyboardEvent) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        handleOpen()
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [handleOpen])

  function navigate(href: string) {
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      <Button
        variant="outline"
        onClick={handleOpen}
        className="hidden md:flex h-8 w-56 items-center justify-between gap-2 px-3 text-sm text-muted-foreground shadow-none"
      >
        <span className="flex items-center gap-2">
          <Search className="h-3.5 w-3.5" />
          Search...
        </span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleOpen}
        className="flex md:hidden"
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search chapters and sections..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {chapters.map((chapter) => {
            const chapterSections = sections.filter(
              (s) => s.chapterId === chapter.id
            )
            return (
              <CommandGroup
                key={chapter.id}
                heading={`Ch ${chapter.number} — ${chapter.shortTitle}`}
              >
                {chapterSections.map((s) => (
                  <CommandItem
                    key={s.href}
                    value={`${chapter.shortTitle} ${s.sectionHeading}`}
                    onSelect={() => navigate(s.href)}
                  >
                    {s.sectionHeading}
                  </CommandItem>
                ))}
              </CommandGroup>
            )
          })}

          <CommandSeparator />

          <CommandGroup heading="Practice Exam">
            <CommandItem value="practice exam all questions" onSelect={() => navigate('/exam')}>
              All 25 Questions
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
