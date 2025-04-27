import Image from "next/image"

import {
  introductions,
  notes
} from "@/data/keelungIslet/introduction"
import illustKeelungIslet from "@/public/illustration/keelung-islet.webp"

function Introduction() {
  return (
    <section className="min-h-screen bg-cream">
      <section className="max-w-[var(--max-container-width)] mx-auto px-5 pt-10 sm:pt-16 pb-36">
        <h2 className="sr-only">探索基隆嶼</h2>

        <figure className="py-10 sm:py-6">
          <Image
            src={illustKeelungIslet}
            alt="基隆嶼"
            priority
            className="sm:w-4/5 mx-auto"
          />
        </figure>

        <div className="space-y-6">
          {introductions.map((introduction, i) => (
            <div key={i}>
              <h3 className="font-medium pb-2">{introduction.title}</h3>
              <p>{introduction.description}</p>
            </div>
          ))}
        </div>

        <div className="pt-10">
          <h3 className="font-medium pb-3">登島注意事項</h3>
          <ul className="space-y-3 sm:space-y-2">
            {notes.map(({ note }, i) => (
              <li
                key={i}
                className="text-sm relative pl-5 before:absolute before:content-[''] before:size-2 before:rounded-full before:top-2 before:left-0 before:bg-primary"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  )
}

export {
  Introduction
}