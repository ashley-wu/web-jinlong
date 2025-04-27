import { zenMaruGothic } from "@/lib/font"
import "@/style/main.css"
import { rootMetadata } from "@/lib/metadata"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar, AppSidebarOpen } from "@/components/AppSidebar"
import { Footer } from "@/components/Footer"

export const metadata = rootMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="zh-TW"
      className={`${zenMaruGothic.variable}`}
    >
      <body>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <main className="h-screen w-screen">
            <AppSidebarOpen />
            {children}
            <Footer />
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
