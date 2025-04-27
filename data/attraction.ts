import { StaticImageData } from "next/image"

import imgAttraction01 from "@/public/img/keelung-islet/attraction-01.webp"
import imgAttraction02 from "@/public/img/keelung-islet/attraction-02.webp"

type Attraction = {
  image: StaticImageData
  description: string
}

const attractions: Attraction[] = [
  {
    image: imgAttraction01,
    description: "基隆嶼"
  },
  {
    image: imgAttraction02,
    description: "基隆島燈塔"
  },
]

export {
  attractions,
  type Attraction
}