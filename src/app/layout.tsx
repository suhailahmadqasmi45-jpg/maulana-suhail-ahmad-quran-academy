import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { LanguageProvider } from "@/components/LanguageContext";
import { StructuredData } from "@/components/StructuredData";
import { SEO_CONFIG, getBaseSiteUrl } from "@/lib/seo-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const baseUrl = getBaseSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Online Quran Classes in India | Maulana Suhail Ahmad Quran Academy",
    template: `%s | ${SEO_CONFIG.academyName}`,
  },
  description:
    "Learn Quran from Home, From Anywhere in the World. Premier online Quran academy in India offering 1-on-1 classes: Noorani Qaida (₹1,399/mo), Quran Kareem Nazra (₹1,399/mo), Hifz-e-Quran (₹1,899/mo), and Aalim Course (₹1,399/mo). Guided by Maulana Suhail Ahmad. Book a Free Trial today.",
  keywords: [
    // Primary Commercial Keywords
    "Online Quran Classes",
    "Best Online Quran Academy",
    "Learn Quran Online",
    "Online Quran Classes in India",
    "Quran Classes Online",
    "Quran Teaching Online",
    "Quran Learning Academy",
    "Online Quran Tutor",
    "Quran Classes for Beginners",
    "Quran Classes for Adults",
    "Quran Classes for Kids",
    "Learn Quran from Home",
    "Quran Classes with Tajweed",
    "Online Islamic Education",
    "Online Quran Coaching",
    
    // Course-Specific Keywords
    "Noorani Qaida Online",
    "Noorani Qaida Classes in India",
    "Quran Nazra Online",
    "Quran Kareem Nazra Classes",
    "Hifz Quran Online",
    "Online Quran Memorization",
    "Aalim Course Online India",
    
    // Brand & Long-tail Keywords
    "Maulana Suhail Ahmad Online Quran Academy",
    "Suhail Online Quran Academy",
    "Quran kaise padhe online",
    "Ghar baithe Quran sikhe",
    "Bachchon ke liye Quran tutor",
  ],
  authors: [{ name: SEO_CONFIG.founderName, url: `${baseUrl}/about` }],
  creator: SEO_CONFIG.academyName,
  publisher: SEO_CONFIG.academyName,
  applicationName: SEO_CONFIG.shortName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "en-IN": `${baseUrl}`,
      "hi-IN": `${baseUrl}`,
      "ur-IN": `${baseUrl}`,
    },
  },
  openGraph: {
    title: "Online Quran Classes in India | Maulana Suhail Ahmad Quran Academy",
    description:
      "Learn Quran from Home, From Anywhere in the World. 1-on-1 private lessons in Noorani Qaida, Nazra, Hifz & Aalim courses with certified teachers. 1-2 Days Free Trial Class.",
    url: baseUrl,
    siteName: SEO_CONFIG.academyName,
    locale: "en_IN",
    alternateLocale: ["hi_IN", "ur_IN"],
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/posters/learn-quran-online-dome.jpg`,
        width: 1200,
        height: 630,
        alt: "Maulana Suhail Ahmad Online Quran Academy - Learn Quran Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes in India | Maulana Suhail Ahmad Quran Academy",
    description:
      "Learn Quran from Home with certified Qaris & scholars. 1-on-1 personalized lessons starting from ₹1,399/month. Free trial available.",
    images: [`${baseUrl}/images/posters/learn-quran-online-dome.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "googlec71b02c8b57a2293",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} overflow-x-hidden max-w-full`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory-50 text-dark-800 antialiased selection:bg-emerald-900 selection:text-gold-300 overflow-x-hidden max-w-full">
        <LanguageProvider>
          <StructuredData />
          <Navbar />
          <main className="flex-1 overflow-x-hidden max-w-full">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </LanguageProvider>
      </body>
    </html>
  );
}
