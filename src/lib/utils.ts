import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function absoluteUrl(path?: string) {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : ""

  if (!path) return origin
  return `${origin}${path}`
}
