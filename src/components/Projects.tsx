import type { CollectionEntry } from "astro:content"
import ArrowCard2 from "@components/ArrowCard2"

type Props = {
  tags: string[]
  data: CollectionEntry<"projects">[]
}

export default function projects({ data }: Props) {
  return (
    <div class="flex flex-col items-center justify-center min-h-50vh] w-full">
      <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
        {data.map((project) => (
          <ArrowCard2 entry={project} />
        ))}
      </div>
    </div>
  )
}