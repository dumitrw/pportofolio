import { formatDate } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"projects">
  pill?: boolean
}
export default function ArrowCard2({ entry }: Props) {
  return (
    <a href={`/${entry.collection}/${entry.slug}`} class="group p-4 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out">
      <div class="w-full group-hover:text-black group-hover:dark:text-white">
        <div class="font-semibold text-xl text-center">
          {entry.data.title}
        </div>
      </div>
    </a>
  )
}