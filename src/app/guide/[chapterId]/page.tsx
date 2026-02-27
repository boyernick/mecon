import { notFound } from 'next/navigation'
import { getChapterContent } from '@/data/guide-content'
import ChapterContent from '@/components/guide/ChapterContent'

interface Props {
  params: { chapterId: string }
}

export function generateStaticParams() {
  return [
    { chapterId: 'chapter-1' },
    { chapterId: 'chapter-2' },
    { chapterId: 'chapter-3' },
    { chapterId: 'chapter-4' },
    { chapterId: 'chapter-5' },
  ]
}

export default function ChapterPage({ params }: Props) {
  const chapter = getChapterContent(params.chapterId)
  if (!chapter) notFound()

  return <ChapterContent chapter={chapter} />
}
