import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/", "/api"],
    },
    sitemap: "https://eventrendz.com/sitemap.xml",
    host: "https://eventrendz.com",
  }
}

