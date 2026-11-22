/**
 * Centralized SEO, AEO & Domain Migration Configuration
 * Maulana Suhail Ahmad Online Quran Academy
 *
 * This module centralizes domain resolution, canonical URL generation,
 * metadata templates, structured data entities, and future 301 migration maps.
 */

export const SEO_CONFIG = {
  academyName: "Maulana Suhail Ahmad Online Quran Academy",
  shortName: "Suhail Online Quran Academy",
  legalName: "Suhail Online Quran Academy",
  founderName: "Maulana Suhail Ahmad",
  siteUrl: "https://www.suhailahmedonlinequranacademy.com",
  primaryHeadline: "Learn Quran from Home, From Anywhere in the World",
  tagline: "Premier India-Wide Online Quran Classes with 1-on-1 Certified Islamic Scholars",
  contactEmail: "info@maulanasuhailquranacademy.com",
  contactPhone: "+91 75055 11251",
  whatsappNumber: "+917505511251",
  cleanWhatsapp: "917505511251",
  
  // Registered Academy Physical Address
  address: {
    village: "Nairana",
    district: "Muzaffarnagar",
    state: "Uttar Pradesh",
    postalCode: "251203",
    country: "India",
    countryCode: "IN",
    formattedAddress: "Village Nairana, District Muzaffarnagar, Uttar Pradesh - 251203, India",
    geo: {
      latitude: 29.4727,
      longitude: 77.7085,
    },
  },

  // Approved Courses & Transparent Pricing (Only these 4 approved courses)
  courses: [
    {
      slug: "noorani-qaida",
      title: "Noorani Qaida",
      monthlyFee: 1399,
      duration: "3 to 5 Months",
      level: "Beginner / Foundation",
    },
    {
      slug: "quran-kareem-nazra",
      title: "Quran Kareem Nazra",
      monthlyFee: 1399,
      duration: "10 to 18 Months",
      level: "Intermediate",
    },
    {
      slug: "hifz-e-quran",
      title: "Hifz-e-Quran",
      monthlyFee: 1899,
      duration: "2 to 4 Years",
      level: "Memorization / All Levels",
    },
    {
      slug: "aalim-course",
      title: "Aalim Course",
      monthlyFee: 1399,
      duration: "Multi-Year Islamic Scholarship",
      level: "Advanced Islamic Studies",
    },
  ],

  // Search Engine Verification Placeholders
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
  },
};

/**
 * Returns the current active base site URL.
 * Prefers NEXT_PUBLIC_SITE_URL or NEXT_PUBLIC_APP_URL, falling back to the current production deployment.
 */
export function getBaseSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    "https://www.suhailahmedonlinequranacademy.com";
  return url.replace(/\/+$/, "");
}

/**
 * Builds a strict canonical absolute URL for any page path.
 */
export function getCanonicalUrl(path: string = ""): string {
  const baseUrl = getBaseSiteUrl();
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `${baseUrl}${cleanPath}`;
}

/**
 * Builds an absolute URL for social sharing and images.
 */
export function getAbsoluteUrl(path: string = ""): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return getCanonicalUrl(path);
}

/**
 * Generates context-aware prefilled WhatsApp inquiry link.
 */
export function getWhatsAppInquiryUrl(context?: {
  courseTitle?: string;
  cityName?: string;
  customMessage?: string;
}): string {
  const cleanNumber = SEO_CONFIG.cleanWhatsapp;
  
  if (context?.customMessage) {
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(context.customMessage)}`;
  }

  let message = `Assalamu Alaikum, I would like to inquire about online Quran classes at ${SEO_CONFIG.shortName}.`;
  
  if (context?.courseTitle && context?.cityName) {
    message = `Assalamu Alaikum, I am inquiring about the ${context.courseTitle} online course for students in ${context.cityName}. Please share batch timings and admission details.`;
  } else if (context?.courseTitle) {
    message = `Assalamu Alaikum, I would like to enroll in the ${context.courseTitle} course (₹1,399/mo). Please share class schedule details.`;
  } else if (context?.cityName) {
    message = `Assalamu Alaikum, I am looking for online Quran classes for my family in ${context.cityName}. Please share available timings and fee structure.`;
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * 301 Permanent Redirect Map for Future Domain Migrations
 * When migrating to a custom domain (e.g., suhailquranacademy.com),
 * all legacy paths map 1:1 without losing link equity.
 */
export const DOMAIN_MIGRATION_REDIRECTS: Record<string, string> = {
  "/courses/noorani-qaida": "/courses/noorani-qaida",
  "/courses/quran-kareem-nazra": "/courses/quran-kareem-nazra",
  "/courses/hifz-e-quran": "/courses/hifz-e-quran",
  "/courses/aalim-course": "/courses/aalim-course",
  "/admission": "/admission",
  "/free-trial": "/free-trial",
  "/pricing": "/pricing",
  "/about": "/about",
  "/contact": "/contact",
  "/teachers": "/teachers",
  "/how-it-works": "/how-it-works",
  "/testimonials": "/testimonials",
  "/faq": "/faq",
  "/blog": "/blog",
  "/locations": "/locations",
};
