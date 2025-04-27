"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Ship, X } from "lucide-react"
import { cn } from '@/lib/utils'

import { 
  Sidebar, SidebarContent,
  SidebarGroup, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarTrigger, useSidebar
} from "@/components/ui/sidebar"
import { navigations, type Navigation } from "@/data/navigation"
import { PATH } from "@/lib/path"

function AppSidebarOpen() {
  const path = usePathname()

  return (
    <SidebarTrigger
      className={
        "flex-col cursor-pointer z-[100] " +
        "bg-white rounded-full shadow-xs p-4 gap-0.5 " +
        (path === PATH.HOME ? "hidden" : "fixed top-4 right-[1vw]")
      }
    >
      <Ship className="size-4 sm:size-5" />
      <div className="group">
        {"MENU".split("").map((v, i) => {
          const delayMillisecond = (i + 1) * 50

          return (
            <span
              key={i}
              className="inline-block group-hover:animate-[char-bounce_300ms_ease-in-out] font-medium text-sm sm:text-base"
              style={{ animationDelay: `${delayMillisecond}ms` }}
            >
              {v}
            </span>
          )
        })}
      </div>
      <span className="sr-only">Open App Sidebar</span>
    </SidebarTrigger>
  )
}

function AppSidebarOpenForHome() {
  return (
    <SidebarTrigger
      className={
        "flex-col cursor-pointer z-[100] " + 
        "bg-white rounded-full shadow-xs p-4 gap-0.5 " +
        "absolute -top-10 right-[1vw]"
      }
    >
      <Ship className="size-4 sm:size-5" />
      <div className="group">
        {"MENU".split("").map((v, i) => {
          const delayMillisecond = (i + 1) * 50

          return (
            <span
              key={i}
              className="inline-block group-hover:animate-[char-bounce_300ms_ease-in-out] font-medium text-sm sm:text-base"
              style={{ animationDelay: `${delayMillisecond}ms` }}
            >
              {v}
            </span>
          )
        })}
      </div>
      <span className="sr-only">Open App Sidebar</span>
    </SidebarTrigger>
  )
}

function AppSidebarClose() {
  return (
    <SidebarTrigger
      className={cn(
        "flex-col cursor-pointer bg-white rounded-full shadow-xs px-2.75 py-3 gap-0.5",
        "absolute top-4 left-[1vw]"
      )}
    >
      <X className="size-4 sm:size-5" />
      <div className="animate-link">
        {"CLOSE".split("").map((v, i) => {
          const delayMillisecond = (i + 1) * 50

          return (
            <span
              key={i}
              className="inline-block font-medium text-xs sm:text-sm char"
              style={{ animationDelay: `${delayMillisecond}ms` }}
            >
              {v}
            </span>
          )
        })}
      </div>
      <span className="sr-only">Close App Sidebar</span>
    </SidebarTrigger>
  )
}

function AppSidebar() {
  return (
    <Sidebar side="right" variant="sidebar" collapsible="offcanvas">
      <SidebarContent className="justify-center items-center">
        <AppSidebarClose />
        <SidebarGroup>
          {/* <figure>
            <Image
              src={illustLogotype}
              alt="晉龍遊艇船隊"
              className="w-40 sm:w-46"
            />
          </figure> */}
          <SidebarGroupContent>
            <SidebarMenu className="gap-y-2">
              {navigations.map(navi => <MenuItem key={navi.title} {...navi} />)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

function MenuItem({ title, url, Icon }: Navigation) {
  const pathname = usePathname()
  const { toggleSidebar } = useSidebar()

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={url === pathname}
        onClick={toggleSidebar}
      >
        <Link href={url}>
          <Icon size={22} />
          <div className="animate-link pl-3">
            {title.split("").map((v, i) => {
              const delayMillisecond = (i + 1) * 50

              return (
                <span
                  key={i}
                  className="inline-block char"
                  style={{ animationDelay: `${delayMillisecond}ms` }}
                >
                  {v}
                </span>
              )
            })}
          </div>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

export {
  AppSidebar,
  AppSidebarOpen,
  AppSidebarOpenForHome,
}