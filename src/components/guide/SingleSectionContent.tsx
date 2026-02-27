import { ChapterContent, ChapterSection } from '@/types'
import ConceptCard from './ConceptCard'
import FormulaBlock from './FormulaBlock'
import { Badge } from '@/components/ui/badge'

const weightLabels: Record<string, string> = {
  high: 'High Yield',
  medium: 'Medium',
  low: 'Low',
}

const weightVariants: Record<string, 'default' | 'secondary' | 'outline'> = {
  high: 'default',
  medium: 'secondary',
  low: 'outline',
}

interface Props {
  chapter: ChapterContent
  section: ChapterSection
}

export default function SingleSectionContent({ section }: Props) {
  return (
    <article>
      <div className="mb-6 flex items-center gap-3">
        <h1 id={section.id} className="text-2xl font-bold tracking-tight scroll-mt-20">
          {section.heading}
        </h1>
        {section.examWeight && (
          <Badge variant={weightVariants[section.examWeight]}>
            {weightLabels[section.examWeight]}
          </Badge>
        )}
      </div>

      {section.concepts?.map((concept) => (
        <ConceptCard key={concept.term} concept={concept} />
      ))}

      {section.formulas && section.formulas.length > 0 && (
        <div className="mt-6">
          <h2
            id={`${section.id}-formulas`}
            className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground scroll-mt-20"
          >
            Key Formulas
          </h2>
          {section.formulas.map((formula) => (
            <FormulaBlock key={formula.label} formula={formula} />
          ))}
        </div>
      )}

      {section.tables?.map((table, ti) => (
        <div key={ti} className="mt-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                {table.headers.map((h) => (
                  <th key={h} className="py-2 pr-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-border/50 last:border-0">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-2.5 pr-4 text-sm text-muted-foreground">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </article>
  )
}
