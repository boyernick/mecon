import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionRef } from '@/lib/guide-nav'
import { cn } from '@/lib/utils'

interface Props {
  prev: SectionRef | null
  next: SectionRef | null
  variant: 'top' | 'bottom'
}

export default function GuidePagination({ prev, next, variant }: Props) {
  if (variant === 'top') {
    return (
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-1">
          {prev ? (
            <Link
              href={prev.href}
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prev.sectionHeading}</span>
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground/40 cursor-not-allowed select-none">
              <ChevronLeft className="h-4 w-4" />
            </span>
          )}

          {next ? (
            <Link
              href={next.href}
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <span className="hidden sm:inline">{next.sectionHeading}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground/40 cursor-not-allowed select-none">
              <ChevronRight className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    )
  }

  // Bottom variant — shadcn-style Previous / Next cards
  return (
    <div className={cn('mt-12 grid gap-4', prev && next ? 'grid-cols-2' : 'grid-cols-1')}>
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col gap-1 rounded-lg border p-4 hover:bg-accent transition-colors"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <ChevronLeft className="h-3.5 w-3.5" />
            Previous
          </span>
          <span className="text-sm font-medium group-hover:text-foreground transition-colors line-clamp-1">
            {prev.sectionHeading}
          </span>
          <span className="text-xs text-muted-foreground">
            Ch {prev.chapterNumber} · {prev.chapterShortTitle}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={next.href}
          className="group flex flex-col gap-1 rounded-lg border p-4 hover:bg-accent transition-colors text-right"
        >
          <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
            Next
            <ChevronRight className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-medium group-hover:text-foreground transition-colors line-clamp-1">
            {next.sectionHeading}
          </span>
          <span className="text-xs text-muted-foreground">
            Ch {next.chapterNumber} · {next.chapterShortTitle}
          </span>
        </Link>
      )}
    </div>
  )
}
