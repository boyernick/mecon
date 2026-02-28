import { ChapterContent, ChapterSection } from '@/types'
import ConceptCard from './ConceptCard'
import FormulaBlock from './FormulaBlock'

const weightConfig: Record<string, { label: string; className: string }> = {
  high: {
    label: 'Very Important',
    className:
      'inline-flex items-center rounded-full border border-transparent bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  },
  medium: {
    label: 'Important',
    className:
      'inline-flex items-center rounded-full border border-transparent bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
  },
  low: {
    label: 'Not Important',
    className:
      'inline-flex items-center rounded-full border border-transparent bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground',
  },
}

interface Props {
  chapter: ChapterContent
  section: ChapterSection
}

export default function SingleSectionContent({ section }: Props) {
  const badge = section.examWeight ? weightConfig[section.examWeight] : null

  return (
    <article>
      <div className="mb-6 flex items-center gap-3">
        <h1 id={section.id} className="text-2xl font-bold tracking-tight scroll-mt-20">
          {section.heading}
        </h1>
        {badge && <span className={badge.className}>{badge.label}</span>}
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
                  <th
                    key={h}
                    className="py-2 pr-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
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
