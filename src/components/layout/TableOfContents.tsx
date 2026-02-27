'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { TocItem } from '@/types'
import { cn } from '@/lib/utils'

export default function TableOfContents() {
  const pathname = usePathname()
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Re-extract headings whenever the page changes
  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return

    const headings = Array.from(main.querySelectorAll('h2[id], h3[id]'))
    const extracted: TocItem[] = headings.map((el) => ({
      id: el.id,
      label: el.textContent ?? '',
      level: el.tagName === 'H2' ? 2 : 3,
    }))

    setItems(extracted)
    if (extracted.length > 0) setActiveId(extracted[0].id)
  }, [pathname])

  // Re-attach IntersectionObserver whenever items change
  useEffect(() => {
    observerRef.current?.disconnect()
    if (items.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <div className="sticky top-20">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        On This Page
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id} className={cn(item.level === 3 && 'pl-3')}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                setActiveId(item.id)
              }}
              className={cn(
                'block text-[13px] transition-colors',
                activeId === item.id
                  ? 'font-medium text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
