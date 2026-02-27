import { guideContent } from '@/data/guide-content'
import { chapters } from '@/data/chapters'

export interface SectionRef {
  chapterId: string
  chapterNumber: number
  chapterTitle: string
  chapterShortTitle: string
  sectionId: string
  sectionHeading: string
  href: string
}

let _cache: SectionRef[] | null = null

export function getAllSections(): SectionRef[] {
  if (_cache) return _cache

  const refs: SectionRef[] = []
  for (const chapter of guideContent) {
    const meta = chapters.find((c) => c.id === chapter.id)
    for (const section of chapter.sections) {
      refs.push({
        chapterId: chapter.id,
        chapterNumber: chapter.number,
        chapterTitle: chapter.title,
        chapterShortTitle: meta?.shortTitle ?? chapter.title,
        sectionId: section.id,
        sectionHeading: section.heading,
        href: `/guide/${chapter.id}/${section.id}`,
      })
    }
  }

  _cache = refs
  return refs
}

export function getSectionNav(chapterId: string, sectionId: string) {
  const all = getAllSections()
  const idx = all.findIndex(
    (s) => s.chapterId === chapterId && s.sectionId === sectionId
  )
  return {
    current: all[idx] ?? null,
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  }
}

export function generateAllStaticParams() {
  return getAllSections().map((s) => ({
    chapterId: s.chapterId,
    sectionId: s.sectionId,
  }))
}
