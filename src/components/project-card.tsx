import Image from "next/image"

import { Icons } from "~/components/icons"
import LinkWrapper from "~/components/link-wrapper"
import { cn } from "~/lib/utils"

export interface ProjectCardProps {
  title: string
  description?: string
  href: string
  image?: string
}

export default function ProjectCard({
  title,
  description,
  href,
  image,
}: ProjectCardProps) {
  return (
    <LinkWrapper
      href={href}
      external
      className="card group relative isolate cursor-pointer rounded-lg p-4"
    >
      {image && (
        <div className="relative mb-2 aspect-video h-auto w-full overflow-hidden rounded-md border border-neutral-200 object-contain dark:border-neutral-800">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex items-center justify-between">
        <h3 className="line-clamp-1 text-neutral-400 dark:text-neutral-500">
          {title}
        </h3>
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
            "group-hover:bg-white group-hover:dark:bg-neutral-800",
            "group-hover:shadow"
          )}
        >
          <Icons.arrowUpRight
            className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-neutral-500 dark:text-neutral-500 group-hover:dark:text-neutral-400"
            stroke={1.5}
          />
        </div>
      </div>
      {description && (
        <p className="mt-1 line-clamp-2 text-sm text-neutral-400 dark:text-neutral-500">
          {description}
        </p>
      )}
    </LinkWrapper>
  )
}
