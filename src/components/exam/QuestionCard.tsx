'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { Question } from '@/types'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Props {
  question: Question
  isRevealed: boolean
  selectedId: string | undefined
  onSelect: (choiceId: string) => void
  onReveal: () => void
}

export default function QuestionCard({
  question,
  isRevealed,
  selectedId,
  onSelect,
  onReveal,
}: Props) {
  const [showWorkings, setShowWorkings] = useState(false)

  const isCorrect = selectedId === question.correctId

  return (
    <div className="mb-6 rounded-lg border bg-card text-card-foreground shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 border-b px-5 py-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Q{question.id}
        </span>
        <span className="text-muted-foreground">·</span>
        <span className="text-xs text-muted-foreground">Chapter {question.chapter}</span>
        <span className="text-muted-foreground">·</span>
        <span className="text-xs text-muted-foreground">{question.topic}</span>
      </div>

      {/* Question text */}
      <div className="px-5 pt-4 pb-3">
        <p className="text-sm leading-relaxed text-foreground">{question.text}</p>
      </div>

      {/* Choices */}
      <div className="space-y-2 px-5 pb-4">
        {question.choices.map((choice) => {
          const isSelected = selectedId === choice.id
          const isCorrectChoice = choice.id === question.correctId

          let choiceClass =
            'flex items-start gap-3 w-full rounded-md border px-4 py-2.5 text-left text-sm transition-colors'

          if (!isRevealed) {
            choiceClass += isSelected
              ? ' border-foreground bg-accent text-foreground'
              : ' border-border hover:border-foreground/40 hover:bg-accent/50 cursor-pointer'
          } else {
            if (isCorrectChoice) {
              choiceClass += ' border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300'
            } else if (isSelected && !isCorrect) {
              choiceClass += ' border-red-400 bg-red-50 text-red-900 dark:bg-red-950/30 dark:text-red-300'
            } else {
              choiceClass += ' border-border text-muted-foreground'
            }
          }

          return (
            <button
              key={choice.id}
              disabled={isRevealed}
              onClick={() => !isRevealed && onSelect(choice.id)}
              className={choiceClass}
            >
              <span className="mt-0.5 shrink-0 font-mono text-xs font-semibold uppercase text-muted-foreground w-3">
                {choice.id}
              </span>
              <span className="flex-1">{choice.text}</span>
              {isRevealed && isCorrectChoice && (
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              )}
              {isRevealed && isSelected && !isCorrect && choice.id === selectedId && (
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
              )}
            </button>
          )
        })}
      </div>

      {/* Reveal button */}
      {!isRevealed && (
        <div className="border-t px-5 py-3">
          <Button size="sm" variant="secondary" onClick={onReveal}>
            Reveal Answer
          </Button>
        </div>
      )}

      {/* Answer + explanation (shown after reveal) */}
      {isRevealed && (
        <div className="border-t px-5 py-4 space-y-3">
          <div className="flex items-center gap-2">
            {isCorrect && selectedId ? (
              <>
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  Correct!
                </span>
              </>
            ) : selectedId ? (
              <>
                <XCircle className="h-4 w-4 text-red-400" />
                <span className="text-sm font-medium text-red-600 dark:text-red-400">
                  Incorrect — correct answer:{' '}
                  <span className="uppercase font-bold">{question.correctId}</span>
                </span>
              </>
            ) : (
              <span className="text-sm font-medium text-muted-foreground">
                Correct answer:{' '}
                <span className="uppercase font-bold text-foreground">{question.correctId}</span>
              </span>
            )}
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">{question.explanation}</p>

          {question.workings && (
            <div>
              <button
                onClick={() => setShowWorkings((v) => !v)}
                className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {showWorkings ? (
                  <ChevronUp className="h-3 w-3" />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
                Step-by-step workings
              </button>
              {showWorkings && (
                <pre className="mt-2 rounded-md bg-muted px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground whitespace-pre-wrap">
                  {question.workings}
                </pre>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
