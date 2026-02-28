'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { guideContent } from '@/data/guide-content'

export default function TableOfContents() {
  const pathname = usePathname()

  // Parse /guide/[chapterId]/[sectionId] from pathname
  const match = pathname.match(/^\/guide\/(chapter-\d+)(?:\/(.+))?$/)
  if (!match) return null

  const chapterId = match[1]
  const activeSectionId = match[2] ?? ''

  const chapter = guideContent.find((c) => c.id === chapterId)
  if (!chapter) return null

  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        On This Page
      </p>
      <ul className="space-y-1">
        {chapter.sections.map((section) => {
          const isActive = section.id === activeSectionId
          return (
            <li key={section.id}>
              <Link
                href={`/guide/${chapterId}/${section.id}`}
                className={cn(
                  'block text-[13px] transition-colors py-0.5',
                  isActive
                    ? 'font-medium text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {section.heading}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
