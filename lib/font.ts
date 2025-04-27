import localFont from "next/font/local"

const zenMaruGothic = localFont({
  src: [
    {
      path: "../public/font/ZenMaruGothic-Regular.ttf",
      weight: "400"
    },
    {
      path: "../public/font/ZenMaruGothic-Medium.ttf",
      weight: "500"
    },
    {
      path: "../public/font/ZenMaruGothic-Bold.ttf",
      weight: "700"
    },
  ],
  variable: "--font-zen-maru-gothic",
  fallback: [
    "ui-sans-serif",
    "system-ui"
  ]
})

export {
  zenMaruGothic
}