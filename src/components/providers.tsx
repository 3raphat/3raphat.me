"use client"

import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "next-themes"
import React from "react"

import { TooltipProvider } from "~/components/ui/tooltip"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </ThemeProvider>
      <Analytics />
    </>
  )
}
