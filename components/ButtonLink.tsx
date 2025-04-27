import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

type Props = {
  title: string
  path: string
  asChild?: boolean
  isExternalLink?: boolean
  className?: string
}

function ButtonLink({ 
  title, 
  path, 
  asChild = true, 
  isExternalLink = false, 
  className
}: Props) {
  return (
    <Button
      asChild={asChild}
      className={className}
    >
      <Link
        href={path}
        target={isExternalLink ? "_blank" : "_self"}
      >
        <div className="group grid grid-flow-col items-center">
          {title.split("").map((v, i) => {
            const delayMillisecond = (i + 1) * 50
            return (
              <span
                key={i}
                className="inline-block group-hover:animate-[char-bounce_300ms_ease-in-out]"
                style={{ animationDelay: `${delayMillisecond}ms` }}
              >
                {v}
              </span>
            )
          })}
          {isExternalLink && <ExternalLink size={18} className="ml-1" />}
        </div>
      </Link>
    </Button>
  )
}

export {
  ButtonLink
}