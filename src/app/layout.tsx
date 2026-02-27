import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { SidebarProvider } from '@/components/ui/sidebar'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import AppSidebar from '@/components/layout/AppSidebar'
import TopNav from '@/components/layout/TopNav'
import ScrollToTop from '@/components/layout/ScrollToTop'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'ECON E-1615 — Managerial Economics',
  description: 'Harvard Extension ECON E-1615 midterm study guide and practice exam',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-1 flex-col min-h-screen w-full overflow-x-hidden">
              <ScrollToTop />
              <TopNav />
              {children}
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
