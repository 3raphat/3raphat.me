import PageHeader from "~/components/page-header"
import ProjectCard, { ProjectCardProps } from "~/components/project-card"

export const metadata = {
  title: "Projects",
}

interface Repos {
  name: string
  description: string
  html_url: string
}

async function getRepos() {
  try {
    const res = await fetch(
      // sort = created, updated, pushed, full_name
      "https://api.github.com/users/3raphat/repos?sort=created&type=all",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )
    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await res.json()

    return data
  } catch (error) {
    return null
  }
}

const FIXED_PROJECTS: ProjectCardProps[] = [
  {
    title: "Sana",
    description:
      "A Discord music bot with a clean interface, and support for YouTube, SoundCloud, Spotify, etc.",
    href: "https://sanabot.live",
    image: "/images/projects/sana.png",
  },
  {
    title: "Sana Theme",
    description: "A dark theme for Visual Studio Code",
    href: "https://marketplace.visualstudio.com/items?itemName=3raphat.sana-theme",
    image: "/images/projects/sana_theme.png",
  },
  {
    title: "Alchemelody",
    description: "Your Ultimate Source for Curated Spotify Playlists",
    href: "https://alchemelody.vercel.app",
    image: "/images/projects/alchemelody.png",
  },
  {
    title: "Statify",
    description:
      "Get to know your Spotify listening habits and manage your playlists",
    href: "https://statify-liart.vercel.app",
    image: "/images/projects/statify.png",
  },
  {
    title: "Todo list",
    href: "https://todos-web.netlify.app",
    image: "/images/projects/todos.png",
  },
  {
    title: "Loop YouTube",
    href: "https://loop-yt.vercel.app",
    image: "/images/projects/loop_youtube.png",
  },
  {
    title: "QR Code Generator",
    href: "https://qr-generator-3raphat.vercel.app",
    image: "/images/projects/qr.png",
  },
  {
    title: "Quote Generator",
    href: "https://quote-generator-3raphat.vercel.app",
    image: "/images/projects/quote.png",
  },
  {
    title: "Virtual Otamatone",
    href: "https://virtual-otamatone.vercel.app",
    image: "/images/projects/otamatone.png",
  },
]

export default async function Page() {
  const repos = await getRepos()

  return (
    <div className="container">
      <PageHeader
        title="projects"
        description="I'm excited to share my creative work with you! You'll find a variety of projects here. Most of them were built for fun."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {FIXED_PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      {repos && (
        <>
          <p className="my-4 text-sm uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Fetch the repositories from GitHub
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {repos.map((repo: Repos) => (
              <ProjectCard
                key={repo.name}
                title={repo.name}
                description={repo.description}
                href={repo.html_url}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
