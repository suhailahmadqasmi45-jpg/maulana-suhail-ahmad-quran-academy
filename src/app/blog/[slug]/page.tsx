import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  BookOpen,
  ArrowRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { QuranVerseBanner } from "@/components/IslamicPattern";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog-data";
import { APPROVED_COURSES } from "@/lib/courses";
import {
  SEO_CONFIG,
  getCanonicalUrl,
  getBaseSiteUrl,
  getWhatsAppInquiryUrl,
} from "@/lib/seo-config";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Article Not Found" };
  }

  const canonicalUrl = getCanonicalUrl(`/blog/${post.slug}`);
  const baseUrl = getBaseSiteUrl();

  return {
    title: `${post.title} | ${SEO_CONFIG.shortName}`,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: SEO_CONFIG.academyName,
      type: "article",
      publishedTime: "2026-11-20T00:00:00.000Z",
      authors: [post.author],
      images: [
        {
          url: post.image.startsWith("http")
            ? post.image
            : `${baseUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [
        post.image.startsWith("http")
          ? post.image
          : `${baseUrl}${post.image}`,
      ],
    },
  };
}

export default function BlogPostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const baseUrl = getBaseSiteUrl();
  const canonicalUrl = getCanonicalUrl(`/blog/${post.slug}`);

  const relatedCourse = post.relatedCourseSlug
    ? APPROVED_COURSES.find((c) => c.slug === post.relatedCourseSlug)
    : APPROVED_COURSES[0];

  const whatsappInquiryUrl = getWhatsAppInquiryUrl({
    courseTitle: relatedCourse?.title,
    customMessage: `Assalamu Alaikum, I read your article "${post.title}" on Suhail Online Quran Academy and would like to inquire about enrolling in Quran classes.`,
  });

  // Schema.org Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.image.startsWith("http")
      ? post.image
      : `${baseUrl}${post.image}`,
    "datePublished": "2026-11-20T00:00:00.000Z",
    "dateModified": "2026-11-22T00:00:00.000Z",
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Academic Director & Islamic Scholar",
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": SEO_CONFIG.academyName,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/posters/learn-quran-online-dome.jpg`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  // Schema.org BreadcrumbList Schema
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
        "name": "Blog",
        "item": `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": canonicalUrl,
      },
    ],
  };

  // Schema.org FAQPage Schema if article has FAQs
  const faqSchema = post.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faq.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer,
          },
        })),
      }
    : null;

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title={post.title}
        subtitle={`Written and verified by ${post.author} • ${post.category}`}
        arabicTitle="مدونة المعرفة القرآنية"
        badge={post.category}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Return Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-900 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Articles</span>
          </Link>
        </div>

        {/* Featured Visual Banner */}
        <div className="relative h-72 sm:h-96 md:h-[450px] w-full rounded-3xl overflow-hidden border border-emerald-950/15 shadow-2xl bg-emerald-950">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-ivory-50 text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 bg-emerald-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/30 font-semibold">
                <User className="w-3.5 h-3.5 text-gold-400" />
                <span>{post.author}</span>
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/30">
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                <span>{post.date}</span>
              </span>
            </div>
            <span className="flex items-center gap-1.5 bg-emerald-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/30">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose prose-emerald max-w-none space-y-6 text-dark-800 leading-relaxed font-sans text-sm sm:text-base">
          {post.content.map((paragraph, index) => {
            const isHeading =
              paragraph.startsWith("1.") ||
              paragraph.startsWith("2.") ||
              paragraph.startsWith("3.") ||
              paragraph.startsWith("The Systematic Progression") ||
              paragraph.startsWith("Why Beginners Should Never Skip") ||
              paragraph.startsWith("The Classical Tri-Fold Method") ||
              paragraph.startsWith("Practical Advice for Hifz") ||
              paragraph.startsWith("Minor Errors vs") ||
              paragraph.startsWith("Factors That Influence") ||
              paragraph.startsWith("Transparent Pricing") ||
              paragraph.startsWith("7 Critical Factors");

            return (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-ivory-50 border border-emerald-950/10 shadow-sm space-y-3"
              >
                {isHeading ? (
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-emerald-950 mb-2">
                    {paragraph.split("\n")[0]}
                  </h3>
                ) : null}
                <div className="text-dark-800/85 leading-relaxed whitespace-pre-line text-xs sm:text-sm">
                  {isHeading
                    ? paragraph.substring(paragraph.indexOf("\n") + 1)
                    : paragraph}
                </div>
              </div>
            );
          })}
        </article>

        {/* Dedicated Article FAQs if available */}
        {post.faq && post.faq.length > 0 && (
          <div className="p-8 rounded-3xl bg-ivory-100 border border-emerald-950/15 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-gold-600" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-emerald-950">
              Common Questions About This Topic
            </h3>
            <div className="space-y-4">
              {post.faq.map((f, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-ivory-50 border border-emerald-950/10 space-y-1.5"
                >
                  <h4 className="font-serif font-bold text-sm text-emerald-950">
                    {f.question}
                  </h4>
                  <p className="text-xs text-dark-800/80 leading-relaxed">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Course & WhatsApp Conversion CTA */}
        {relatedCourse && (
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-ivory-50 shadow-2xl border-2 border-gold-500/40 space-y-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                  Recommended Course For This Subject
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {relatedCourse.title} (₹{relatedCourse.monthlyFee}/month)
                </h3>
                <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed font-sans">
                  {relatedCourse.description} Learn 1-on-1 with certified instructors. Attend a 100% free trial class.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <Link
                  href={`/courses/${relatedCourse.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gold-500 hover:bg-gold-400 text-emerald-950 shadow transition-all active:scale-95"
                >
                  <span>Course Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </div>
  );
}
