"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "~/lib/utils"

interface NavLink {
  label: string
  path: string
}

const navLinks: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Projects",
    path: "/projects",
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
      <div className="relative flex rounded-lg border border-neutral-200 bg-white/40 p-1 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-black/40">
        <nav className="flex items-center gap-2">
          {navLinks.map((link: NavLink) => {
            const isActive = pathname === link.path
            return (
              <Link
                href={link.path}
                key={link.path}
                className={cn(
                  "px-2 py-1 text-sm text-neutral-400 transition-colors hover:text-neutral-500 dark:text-neutral-500 dark:hover:text-neutral-400",
                  isActive &&
                    "rounded-md border border-neutral-200 backdrop-blur-md dark:border-neutral-800"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
