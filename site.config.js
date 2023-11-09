const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Singgih",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "developer",
    bio: "Iam student at Gunadarma.",
    email: "singgihrbn08@gmail.com",
    linkedin: "https://www.linkedin.com/in/singgih-rahbanu/",
    github: "https://github.com/cos08",
    instagram: "singgihrbnnn",
  },
  projects: [
    {
      name: `Singgih`,
      href: "https://github.com/cos08",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Kumal",
    description: "welcome to Kumal-Blog!",
  },

  // CONFIG configration (required)
  link: "https://scrawny-plough-b40.notion.site/725383fbe6834c8e9b92fd631f90084d?v=b03c5a883f0d433ab973744730673624&pvs=4",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
