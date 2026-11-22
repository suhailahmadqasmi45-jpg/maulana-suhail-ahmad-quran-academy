import React from "react";
import { SEO_CONFIG, getBaseSiteUrl } from "@/lib/seo-config";
import { APPROVED_COURSES } from "@/lib/courses";

export function StructuredData() {
  const baseUrl = getBaseSiteUrl();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${baseUrl}/#organization`,
    "name": SEO_CONFIG.academyName,
    "alternateName": [
      SEO_CONFIG.shortName,
      "Suhail Quran Academy",
      "Maulana Suhail Quran Academy",
      "أكاديمية سهيل لتعليم القرآن",
    ],
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/images/posters/learn-quran-online-dome.jpg`,
      "width": 1080,
      "height": 1080,
    },
    "image": `${baseUrl}/images/suhail/maulana-suhail-portrait.jpg`,
    "description":
      "Premier India-wide and international online Quran academy delivering authentic one-on-one Quranic recitation, Noorani Qaida phonetics, Nazra, Hifz-e-Quran, and Aalim studies from the comfort of home.",
    "telephone": SEO_CONFIG.contactPhone,
    "email": SEO_CONFIG.contactEmail,
    "priceRange": "₹1,399 - ₹1,899 per month",
    "founder": {
      "@type": "Person",
      "name": SEO_CONFIG.founderName,
      "jobTitle": "Founder & Academic Director",
      "image": `${baseUrl}/images/suhail/maulana-suhail-portrait.jpg`,
      "alumniOf": "Traditional Islamic Seminary (Dars-e-Nizami)",
      "knowsAbout": [
        "Quranic Sciences",
        "Tajweed Rules & Makharij",
        "Hifz-e-Quran Memorization",
        "Islamic Jurisprudence (Fiqh)",
        "Hadith Studies",
      ],
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `Village ${SEO_CONFIG.address.village}`,
      "addressLocality": SEO_CONFIG.address.district,
      "addressRegion": SEO_CONFIG.address.state,
      "postalCode": SEO_CONFIG.address.postalCode,
      "addressCountry": SEO_CONFIG.address.countryCode,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SEO_CONFIG.address.geo.latitude,
      "longitude": SEO_CONFIG.address.geo.longitude,
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": SEO_CONFIG.contactPhone,
        "contactType": "Admissions & Student Coordinator",
        "contactOption": "WhatsAppDirect",
        "areaServed": ["IN", "AE", "SA", "GB", "US", "CA", "AU"],
        "availableLanguage": ["English", "Hindi", "Urdu", "Arabic"],
      },
    ],
    "sameAs": [],
    "areaServed": {
      "@type": "Country",
      "name": "India",
    },
    "educationalCredentialAwarded": "Quran Recitation & Hifz Completion Sanad / Certificate",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Approved Quran Learning Programs",
      "itemListElement": APPROVED_COURSES.map((c, i) => ({
        "@type": "OfferCatalog",
        "name": c.title,
        "position": i + 1,
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": SEO_CONFIG.academyName,
    "alternateName": SEO_CONFIG.shortName,
    "description": SEO_CONFIG.tagline,
    "publisher": {
      "@id": `${baseUrl}/#organization`,
    },
    "inLanguage": ["en-IN", "hi-IN", "ur-IN"],
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": APPROVED_COURSES.map((c, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": `${c.title} Online Course`,
        "description": c.description,
        "provider": {
          "@type": "EducationalOrganization",
          "name": SEO_CONFIG.academyName,
          "sameAs": baseUrl,
        },
        "offers": {
          "@type": "Offer",
          "price": c.monthlyFee,
          "priceCurrency": "INR",
          "category": "Monthly Tuition Fee",
          "availability": "https://schema.org/InStock",
          "url": `${baseUrl}/courses/${c.slug}`,
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "3 to 5 classes per week, private 1-on-1 personalized sessions",
          "instructor": {
            "@type": "Person",
            "name": "Certified Male & Female Quran Tutors",
          },
        },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What courses are offered at Maulana Suhail Ahmad Online Quran Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The academy exclusively offers four premier courses: Noorani Qaida (₹1,399/month), Quran Kareem Nazra (₹1,399/month), Hifz-e-Quran (₹1,899/month), and Aalim Course (₹1,399/month). All courses include private 1-on-1 personalized sessions.",
        },
      },
      {
        "@type": "Question",
        "name": "How much do online Quran classes cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Maulana Suhail Ahmad Online Quran Academy, monthly fees are fully transparent and affordable: Noorani Qaida is ₹1,399/month, Quran Kareem Nazra is ₹1,399/month, Hifz-e-Quran is ₹1,899/month, and the Aalim Course is ₹1,399/month. There are no hidden admission fees.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I attend a free trial class before paying any fee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The academy provides a complimentary 1 to 2 days 1-on-1 trial class with a verified instructor. Parents and students can evaluate the teacher's patience, methodology, and timing with zero payment or obligation.",
        },
      },
      {
        "@type": "Question",
        "name": "Are certified female Quran teachers available for sisters and young daughters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. We have verified, qualified, and certified female Quran teachers (Qariyas & Alimas) dedicated to instructing female learners and young children in an environment of complete privacy, comfort, and Islamic adab.",
        },
      },
      {
        "@type": "Question",
        "name": "How do online Quran classes work across India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Classes are conducted 1-on-1 live over Google Meet or Zoom. Students need only a smartphone, tablet, or laptop with internet access. Teachers share interactive digital Noorani Qaida and Mushaf on-screen, correcting pronunciation (Makharij) in real time.",
        },
      },
      {
        "@type": "Question",
        "name": "How can I contact Maulana Suhail Ahmad Online Quran Academy for admission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can connect directly with our academic desk on WhatsApp at +91 75055 11251 or call +91 75055 11251. Our coordinators assist you with tutor allocation, preferred timings, and trial class setup within minutes.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
