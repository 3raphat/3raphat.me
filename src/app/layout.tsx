import "~/styles/globals.css"

import { Metadata } from "next"
import { Kalam, Kreon, Source_Sans_Pro } from "next/font/google"
import Link from "next/link"

import Footer from "~/components/footer"
import { Icons } from "~/components/icons"
import Navbar from "~/components/navbar"
import Providers from "~/components/providers"
import ThemeToggle from "~/components/theme-toggle"
import { absoluteUrl } from "~/lib/utils"
import { cn } from "~/lib/utils"

const sans = Source_Sans_Pro({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "600", "700", "900"],
  display: "swap",
})

const serif = Kreon({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const handwriting = Kalam({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["300", "400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "3raphat",
    template: "%s · 3raphat",
  },
  description: "3raphat's personal website",
  openGraph: {
    title: "3raphat",
    description: "3raphat's personal website",
    url: absoluteUrl(),
    siteName: "3raphat",
    images: [
      {
        url: absoluteUrl("/api/og"),
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3raphat",
    description: "3raphat's personal website",
    images: [absoluteUrl("/api/og")],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: absoluteUrl("/site.webmanifest"),
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-neutral-50 font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100",
          sans.variable,
          serif.variable,
          handwriting.variable
        )}
      >
        <Providers>
          <Link href="/">
            <Icons.logo className="fixed left-4 top-4 z-50 w-12 rounded bg-white/40 backdrop-blur-md dark:bg-black/40 md:left-6 md:top-6 md:w-14" />
          </Link>
          <Navbar />
          <div className="flex-1">{children}</div>
          <ThemeToggle />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
