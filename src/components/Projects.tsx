import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For } from "solid-js"
import ArrowCard2 from "@components/ArrowCard2"


type Props = {
  tags: string[]
  data: CollectionEntry<"projects">[]
}

export default function projects({ data, tags }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>())
  const [projects, setprojects] = createSignal<CollectionEntry<"projects">[]>([])

  createEffect(() => {
    setprojects(data.filter((entry) => 
      Array.from(filter()).every((value) => 
        entry.data.tags.some((tag:string) => 
          tag.toLowerCase() === String(value).toLowerCase()
        )
      )
    ))
  })

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
      <div class="col-span-12">
        <div class="flex flex-col">
          <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
            {projects().map((project) => (
              <li class="flex-1 max-w-xs">
                <ArrowCard2 entry={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}