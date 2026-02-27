import { AlertTriangle } from 'lucide-react'

export default function ExamTrapAlert({ text }: { text: string }) {
  return (
    <div className="my-4 flex gap-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-800 dark:bg-amber-950/30">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
      <p className="text-sm text-amber-800 dark:text-amber-300">{text}</p>
    </div>
  )
}
