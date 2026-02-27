import { Progress } from '@/components/ui/progress'

interface Props {
  revealed: number
  total: number
}

export default function ExamProgress({ revealed, total }: Props) {
  const pct = total === 0 ? 0 : Math.round((revealed / total) * 100)

  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">
          {revealed} / {total} revealed
        </span>
        <span className="text-muted-foreground">{pct}%</span>
      </div>
      <Progress value={pct} className="h-2" />
    </div>
  )
}
