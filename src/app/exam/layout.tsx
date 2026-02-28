export default function ExamLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 justify-center">
      <div className="w-full min-w-0 max-w-3xl px-6 lg:px-10 py-10">
        {children}
      </div>
    </div>
  )
}
