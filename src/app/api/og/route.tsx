import { ImageResponse } from "@vercel/og"

export const runtime = "edge"

const fontRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  try {
    const fontRegularData = await fontRegular

    return new ImageResponse(
      (
        <div
          tw="flex h-full w-full items-center justify-center bg-neutral-50 text-neutral-900"
          style={{
            fontFamily: "Inter",
          }}
        >
          <div tw="flex flex-col items-start">
            <div tw="text-6xl">Hi there 👋, I&apos;m Theeraphat</div>
            <div tw="mt-4 text-xl">Welcome to my personal website</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontRegularData,
            style: "normal",
            weight: 400,
          },
        ],
        emoji: "blobmoji",
      }
    )
  } catch (error) {
    return new Response("Failed to generate image", {
      status: 500,
    })
  }
}
