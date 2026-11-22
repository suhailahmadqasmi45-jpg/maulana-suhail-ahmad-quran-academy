import { MetadataRoute } from "next";
import { APPROVED_COURSES } from "@/lib/courses";
import { BLOG_POSTS } from "@/lib/blog-data";
import { INDIA_LOCATIONS } from "@/lib/location-data";
import { getBaseSiteUrl } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseSiteUrl();
  const now = new Date();

  // Core Static Routes
  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/pricing",
    "/admission",
    "/free-trial",
    "/teachers",
    "/how-it-works",
    "/testimonials",
    "/faq",
    "/blog",
    "/locations",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/courses") || route === "/admission" || route === "/free-trial"
        ? 0.9
        : 0.8,
  }));

  // 4 Approved Course Routes
  const courseRoutes = APPROVED_COURSES.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  // Educational Blog Guides
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // India-Wide Geographic Distance Learning Hubs
  const locationRoutes = INDIA_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...courseRoutes, ...blogRoutes, ...locationRoutes];
}
