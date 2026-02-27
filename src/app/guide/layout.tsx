import TableOfContents from '@/components/layout/TableOfContents'

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 gap-0">
      {/* Center content — scrollable */}
      <main className="flex-1 min-w-0 px-8 py-10 max-w-3xl">
        {children}
      </main>

      {/* Right TOC — sticky, desktop only */}
      <aside className="hidden xl:block w-56 shrink-0 py-10 pr-6">
        <TableOfContents />
      </aside>
    </div>
  )
}
