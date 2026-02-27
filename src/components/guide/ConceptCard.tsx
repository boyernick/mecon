import { Concept } from '@/types'
import ExamTrapAlert from './ExamTrapAlert'

export default function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <div className="mb-6">
      <h3 className="mb-1 font-semibold text-foreground">{concept.term}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{concept.explanation}</p>
      {concept.examTrap && <ExamTrapAlert text={concept.examTrap} />}
    </div>
  )
}
