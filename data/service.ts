import { StaticImageData } from "next/image"

import { PATH } from "@/lib/path"
import { SULFRIC_FIRE_FISHING_RESERVATION_URL } from "@/data/info"

import illustKeelungIslet from "@/public/illustration/service-keelung-islet.webp"
import illustOffshoreFishing from "@/public/illustration/service-offshore-fishing.webp"
import illustSulfricFireFishing from "@/public/illustration/service-sulfric-fire-fishing.webp"
import illustCharter from "@/public/illustration/service-charter.webp"

type Service = {
  name: string
  activity: string
  duration: string
  illust: StaticImageData
  links: {
    title: string
    path: string
    isExternal?: boolean
  }[]
}

const services: Service[] = [
  {
    name: "基隆嶼登島行程",
    activity: "專業導覽員帶你探索基隆嶼",
    duration: "4 ～ 10月",
    illust: illustKeelungIslet,
    links: [
      { title: "探索基隆嶼", path: PATH.KEELUNG_ISLET_EXPLORE },
      { title: "基隆嶼行程", path: PATH.KEELUNG_ISLET_TOUR },
    ]
  },
  {
    name: "基隆海釣行程",
    activity: "專業海釣 | 新手海釣",
    duration: "全年",
    illust: illustOffshoreFishing,
    links: [
      { title: "海釣行程", path: PATH.OFFSHORE_FISHING_TOUR },
    ]
  },
  {
    name: "金山蹦火仔",
    activity: "體驗百年磺火漁法 蹦火仔",
    duration: "5 ～ 9月",
    illust: illustSulfricFireFishing,
    links: [
      { title: "預約金山蹦火仔行程", path: SULFRIC_FIRE_FISHING_RESERVATION_URL, isExternal: true },
    ]
  },
  {
    name: "專屬行程",
    activity: "團體包船 | SUP | 夏日玩水派對",
    duration: "全年",
    illust: illustCharter,
    links: [
      { title: "訂製專屬行程請與我們聯絡", path: "./#footer" },
    ]
  },
]

export {
  services,
  type Service
}