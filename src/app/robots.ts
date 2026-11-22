import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://maulanasuhailquranacademy.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/dashboard", "/api/admin"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
