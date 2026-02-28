import { AlertTriangle } from 'lucide-react'

export default function ExamTrapAlert({ text }: { text: string }) {
  return (
    <div className="my-4 flex gap-3 rounded-md border border-orange-200 bg-orange-50 px-4 py-3 dark:border-orange-800 dark:bg-orange-950/30">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
      <p className="text-sm text-orange-800 dark:text-orange-300">{text}</p>
    </div>
  )
}
