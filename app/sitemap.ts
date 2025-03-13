import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eventrendz.com"

  // Main pages
  const routes = ["", "/about", "/services", "/portfolio", "/pricing", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Blog posts (would typically be dynamically generated)
  const blogPosts = ["/blog/1", "/blog/2", "/blog/3", "/blog/4", "/blog/5", "/blog/6"].map((post) => ({
    url: `${baseUrl}${post}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Service subpages
  const serviceSubpages = [
    "/services#corporate-events",
    "/services#weddings",
    "/services#conferences",
    "/services#social-events",
    "/services#product-launches",
    "/services#educational-events",
  ].map((service) => ({
    url: `${baseUrl}${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...routes, ...blogPosts, ...serviceSubpages]
}

