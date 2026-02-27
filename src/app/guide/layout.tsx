import TableOfContents from '@/components/layout/TableOfContents'

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 justify-center">
      {/* Center content */}
      <main className="w-full min-w-0 max-w-3xl px-6 lg:px-10 py-10">
        {children}
      </main>

      {/* Right TOC — sticky, desktop only */}
      <aside className="hidden xl:block w-64 shrink-0 py-10 pr-6">
        <div className="sticky top-20">
          <TableOfContents />
        </div>
      </aside>
    </div>
  )
}
