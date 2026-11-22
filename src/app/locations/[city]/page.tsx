import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import {
  MapPin,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CourseCard } from "@/components/CourseCard";
import { APPROVED_COURSES } from "@/lib/courses";
import { INDIA_LOCATIONS, getLocationBySlug } from "@/lib/location-data";
import { SEO_CONFIG, getCanonicalUrl, getWhatsAppInquiryUrl, getBaseSiteUrl } from "@/lib/seo-config";
import { QuranVerseBanner } from "@/components/IslamicPattern";

export function generateStaticParams() {
  return INDIA_LOCATIONS.map((loc) => ({
    city: loc.slug,
  }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const loc = getLocationBySlug(params.city);
  if (!loc) return {};

  const canonicalUrl = getCanonicalUrl(`/locations/${loc.slug}`);
  const baseUrl = getBaseSiteUrl();

  return {
    title: loc.title,
    description: loc.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: loc.title,
      description: loc.metaDescription,
      url: canonicalUrl,
      siteName: SEO_CONFIG.academyName,
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/posters/learn-quran-online-dome.jpg`,
          width: 1200,
          height: 630,
          alt: `${SEO_CONFIG.shortName} - ${loc.cityName}`,
        },
      ],
    },
  };
}

export default function CityLocationPage({ params }: { params: { city: string } }) {
  const loc = getLocationBySlug(params.city);
  if (!loc) {
    notFound();
  }

  const baseUrl = getBaseSiteUrl();
  const canonicalUrl = getCanonicalUrl(`/locations/${loc.slug}`);
  const whatsappUrl = getWhatsAppInquiryUrl({ cityName: loc.cityName });

  // JSON-LD Schemas for City Page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations Across India",
        "item": `${baseUrl}/locations`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": loc.cityName,
        "item": canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": loc.frequentlyAskedQuestions.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  return (
    <div className="space-y-16 pb-20">
      {/* City Breadcrumb & Header */}
      <PageHeader
        title={loc.heroHeadline}
        subtitle={`Experience authentic, patient, 1-on-1 Quran education for children, sisters, and adults in ${loc.cityName} directly from home.`}
        arabicTitle="تعليم القرآن الكريم عن بعد"
        badge={`Serving Students Across ${loc.cityName}`}
        breadcrumbs={[
          { label: "Locations Across India", href: "/locations" },
          { label: loc.cityName },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <QuranVerseBanner
          arabic="خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
          translation="“The best among you are those who learn the Quran and teach it.”"
          reference="Sahih al-Bukhari (5027)"
        />

        {/* Localized Overview Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-ivory-100 border border-emerald-950/15 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-gold-600 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-4 h-4" />
            <span>Distance Learning for {loc.cityName}, {loc.state}</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              Why Families in {loc.cityName} Choose Our Online Academy
            </h2>
            <p className="text-sm sm:text-base text-dark-800/80 leading-relaxed font-sans">
              {loc.localContext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-emerald-950/10">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-emerald-900 block">Languages Supported:</span>
              <div className="flex flex-wrap gap-1.5">
                {loc.languagesSupported.map((l) => (
                  <span
                    key={l}
                    className="text-xs px-2.5 py-1 rounded-lg bg-ivory-50 text-dark-800 font-semibold border border-emerald-950/10"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-emerald-900 block">Scheduling Flexibility:</span>
              <p className="text-xs text-dark-800/80 leading-relaxed">{loc.schedulingFlexibility}</p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-emerald-900 block">Trial Class Guarantee:</span>
              <p className="text-xs text-dark-800/80 leading-relaxed">
                100% Free 1-to-2 Days 1-on-1 Trial Class before confirming enrollment.
              </p>
            </div>
          </div>
        </div>

        {/* Approved Courses Available in City */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Approved Curricula
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              Courses Available for {loc.cityName} Students
            </h3>
            <p className="text-xs sm:text-sm text-dark-800/75">
              Transparent monthly tuition with zero registration fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROVED_COURSES.map((course, idx) => (
              <CourseCard key={course.slug} course={course} featured={idx === 2} />
            ))}
          </div>
        </div>

        {/* Localized FAQ Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-ivory-50 border border-emerald-950/15 shadow-sm space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Frequently Asked Questions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              Questions From {loc.cityName} Families
            </h3>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {loc.frequentlyAskedQuestions.map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-ivory-100/70 border border-emerald-950/10 space-y-2"
              >
                <h4 className="font-serif font-bold text-base text-emerald-950">{faq.question}</h4>
                <p className="text-xs sm:text-sm text-dark-800/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* City-Specific Direct WhatsApp CTA Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-ivory-50 shadow-2xl border-2 border-gold-500/40 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Instant Admission & Trial Setup
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Start Quran Learning from {loc.cityName} Today
            </h3>
            <p className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
              Connect directly with our admissions coordinator on WhatsApp to select your preferred schedule and book your free 1-on-1 trial session.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Inquire for {loc.cityName} on WhatsApp</span>
            </a>

            <Link
              href="/free-trial"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-emerald-950 shadow-xl transition-all duration-300 active:scale-95"
            >
              <span>Book Free Trial Class</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
