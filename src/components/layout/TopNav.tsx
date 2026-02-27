'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'
import ShareButton from './ShareButton'
import CommandMenu from './CommandMenu'

export default function TopNav() {
  const pathname = usePathname()

  const isGuide = pathname.startsWith('/guide')
  const isExam = pathname.startsWith('/exam')

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-4" />

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/guide/chapter-1" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isGuide && 'bg-accent text-accent-foreground'
                  )}
                >
                  Study Guide
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/exam" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isExam && 'bg-accent text-accent-foreground'
                  )}
                >
                  Practice Exam
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-1">
          <CommandMenu />
          <ShareButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
