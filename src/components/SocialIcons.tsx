import { SOCIALS } from "@consts"

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      {SOCIALS.map(({ NAME, ICON, HREF }) => (
        <a
          key={NAME}
          href={HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-300"
        >
          <svg className="size-6">
            <use href={`/social.svg#${ICON}`} />
          </svg>
          <span className="sr-only">{NAME}</span>
        </a>
      ))}
    </div>
  )
}