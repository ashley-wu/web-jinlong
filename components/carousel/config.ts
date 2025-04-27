import { ReactNode } from "react"
import { EmblaOptionsType } from "embla-carousel"
import { StaticImageData } from "next/image"

type CarouselImage = {
  image: StaticImageData
  description: string
}

type CarouselProps = {
  slides: CarouselImage[]
  options: EmblaOptionsType
  className?: string
  children?: ReactNode
}

const carouselOptions: EmblaOptionsType = {
  loop: true
}

export {
  carouselOptions,
  type CarouselProps,
  type CarouselImage
}