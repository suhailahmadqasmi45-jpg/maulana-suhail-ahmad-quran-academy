import { MetadataRoute } from "next";
import { getBaseSiteUrl } from "@/lib/seo-config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/dashboard",
          "/dashboard/*",
          "/api/admin",
          "/api/admin/*",
          "/api/auth",
          "/api/auth/*",
        ],
      },
      // Explicitly welcome AI Search Crawlers for AEO & GEO discoverability
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Applebot",
        ],
        allow: "/",
        disallow: ["/admin", "/dashboard", "/api/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
