import { Sun, Sailboat, Footprints, Component, Fish, LucideIcon } from "lucide-react"

import { PATH } from "@/lib/path"

type Navigation = {
  title: string
  url: string
  Icon: LucideIcon
}

const navigations: Navigation[] = [
  {
    title: "服務項目",
    url: PATH.HOME,
    Icon: Sun,
  },
  {
    title: "晉龍船隊",
    url: PATH.FLEET,
    Icon: Sailboat,
  },
  {
    title: "探索基隆嶼",
    url: PATH.KEELUNG_ISLET_EXPLORE,
    Icon: Footprints,
  },
  {
    title: "基隆嶼行程",
    url: PATH.KEELUNG_ISLET_TOUR,
    Icon: Component,
  },
  {
    title: "海釣行程",
    url: PATH.OFFSHORE_FISHING_TOUR,
    Icon: Fish,
  },
]

export {
  navigations,
  type Navigation
}