import { ChapterContent as ChapterContentType } from '@/types'
import ConceptCard from './ConceptCard'
import FormulaBlock from './FormulaBlock'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

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

export default function ChapterContent({ chapter }: { chapter: ChapterContentType }) {
  return (
    <article>
      <div className="mb-8">
        <p className="text-sm font-medium text-muted-foreground mb-1">Chapter {chapter.number}</p>
        <h1 className="text-3xl font-bold tracking-tight">{chapter.title}</h1>
      </div>

      {chapter.sections.map((section, i) => (
        <section key={section.id} className="mb-12">
          {i > 0 && <Separator className="mb-10" />}

          <div className="mb-5 flex items-center gap-3">
            <h2
              id={section.id}
              className="text-xl font-semibold tracking-tight scroll-mt-20"
            >
              {section.heading}
            </h2>
            {section.examWeight && (
              <Badge variant={weightVariants[section.examWeight]}>
                {weightLabels[section.examWeight]}
              </Badge>
            )}
          </div>

          {/* Concepts */}
          {section.concepts?.map((concept) => (
            <ConceptCard key={concept.term} concept={concept} />
          ))}

          {/* Formulas */}
          {section.formulas && section.formulas.length > 0 && (
            <div className="mt-6">
              <h3 id={`${section.id}-formulas`} className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground scroll-mt-20">
                Key Formulas
              </h3>
              {section.formulas.map((formula) => (
                <FormulaBlock key={formula.label} formula={formula} />
              ))}
            </div>
          )}

          {/* Tables */}
          {section.tables?.map((table, ti) => (
            <div key={ti} className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    {table.headers.map((h) => (
                      <th key={h} className="py-2 pr-4 text-left font-semibold text-muted-foreground">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-border/50 last:border-0">
                      {row.map((cell, ci) => (
                        <td key={ci} className="py-2 pr-4 text-muted-foreground">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </section>
      ))}
    </article>
  )
}
