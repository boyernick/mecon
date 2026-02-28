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
      <div className="flex items-center gap-1 mb-8">
        {prev ? (
          <Link
            href={prev.href}
            aria-label="Previous section"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background text-muted-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </Link>
        ) : (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background text-muted-foreground/30 cursor-not-allowed">
            <ChevronLeft className="h-4 w-4" />
          </span>
        )}

        {next ? (
          <Link
            href={next.href}
            aria-label="Next section"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background text-muted-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background text-muted-foreground/30 cursor-not-allowed">
            <ChevronRight className="h-4 w-4" />
          </span>
        )}
      </div>
    )
  }

  // Bottom — shadcn pagination-style Previous / Next buttons
  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        'mt-12 flex items-center gap-2',
        prev && next ? 'justify-between' : prev ? 'justify-start' : 'justify-end'
      )}
    >
      {prev ? (
        <Link
          href={prev.href}
          className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="line-clamp-1 max-w-[160px]">{prev.sectionHeading}</span>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={next.href}
          className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <span className="line-clamp-1 max-w-[160px]">{next.sectionHeading}</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </nav>
  )
}
