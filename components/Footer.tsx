import { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

import { 
  Tooltip, TooltipProvider, TooltipContent, TooltipTrigger
} from "@/components/ui/tooltip"
import { PATH } from "@/lib/path"
import { 
  PHONE, ADDRESS, FACEBOOK_URL, LINE_URL, INSTAGRAM_URL, EMAIL, GOOGLE_MAP_URL 
} from "@/data/info"

// LOGO
import imgLogo from "@/public/img/jinlong-logo.webp"
import illustLogotype from "@/public/illustration/jinlong-logotype.webp"

function Footer() {
  return (
    <footer 
      id="footer"
      className="relative pb-4 bg-sea-blue wave-sea-blue"
    >
      <section className="max-w-[var(--max-container-width)] mx-auto px-5">
        <Logo />
        <Address />
        <Contact />

        <div className="text-xs text-slate-600 text-center pt-2 space-x-4">
          <span>Copyright © 晉龍遊艇船隊</span>
          <span>All rights reserved</span>
        </div>
      </section>
    </footer>
  )
}

function Logo() {
  return (
    <h1>
      <Link href={PATH.HOME}>
        <figure
          className="w-40 mx-auto"
        >
          <Image 
            src={imgLogo}
            alt="JINLONG LOGO"
          />
        </figure>
        <figure
          className="w-40 md:w-46 mx-auto"
        >
          <Image 
            src={illustLogotype}
            alt="晉龍遊艇船隊"
          />
        </figure>
      </Link>
    </h1>
  )
}

function Address() {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="font-medium">{ADDRESS}</div>
      <Link
        href={GOOGLE_MAP_URL}
        className="ml-2"
        target="_blank"
      >
        <MapPin size={18} />
      </Link>
    </div>
  )
}

function Contact() {
  return (
    <div className="flex justify-center gap-x-3">
      {/* PHONE */}
      <ContactWithTooltip info={PHONE}>
        <span className="p-1.5 bg-primary rounded-full text-white">
          <Phone size={16} />
        </span>
      </ContactWithTooltip>

      {/* EMAIL */}
      <ContactWithTooltip info={EMAIL}>
        <span className="p-1.25 bg-primary rounded-full text-white">
          <Mail size={18} />
        </span>
      </ContactWithTooltip>
    </div>
  )
}

function ContactWithTooltip({ info, children }: { info: string, children: ReactNode }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="size-10 grid place-content-center hover:cursor-pointer">
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-medium">{info}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function ContactWithLink({ url, children }: { url: string, children: ReactNode }) {
  return (
    <Link
      href={url}
      className="size-10 grid place-content-center"
      target="_blank"
    >
      {children}
    </Link>
  )
}

export {
  Footer
}