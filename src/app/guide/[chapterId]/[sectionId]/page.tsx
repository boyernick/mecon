import { notFound } from 'next/navigation'
import { getChapterContent } from '@/data/guide-content'
import { getSectionNav, generateAllStaticParams } from '@/lib/guide-nav'
import SingleSectionContent from '@/components/guide/SingleSectionContent'
import GuidePagination from '@/components/guide/GuidePagination'

interface Props {
  params: { chapterId: string; sectionId: string }
}

export function generateStaticParams() {
  return generateAllStaticParams()
}

export async function generateMetadata({ params }: Props) {
  const chapter = getChapterContent(params.chapterId)
  const section = chapter?.sections.find((s) => s.id === params.sectionId)
  if (!section) return {}
  return {
    title: `${section.heading} — ECON E-1615`,
  }
}

export default function SectionPage({ params }: Props) {
  const chapter = getChapterContent(params.chapterId)
  if (!chapter) notFound()

  const section = chapter.sections.find((s) => s.id === params.sectionId)
  if (!section) notFound()

  const { prev, next } = getSectionNav(params.chapterId, params.sectionId)

  return (
    <>
      <GuidePagination prev={prev} next={next} variant="top" />

      <div className="mb-3">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Chapter {chapter.number} · {chapter.title}
        </p>
      </div>

      <SingleSectionContent chapter={chapter} section={section} />

      <GuidePagination prev={prev} next={next} variant="bottom" />
    </>
  )
}
