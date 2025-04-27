import { ReactNode } from "react"
import { Badge as BadgeUI } from "@/components/ui/badge"

type Props = {
  title: string
  frontIcon?: ReactNode
  rearIcon?: ReactNode
  className?: string
}

function Badge({
  title, frontIcon, rearIcon, className
}: Props) {
  return (
    <BadgeUI className={"gap-x-2 " + className}>
      {frontIcon && frontIcon}
      {title}
      {rearIcon && rearIcon}
    </BadgeUI>
  )
}

export {
  Badge
}