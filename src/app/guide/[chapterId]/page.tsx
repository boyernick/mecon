import { redirect, notFound } from 'next/navigation'
import { chapters } from '@/data/chapters'

export function generateStaticParams() {
  return chapters.map((c) => ({ chapterId: c.id }))
}

export default function ChapterIndexPage({ params }: { params: { chapterId: string } }) {
  const chapter = chapters.find((c) => c.id === params.chapterId)
  if (!chapter) notFound()
  redirect(`/guide/${chapter.id}/${chapter.firstSectionId}`)
}
