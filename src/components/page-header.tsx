import Balancer from "react-wrap-balancer"

import { capitalize } from "~/lib/utils"

interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="gap-2 space-y-4 px-4 pb-8 pt-16 md:pt-20">
      <h1 className="font-handwriting text-6xl font-light md:text-8xl">
        {capitalize(title)}.
      </h1>
      <Balancer className="max-w-[560px] text-neutral-400 dark:text-neutral-500">
        {description}
      </Balancer>
    </div>
  )
}
