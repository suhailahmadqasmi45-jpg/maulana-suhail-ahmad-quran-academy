import { MetadataRoute } from "next";
import { APPROVED_COURSES } from "@/lib/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://maulanasuhailquranacademy.com";
  const now = new Date();

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
    "/contact",
    "/login",
    "/register",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/courses") || route === "/admission" ? 0.9 : 0.7,
  }));

  const courseRoutes = APPROVED_COURSES.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = [
    "how-to-learn-quran-online-beginners-guide",
    "what-is-noorani-qaida-foundation-of-quran-reading",
    "effective-quran-memorization-hifz-tips",
    "importance-of-tajweed-in-quran-recitation",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...blogRoutes];
}
