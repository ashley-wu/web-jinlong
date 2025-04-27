import Link from "next/link"
import Image from "next/image"
import * as motion from "motion/react-client"

import { ButtonWithMotion } from "@/components/motion/Button"
import { AppSidebarOpenForHome } from "@/components/AppSidebar"

import { Attraction } from "@/components/Attraction"
import {
  services,
  type Service
} from "@/data/service"

export default function Home() {
  return (
    <main>
      <Attraction />

      <section className="bg-cream relative">
        <AppSidebarOpenForHome />
        <section
          className={
            "max-w-[var(--max-container-width)] mx-auto px-5 pt-16 pb-36 " +
            "grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-16 justify-items-center"
          }
        >
          <h2 className="sr-only">晉龍遊艇船隊服務項目</h2>

          {services.map((service, i) => (
            <Service
              key={i}
              service={service}
            />
          ))}
        </section>
      </section>
    </main>
  )
}

function Service({ service }: { service: Service }) {
  const { name, activity, illust, duration, links } = service
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "40px"
      }}
      animate={{
        opacity: 1,
        y: "0px"
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.6
      }}
      className="max-w-120"
    >
      <div className="grid justify-items-center">
        <h3 className="text-xl sm:text-2xl font-medium pb-4">{name}</h3>
        <h4 className="text-primary/90 sm:text-lg font-medium">{activity}</h4>
      </div>

      <figure className="py-6">
        <Image
          src={illust}
          alt={name}
          priority
          className=""
        />
      </figure>

      <div className="grid grid-flow-col justify-end gap-x-2 md:gap-x-4 pr-2">
        {links.map((link, i) => (
          <ButtonLinkWithMotion
            key={i}
            link={link}
          />
        ))}
      </div>
    </motion.div>
  )
}

function ButtonLinkWithMotion({
  link
}: { link: { title: string, path: string, isExternalLink?: boolean }}) {
  return (
    <ButtonWithMotion
      asChild
      className="rounded-full shadow-none border-primary/90 border-2"
    >
      <Link
        href={link.path}
        target={link.isExternalLink ? "_blank" : "_self"}
      >
        <div className="group">
          {link.title.split("").map((v, i) => {
            const delayMillisecond = (i + 1) * 50
            return (
              <span
                key={i}
                className="inline-block group-hover:animate-[char-bounce_300ms_ease-in-out]"
                style={{ animationDelay: `${delayMillisecond}ms`}}
              >
                {v}
              </span>
            )
          })}
        </div>
      </Link>
    </ButtonWithMotion>
  )
}
