"use client"
import Image from "next/image"
import { motion, steps } from "motion/react"

import { FadeCarousel } from "@/components/carousel/FadeCarousel"
import { carouselOptions } from "@/components/carousel/config"
import { attractions, type Attraction } from '@/data/attraction'

// ILLUST
import logotype from "@/public/illustration/jinlong-logotype.webp"
import illustKeelungIslet from "@/public/illustration/keelung-islet-cut.webp"
import illustJinlong6 from "@/public/illustration/jinlong6.webp"
import illustSun from "@/public/illustration/sun.webp"
import illustBirdBlue from "@/public/illustration/bird-blue.webp"
import illustBirdPink from "@/public/illustration/bird-pink.webp"

function Attraction() {
  return (
    <>
      <motion.section
        initial={{
          opacity: .9
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0,
          ease: "easeInOut"
        }}
        className="relative w-full overflow-hidden"
      >
        {/* CAROUSEL */}
        <FadeCarousel
          slides={attractions}
          options={carouselOptions}
          className="h-screen"
        />

        {/* SUN */}
        <motion.figure
          animate={{
            rotate: [0, 45, 90, 135, 180, 225, 270, 315]
          }}
          transition={{
            ease: steps(8),
            duration: 48,
            repeat: Infinity
          }}
          className="absolute z-[100] size-30 md:size-40 top-[8vw] right-[6vw] md:right-[12vw]"
        >
          <Image
            src={illustSun}
            alt=""
            priority
          />
        </motion.figure>

        {/* BIRD BLUE */}
        <motion.figure
          animate={{
            x: ["0px", "-60px", "0px"],
            y: ["15px", "-15px", "15px"]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className={
            "absolute z-[100] w-16 h-20 top-[60vw] left-[30vw] " +
            "md:w-20 md:h-27 md:top-[20vw] md:left-[27vw]"
          }
        >
          <Image
            src={illustBirdBlue}
            alt=""
            priority
          />
        </motion.figure>

        {/* BIRD PINK */}
        <motion.figure
          animate={{
            x: ["-30px", "0px", "-30px"],
            y: ["-15px", "0px", "-15px"]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className={
            "absolute z-[100] w-14 h-20 top-[90vw] right-[26vw] " +
            "md:w-16 md:h-24 md:top-[36vw] md:right-[30vw]"
          }
        >
          <Image
            src={illustBirdPink}
            alt=""
            priority
          />
        </motion.figure>
      </motion.section>

      <section id="attraction-illust">
        <h2 className="w-42 sm:w-48 md:w-64 mx-auto z-20 pt-4">
          <figure>
            <Image
              src={logotype}
              alt="晉龍遊艇船隊"
              priority
            />
          </figure>
          <span className="sr-only">晉龍遊艇船隊</span>
        </h2>

        {/* YACHT */}
        <figure 
          className={
            "absolute z-10 w-36 sm:w-50 md:w-60 " +
            "-top-12 sm:-top-16 md:-top-18 " +
            "left-[6vw]"
          }
        >
          <Image
            src={illustJinlong6}
            alt=""
            priority
            unoptimized
          />
        </figure>

        {/* KEELUNG ISLET */}
        <figure
          className={
            "absolute z-10 w-48 sm:w-90 md:w-120 " +
            "-top-20 sm:-top-34 md:-top-45 " +
            "-right-4"
          }
        >
          <Image
            src={illustKeelungIslet}
            alt=""
            priority
            unoptimized
          />
        </figure>
      </section>
    </>
  )
}

export {
  Attraction
}