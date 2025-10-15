import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "IronWill",
  author: "yash kedia",
  description:
    "Track daily habits and monitor your progress with little effort.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "Habits",
    "Activity",
    "Track",
    "Monitor",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://yashkedia.in",
  },
  links: {
    github: "https://github.com/yashkedia/iotawise",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
