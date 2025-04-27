import { motion } from "motion/react"

import { type Scene } from "@/data/keelungIslet/course"

type Props = {
  scenes: Scene[]
  currentProgress: number
}

function ProgressDesktop({ scenes, currentProgress }: Props) {
  return (
    <motion.ul
      initial={{
        transform: "translateY(30px)",
        opacity: 0
      }}
      animate={{
        transform: "translateY(0px)",
        opacity: 1
      }}
      transition={{
        type: "spring",
        duration: 1.2
      }}
      className="hidden sm:block"
    >
      {scenes.map((scene, i, arr) => {
        const isLast = i === (arr.length - 1)
        const progressClass =
          currentProgress === i ? "font-medium before:bg-primary after:bg-gray-300" :
          currentProgress > i ? "font-normal before:bg-primary after:bg-primary" :
          "font-normal text-gray-600 before:bg-gray-400 after:bg-gray-300"

        return (
          <li
            key={i}
            className={
              "relative text-sm pl-6 pb-4 " +
              "before:absolute before:content-[''] before:top-2 before:left-0 before:size-2 before:rounded-full before:z-10 " +
              (!isLast ? "after:absolute after:content-[''] after:top-2.5 after:left-0.75 after:h-full after:w-0.5 " : "") +
              progressClass
            }
          >
            {scene.name}
          </li>
        )
      })}
    </motion.ul>
  )
}

function ProgressMobile({ scenes, currentProgress }: Props) {
  return (
    <ul className="flex sm:hidden justify-center space-x-6">
      {scenes.map((_, i, arr) => {
        const isLast = i === (arr.length - 1)
        const progressClass =
          currentProgress === i ? "bg-primary before:bg-gray-200" :
          currentProgress > i ? "bg-primary/80 before:bg-primary/80" :
          "bg-gray-300 before:bg-gray-200"

        return (
          <li
            key={i}
            className={
              "relative size-2 rounded-full z-10 " +
              (!isLast ? "before:absolute before:content-[''] before:h-1 before:w-6.5 before:top-0.5 before:-right-6.5 " : "") +
              progressClass
            }
          >
          </li>
        )
      })}
    </ul>
  )
}

export {
  ProgressDesktop,
  ProgressMobile
}