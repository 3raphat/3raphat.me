import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function absoluteUrl(path?: string) {
  if (!path) return `${process.env.NEXT_PUBLIC_APP_URL}`
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
