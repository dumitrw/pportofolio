import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"projects">
}

export default function ArrowCard2({ entry }: Props) {
  const { data: { title, summary }, slug } = entry
  
  return (
    <a 
      href={`/projects/${slug}`}
      class="group flex items-center w-full p-6 rounded-lg 
             bg-black/10 dark:bg-white/5
             hover:bg-black/20 hover:dark:bg-white/10
             transition-all duration-300 ease-in-out"
    >
      <div class="flex-1">
        <h2 class="text-xl font-medium text-black dark:text-white mb-2">
          {title}
        </h2>
        <p class="text-sm text-black/70 dark:text-white/70">
          {summary}
        </p>
      </div>
      <div class="flex items-center ml-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          class="text-black/70 dark:text-white/70
                 group-hover:text-black dark:group-hover:text-white"
          stroke-width="2"
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" 
            class="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
          <polyline points="12 5 19 12 12 19" 
            class="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
        </svg>
      </div>
    </a>
  )
}