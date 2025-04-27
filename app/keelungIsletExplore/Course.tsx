"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useInView } from "motion/react"

import { ProgressDesktop, ProgressMobile } from "@/app/keelungIsletExplore/Progress"
import {
  type Course,
  type Scene
} from "@/data/keelungIslet/course"

type Props = {
  course: Course
  index: number
}

function Course({ course, index }: Props) {
  const { name, route, scenes } = course
  const [currentProgress, setCurrentProgress] = useState(-1)
  const isOrderOdd = (index % 2) === 1

  return (
    <section className={isOrderOdd ? "bg-cream wave-cream" : "bg-sky-blue wave-sky-blue"}>
      <section className="max-w-[var(--max-container-width)] mx-auto grid sm:grid-cols-[200px_1fr] sm:gap-x-4 md:gap-x-8 px-5 pt-6 sm:pt-20 pb-36">
        <aside
          className={
            "sticky top-0 sm:top-20 self-start sm:h-[calc(100vh-100px)] " +
            "grid grid-rows-[auto_auto_1fr] pt-8 sm:pt-0 pb-6 sm:pb-0 z-20! " +
            (isOrderOdd ? "bg-cream sm:bg-none" : "bg-sky-blue sm:bg-none")
          }
        >
          <h3 className="text-2xl sm:text-3xl font-medium text-center sm:text-left pb-6 sm:pb-10">{name}</h3>
          <ProgressMobile scenes={scenes} currentProgress={currentProgress} />
          <ProgressDesktop scenes={scenes} currentProgress={currentProgress} />
        </aside>

        <div>
          {scenes.map((scene, i, arr) => (
            <Scene
              key={i}
              scene={scene}
              route={route}
              isLast={i === (arr.length - 1)}
              setProgress={() => setCurrentProgress(i)}
            />
          ))}
        </div>
      </section>
    </section>
  )
}

function Scene({
  scene, setProgress
}: {
  scene: Scene, route: "sea" | "land", isLast: boolean, setProgress: () => void
}) {
  // route, isLast, 
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.7 })

  useEffect(() => {
    if (isInView) {
      setProgress()
    }
  }, [isInView, setProgress])


  return (
    <div className="pb-16">
      <div
        ref={ref} 
        className="p-3 sm:p-6 rounded-sm bg-white"
      >
        <figure>
          <Image
            src={scene.image}
            alt={scene.name}
          />
        </figure>
        <div className="text-lg sm:text-xl font-medium pt-5 pb-3">{scene.name}</div>
        <div className="text-gray-600">{scene.description}</div>
      </div>
    </div>
  )
}

export {
  Course
}