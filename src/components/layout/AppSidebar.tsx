'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { chapters, examSections } from '@/data/chapters'

export default function AppSidebar() {
  const pathname = usePathname()
  const isExam = pathname.startsWith('/exam')

  return (
    <Sidebar>
      <SidebarContent>
        {/* ── Study Guide ─────────────────────────────── */}
        <SidebarGroup>
          <SidebarGroupLabel>Study Guide</SidebarGroupLabel>
          <SidebarMenu>
            {chapters.map((chapter) => {
              const isActive = pathname === `/guide/${chapter.id}`
              return (
                <Collapsible
                  key={chapter.id}
                  defaultOpen={isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton isActive={isActive} tooltip={chapter.title}>
                        <span className="truncate text-xs">
                          Ch {chapter.number} — {chapter.title}
                        </span>
                        <ChevronRight className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {chapter.topics.map((topic) => (
                          <SidebarMenuSubItem key={topic.id}>
                            <SidebarMenuSubButton asChild>
                              <Link href={topic.href}>{topic.label}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* ── Practice Exam ───────────────────────────── */}
        <SidebarGroup>
          <SidebarGroupLabel>Practice Exam</SidebarGroupLabel>
          <SidebarMenu>
            {examSections.map((section) => {
              const isActive =
                isExam && section.filter === 'all'
              return (
                <SidebarMenuItem key={String(section.filter)}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link href={section.href}>{section.label}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
