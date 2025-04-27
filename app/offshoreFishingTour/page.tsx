import { Card } from "@/components/ui/card"
import { ButtonLink } from "@/components/ButtonLink"

import { offshoreFishingTourMetadata } from "@/lib/metadata"
import { fishingSeasons } from "@/data/fishingSeason"
import { FACEBOOK_URL, OFFSHORE_FISHING_RESERVATION_URL } from "@/data/info"

export const metadata = offshoreFishingTourMetadata

export default function OffshoreFishingTour() {
  return (
    <main className="bg-cream">
      <section className="max-w-[var(--max-container-width)] mx-auto px-5 pt-20 pb-36">
        <h2 className="text-3xl sm:text-4xl font-medium text-center">海釣季節行程</h2>

        <section className="py-16">
          <Card className="w-full max-w-[720px] mx-auto justify-center gap-y-4 px-6 sm:px-8 md:px-10 py-10">
            {fishingSeasons.map((fishingSeason, i) => (
              <div
                key={i}
                className="grid grid-cols-[120px_1fr] gap-x-3 sm:gap-x-12 items-start"
              >
                <div className="justify-self-end font-medium">
                  <span>{fishingSeason.duration}</span>
                  <span className="pl-1">月</span>
                </div>
                <div className="font-medium">{fishingSeason.name}</div>
              </div>
            ))}
          </Card>
        </section>

        <section className="grid grid-flow-col justify-center gap-x-4 sm:gap-x-9">
          <ButtonLink
            title="預約海釣體驗"
            path={OFFSHORE_FISHING_RESERVATION_URL}
            isExternalLink={true}
          />
          <ButtonLink
            title="預約專業海釣"
            path={FACEBOOK_URL}
            isExternalLink={true}
          />
        </section>
      </section>
    </main>
  )
}