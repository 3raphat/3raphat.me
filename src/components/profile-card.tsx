import { useTheme } from "next-themes"

import { Icons } from "~/components/icons"
import LinkWrapper from "~/components/link-wrapper"
import { Separator } from "~/components/ui/separator"
import { useMounted } from "~/hooks/use-mounted"

export default function ProfileCard() {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {resolvedTheme === "dark" ? (
        <Icons.avatarDark className="h-[100px] w-[100px]" />
      ) : (
        <Icons.avatar className="h-[100px] w-[100px]" />
      )}
      <div className="text-center">
        <h1 className="text-xl">Theeraphat J.</h1>
        <p className="text-neutral-400 dark:text-neutral-500">@3raphat</p>
        <p className="text-neutral-400 dark:text-neutral-500">
          Student at Suankularb Wittayalai School
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <LinkWrapper
          href="https://github.com/3raphat"
          external
          className="inline-flex items-center gap-[.375rem] decoration-[#333333] decoration-wavy underline-offset-4 hover:underline dark:decoration-[#f5f5f5]"
        >
          <Icons.github stroke={1.5} className="h-5 w-5" />
          GitHub
        </LinkWrapper>
        <Separator orientation="vertical" />
        <LinkWrapper
          href="https://discord.com/users/556060331252776972"
          external
          className="inline-flex items-center gap-[.375rem] decoration-[#5865F2] decoration-wavy underline-offset-4 hover:underline"
        >
          <Icons.discord stroke={1.5} className="h-5 w-5" />
          Discord
        </LinkWrapper>
        <Separator orientation="vertical" />
        <LinkWrapper
          href="https://twitter.com/3raphattt"
          external
          className="inline-flex items-center gap-[.375rem] decoration-[#1DA1F2] decoration-wavy underline-offset-4 hover:underline"
        >
          <Icons.twitter stroke={1.5} className="h-5 w-5" />
          Twitter
        </LinkWrapper>
      </div>
    </div>
  )
}
