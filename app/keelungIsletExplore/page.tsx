import { keelungIsletExploreMetadata } from "@/lib/metadata"
import { Introduction } from "@/app/keelungIsletExplore/Introduction"
import { Course } from "@/app/keelungIsletExplore/Course"
import { courses } from "@/data/keelungIslet/course"

export const metadata = keelungIsletExploreMetadata

export default function KeelungIsletExplore() {
  return (
    <main>
      <Introduction />

      {courses.map((course, i) => (
        <Course
          key={i}
          course={course}
          index={i}
        />
      ))}
    </main>
  )
}