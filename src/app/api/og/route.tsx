import { ImageResponse } from "@vercel/og"

export const runtime = "edge"

const fontRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const fontBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  try {
    const fontRegularData = await fontRegular
    const fontBoldData = await fontBold

    const url = new URL(req.url)
    const values = Object.fromEntries(url.searchParams)

    const theme = values.theme || "light"
    const bgColor =
      theme === "light"
        ? "linear-gradient(90deg, #f5f5f5 0%, #fafafa 100%)"
        : "linear-gradient(90deg, #0a0a0a 0%, #171717 100%)"
    const textColor = theme === "light" ? "#171717" : "#f5f5f5"

    return new ImageResponse(
      (
        <div
          tw="flex h-full w-full items-center justify-center"
          style={{
            background: bgColor,
            color: textColor,
            fontFamily: "Inter",
          }}
        >
          <div tw="flex flex-col items-start">
            <div tw="text-6xl font-bold">Hi there 👋, I&apos;m Theeraphat</div>
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
          {
            name: "Inter",
            data: fontBoldData,
            style: "normal",
            weight: 700,
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
