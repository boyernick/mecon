'use client'

import { useMemo, useState } from 'react'
import { RotateCcw } from 'lucide-react'
import { questions } from '@/data/questions'
import { Button } from '@/components/ui/button'
import QuestionCard from '@/components/exam/QuestionCard'
import ExamProgress from '@/components/exam/ExamProgress'
import ChapterFilter from '@/components/exam/ChapterFilter'

type Filter = number | 'all'

export default function ExamPage() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const [selected, setSelected] = useState<Record<number, string>>({})
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? questions : questions.filter((q) => q.chapter === filter)),
    [filter]
  )

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: questions.length }
    for (let ch = 1; ch <= 5; ch++) {
      c[String(ch)] = questions.filter((q) => q.chapter === ch).length
    }
    return c
  }, [])

  const revealedInView = filtered.filter((q) => revealed.has(q.id)).length

  function handleReveal(id: number) {
    setRevealed((prev) => new Set(prev).add(id))
  }

  function handleSelect(questionId: number, choiceId: string) {
    setSelected((prev) => ({ ...prev, [questionId]: choiceId }))
  }

  function handleReset() {
    setRevealed(new Set())
    setSelected({})
  }

  return (
    <main>
      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Practice Exam</p>
          <h1 className="text-3xl font-bold tracking-tight">Midterm · Ch 1–5</h1>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          className="shrink-0 gap-2"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset All
        </Button>
      </div>

      {/* Progress */}
      <ExamProgress revealed={revealed.size} total={questions.length} />

      {/* Chapter filter */}
      <ChapterFilter active={filter} onChange={setFilter} counts={counts} />

      {/* Filtered count */}
      {filter !== 'all' && (
        <p className="mb-4 text-sm text-muted-foreground">
          Showing {filtered.length} question{filtered.length !== 1 ? 's' : ''} ·{' '}
          {revealedInView} revealed
        </p>
      )}

      {/* Questions */}
      {filtered.map((q) => (
        <QuestionCard
          key={q.id}
          question={q}
          isRevealed={revealed.has(q.id)}
          selectedId={selected[q.id]}
          onSelect={(choiceId) => handleSelect(q.id, choiceId)}
          onReveal={() => handleReveal(q.id)}
        />
      ))}

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">No questions for this filter.</p>
      )}
    </main>
  )
}
