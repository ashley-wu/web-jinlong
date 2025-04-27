import { Card } from "@/components/ui/card"
import { Badge } from "@/components/Badge"
import { ButtonLink } from "@/components/ButtonLink"

import { keelungIsletExploreMetadata } from "@/lib/metadata"
import { 
  packages,
  type Package
} from "@/data/keelungIslet/package"
import { KEELUNG_ISLET_RESERVATION_URL } from "@/data/info"

export const metadata = keelungIsletExploreMetadata

export default function KeelungIsletTour() {
  return (
    <main className="bg-cream">
      <section className="max-w-[var(--max-container-width)] mx-auto px-5 pt-20 pb-36">
        <h2 className="text-3xl sm:text-4xl font-medium text-center">基隆嶼登島行程</h2>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center py-16">
          {packages.map((tourPackage, i) => (
            <TourPackage
              key={i}
              tourPackage={tourPackage}
            />
          ))}
        </section>

        <section className="grid justify-center">
          <ButtonLink
            title="預約基隆嶼登島行程"
            path={KEELUNG_ISLET_RESERVATION_URL}
            isExternalLink={true}
          />
        </section>
      </section>
    </main>
  )
}

function TourPackage({ tourPackage }: { tourPackage: Package }) {
  const { name, hours, coverages, plans } = tourPackage

  return (
    <Card className="w-full max-w-[480px] px-6 sm:px-8 md:px-10 py-10">
      <div className="flex justify-between items-baseline">
        <div className="text-xl font-medium">{name}</div>
        <div className="text-gray-600">{`${hours} 小時`}</div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 pt-12 pb-10">
        {coverages.map((coverage, i) => (
          <Badge
            key={i}
            title={coverage}
            className="bg-gray-100 border-0 px-3 py-0.75 rounded-full"
          />
        ))}
      </div>

      <div>
        <div
          className={
            "grid content-center grid-cols-[1fr_auto_1fr] font-medium " +
            "before:content-[''] before:p-[1px] before:m-3 before:bg-primary/60 before:ml-0 " +
            "after:content-[''] after:p-[1px] after:m-3 after:bg-primary/60 after:mr-0"
          }
        >
          行程費用
        </div>

        <div className="grid justify-center gap-y-4 pt-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_120px] gap-x-2 text-gray-600"
            >
              <div>{plan.name}</div>
              <div className="justify-self-end">{`${plan.fare} /人`}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}