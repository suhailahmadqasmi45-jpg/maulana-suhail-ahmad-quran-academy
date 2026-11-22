import React from "react";
import { APPROVED_COURSES } from "@/lib/courses";

export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://maulanasuhailquranacademy.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Suhail Online Quran Academy",
    "alternateName": "Suhail Online Quran Academy",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Premier international online Quran academy offering structured courses in Noorani Qaida, Quran Kareem Nazra, Hifz-e-Quran, and Aalim Course.",
    "telephone": "+91-75055-11251",
    "email": "info@maulanasuhailquranacademy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Village Nairana",
      "addressLocality": "Muzaffarnagar",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "251203",
      "addressCountry": "IN"
    },
    "sameAs": [],
    "areaServed": "Worldwide",
    "educationalCredentialAwarded": "Quran Recitation & Hifz Certification",
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": APPROVED_COURSES.map((c, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": c.title,
        "description": c.description,
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Suhail Online Quran Academy",
          "sameAs": baseUrl,
        },
        "offers": {
          "@type": "Offer",
          "price": c.monthlyFee,
          "priceCurrency": "INR",
          "category": "Monthly Course Fee",
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "3 to 5 classes per week, 1-on-1 personalized sessions",
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
        "name": "What courses are offered at Suhail Online Quran Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The academy exclusively offers four premier courses: Noorani Qaida (₹1,399/month), Quran Kareem Nazra (₹1,399/month), Hifz-e-Quran (₹1,899/month), and Aalim Course (₹1,399/month).",
        },
      },
      {
        "@type": "Question",
        "name": "Can I take a free trial class before enrolling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The academy provides a complimentary 1-on-1 trial class with a certified teacher so students and parents can experience the teaching methodology and comfort level.",
        },
      },
      {
        "@type": "Question",
        "name": "Are female Quran teachers available for sisters and young girls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have qualified and certified female Quran teachers dedicated to instructing sisters and young children with complete privacy and comfort.",
        },
      },
      {
        "@type": "Question",
        "name": "How are online Quran classes conducted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Classes are conducted 1-on-1 through interactive video and audio tools such as Google Meet and Zoom with screen-sharing of digital Mushaf and Noorani Qaida worksheets.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
