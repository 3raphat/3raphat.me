"use client"

import Balancer from "react-wrap-balancer"

import LinkWrapper from "~/components/link-wrapper"
import ProfileCard from "~/components/profile-card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip"

export default function Home() {
  return (
    <div className="container mt-20">
      <div className="flex flex-col items-center gap-12">
        <ProfileCard />
        <Balancer className="font-serif text-2xl font-light text-neutral-400 dark:text-neutral-500 md:text-3xl lg:text-4xl">
          Hi, I&apos;m{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help font-handwriting text-neutral-900 underline decoration-sky-500 decoration-dotted underline-offset-4 dark:text-neutral-100 dark:decoration-sky-400">
                Theeraphat
              </span>
            </TooltipTrigger>
            <TooltipContent className="max-w-md">
              <Balancer className="font-sans font-normal">
                It&apos;s pronounced{" "}
                <span className="text-neutral-900 dark:text-neutral-100">
                  &quot;tee-ra-pat&quot;
                </span>
                . I represent it as{" "}
                <span className="text-neutral-900 dark:text-neutral-100">
                  &quot;3raphat&quot;
                </span>{" "}
                because the sound of{" "}
                <span className="text-neutral-900 dark:text-neutral-100">
                  &quot;thee&quot;
                </span>{" "}
                is similar to the number{" "}
                <span className="text-neutral-900 dark:text-neutral-100">
                  &quot;three&quot;
                </span>
                .
              </Balancer>
            </TooltipContent>
          </Tooltip>
          . I&apos;m a high school student at Suankularb Wittayalai School.
          I&apos;m passionate about{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            building{" "}
            <LinkWrapper
              href="/projects"
              className="underline decoration-orange-500 underline-offset-4 dark:decoration-orange-400"
            >
              things
            </LinkWrapper>
          </span>{" "}
          and{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            learning new skills
          </span>{" "}
          that{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            help solve real-world problems
          </span>
          .
          <br />
          <br />I enjoy{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            listening to K-pop
          </span>
          ,{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            watching series
          </span>
          ,{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            playing games
          </span>
          , and{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            learning new things
          </span>
          .
          <br />
          <br />I also do some{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            graphic art
          </span>
          , even though I&apos;m still{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            learning and improving
          </span>
          . I&apos;m always looking for{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            new challenges and opportunities to grow
          </span>
          .
        </Balancer>
      </div>
    </div>
  )
}
