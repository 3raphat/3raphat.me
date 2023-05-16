"use client"

import { useTheme } from "next-themes"

import { Switch } from "~/components/ui/switch"
import { useMounted } from "~/hooks/use-mounted"

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = useMounted()

  if (!mounted) {
    return null
  }
  return (
    <Switch
      checked={resolvedTheme === "dark"}
      defaultChecked={resolvedTheme === "dark"}
      onCheckedChange={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6"
    />
  )
}
