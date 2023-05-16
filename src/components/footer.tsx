import Image from "next/image"
import React from "react"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 pb-20 pt-36">
      <Image src="/images/mug.png" alt="mug" width={36} height={36} />
      <span className="text-sm text-neutral-400 dark:text-neutral-500">
        Created by 3raphat
      </span>
    </footer>
  )
}
