'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { chapters } from '@/data/chapters'

const numberWords: Record<number, string> = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
}

export default function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-3">
        <Link href="/guide/chapter-1" className="font-semibold tracking-tight text-foreground">
          Mecon
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {chapters.map((chapter) => {
                const isActive = pathname.startsWith(`/guide/${chapter.id}`)
                return (
                  <SidebarMenuItem key={chapter.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={chapter.title}
                    >
                      <Link href={`/guide/${chapter.id}/${chapter.firstSectionId}`}>
                        Chapter {numberWords[chapter.number]}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
