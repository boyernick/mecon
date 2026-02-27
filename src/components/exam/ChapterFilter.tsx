'use client'

import { cn } from '@/lib/utils'

type Filter = number | 'all'

interface Props {
  active: Filter
  onChange: (f: Filter) => void
  counts: Record<string, number>
}

const tabs: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Ch 1', value: 1 },
  { label: 'Ch 2', value: 2 },
  { label: 'Ch 3', value: 3 },
  { label: 'Ch 4', value: 4 },
  { label: 'Ch 5', value: 5 },
]

export default function ChapterFilter({ active, onChange, counts }: Props) {
  return (
    <div className="mb-6 flex flex-wrap gap-1">
      {tabs.map(({ label, value }) => {
        const key = value === 'all' ? 'all' : String(value)
        const count = counts[key] ?? 0
        const isActive = active === value

        return (
          <button
            key={key}
            onClick={() => onChange(value)}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
              isActive
                ? 'bg-foreground text-background'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            )}
          >
            {label}
            <span
              className={cn(
                'rounded px-1 py-0.5 text-xs tabular-nums',
                isActive ? 'bg-background/20 text-background' : 'bg-background text-muted-foreground'
              )}
            >
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
