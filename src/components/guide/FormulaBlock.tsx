import { Formula } from '@/types'

export default function FormulaBlock({ formula }: { formula: Formula }) {
  return (
    <div className="my-4 rounded-md border bg-muted/40 px-5 py-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {formula.label}
      </p>
      <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{formula.expression}</pre>
      {formula.example && (
        <div className="mt-3 border-t pt-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Example</p>
          <pre className="font-mono text-sm text-muted-foreground whitespace-pre-wrap">{formula.example}</pre>
        </div>
      )}
    </div>
  )
}
