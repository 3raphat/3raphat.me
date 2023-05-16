import Link from "next/link"
import React from "react"

interface LinkWrapperProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean
  href: string
}

export default function LinkWrapper({
  children,
  href,
  external,
  ...props
}: LinkWrapperProps) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}
