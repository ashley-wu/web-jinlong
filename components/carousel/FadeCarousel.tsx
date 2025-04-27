"use client"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Fade from "embla-carousel-fade"
import Autoplay from "embla-carousel-autoplay"

import { type CarouselProps } from "@/components/carousel/config"

function FadeCarousel({ 
  slides, options, className = "" 
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel(options, [
    Fade(),
    Autoplay({
      playOnInit: true,
      delay: 4000,
      stopOnMouseEnter: false,
      stopOnInteraction: false
    })
  ])

  return (
    <div className={"embla " + className}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, i) => (
            <figure
              key={i}
              className="embla__slide"
            >
              <Image
                src={slide.image}
                alt={slide.description}
                priority
                className={"embla__slide__img opacity-92"}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

export {
  FadeCarousel
}