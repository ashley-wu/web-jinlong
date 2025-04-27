import Image from "next/image"
import { AirVent, MicVocal, LifeBuoy, IdCard, Beef } from "lucide-react"

import { fleetMetadata } from "@/lib/metadata"
import { yachts, type Yacht } from "@/data/yacht"

export const metadat = fleetMetadata

export default function Fleet() {
  return (
    <main>
      {yachts.map((yacht, i) => (
        <Yacht
          key={i}
          yacht={yacht}
          index={i}
        />
      ))}
    </main>
  )
}

function Yacht({ yacht, index }: { yacht: Yacht, index: number }) {
  const { name, englishName, facilities, level, passengerCapacity, image } = yacht
  const isOrderOdd = index % 2 === 1

  return (
    <section className={"min-h-screen px-5 pt-30 pb-36 " + (isOrderOdd ? "bg-cream wave-cream" : "bg-sky-blue")}>
      <div 
        className={
          "max-w-[var(--max-container-width)] mx-auto grid gap-x-8 " + 
          (isOrderOdd ? "md:grid-cols-[220px_1fr]" : "md:grid-cols-[1fr_220px]")
        }
      >
        {/* For Mobile */}
        <div className="md:hidden space-y-2 pb-8 pl-2 sm:pl-4">
          <h2 className="font-medium text-2xl">{name}</h2>
          <h3 className="font-medium text-sm text-gray-600">{englishName}</h3>
        </div>

        <figure className="rounded overflow-hidden">
          <Image
            src={image.img}
            alt={image.description}
            className="object-cover"
          />
        </figure>

        <div className={isOrderOdd ? "md:order-first" : ""}>
          {/* For Desktop */}
          <div className="hidden md:block space-y-2 pt-6">
            <h2 className="font-medium text-2xl">{name}</h2>
            <h3 className="font-medium text-sm text-gray-600">{englishName}</h3>
          </div>

          <div className="pt-10 pl-2 sm:pl-4 md:pl-0">
            <div className="pb-8 space-y-2">
              <div className="font-medium">{level}</div>
              <div className="font-medium">{`可承載乘客 ${passengerCapacity} 人`}</div>
            </div>

            <ul className="flex flex-wrap gap-x-3 md:gap-x-4 gap-y-2">
              {facilities.map((facility, i) => {
                const iconSize = 18
                const icon =
                  facility === "空調設備" ? <AirVent size={iconSize} /> :
                  facility === "影音設備" ? <MicVocal size={iconSize} /> :
                  facility === "安全設備" ? <LifeBuoy size={iconSize} /> :
                  facility === "漁業執照" ? <IdCard size={iconSize} /> : <Beef size={iconSize} />

                return (
                  <li
                    key={i}
                    className="size-15 grid justify-items-center items-center"
                  >
                    {icon}
                    <div className="text-sm">{facility}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}