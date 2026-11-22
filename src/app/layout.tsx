import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { LanguageProvider } from "@/components/LanguageContext";
import { StructuredData } from "@/components/StructuredData";

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

export const metadata: Metadata = {
  title: {
    default: "Maulana Suhail Ahmad Online Quran Academy | Learn Quran from Home",
    template: "%s | Maulana Suhail Ahmad Online Quran Academy",
  },
  description:
    "Learn Quran from Home, From Anywhere in the World. Structured online Quran courses: Noorani Qaida (₹1,399/mo), Quran Kareem Nazra (₹1,399/mo), Hifz-e-Quran (₹1,899/mo), and Aalim Course (₹1,399/mo). 1-on-1 personalized lessons with certified teachers.",
  keywords: [
    "Online Quran Academy",
    "Learn Quran Online",
    "Maulana Suhail Ahmad Online Quran Academy",
    "Noorani Qaida Online Classes",
    "Quran Kareem Nazra Course",
    "Online Hifz Quran Classes",
    "Aalim Course Online",
    "Quran Classes for Beginners",
    "Quran Learning from Home",
    "Online Quran Classes in India",
    "Online Quran Classes for Kids",
    "Quran Classes for Adults",
    "Tajweed classes online",
  ],
  authors: [{ name: "Maulana Suhail Ahmad Online Quran Academy" }],
  creator: "Maulana Suhail Ahmad Online Quran Academy",
  publisher: "Maulana Suhail Ahmad Online Quran Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://maulanasuhailquranacademy.com"),
  openGraph: {
    title: "Maulana Suhail Ahmad Online Quran Academy",
    description: "Learn Quran from Home, From Anywhere in the World. 1-on-1 structured Quran education.",
    url: "/",
    siteName: "Maulana Suhail Ahmad Online Quran Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maulana Suhail Ahmad Online Quran Academy",
    description: "Learn Quran from Home, From Anywhere in the World.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} overflow-x-hidden max-w-full`}>
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
