import { StaticImageData } from "next/image"

// Jinlong
import imgJinlong from "@/public/img/yacht/yacht-jinlong.webp"
import illustJinlong from "@/public/illustration/jinlong.webp"

// Jinlong 6
import imgJinlong6 from "@/public/img/yacht/yacht-jinlong6.webp"
import illustJinlong6 from "@/public/illustration/jinlong6.webp"

type Yacht = {
  name: string
  englishName: string
  facilities: Facility[]
  level: string
  passengerCapacity: number
  illust: StaticImageData
  image: { img: StaticImageData, description: string }
}

type Facility = "空調設備" | "影音設備" | "安全設備" | "漁業執照" | "BBQ"

const yachts: Yacht[] = [
  {
    name: "晉龍 6 號",
    englishName: "JIN LONG 6",
    facilities: ["空調設備", "影音設備", "安全設備", "漁業執照", "BBQ"],
    level: "八十呎五十噸級休閒娛樂遊艇",
    passengerCapacity: 68,
    illust: illustJinlong6,
    image: {
      img: imgJinlong6,
      description: "晉龍 6 號"
    }
  },
  {
    name: "晉龍號",
    englishName: "JIN LONG",
    facilities: ["空調設備", "影音設備", "安全設備", "漁業執照", "BBQ"],
    level: "二十噸級休閒娛樂快速艇",
    passengerCapacity: 46,
    illust: illustJinlong,
    image: {
      img: imgJinlong,
      description: "晉龍號"
    }
  },
]

export {
  yachts,
  type Yacht
}

