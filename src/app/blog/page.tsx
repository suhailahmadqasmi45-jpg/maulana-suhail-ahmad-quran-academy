import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from "lucide-react";
import { QuranVerseBanner } from "@/components/IslamicPattern";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SEO_CONFIG, getCanonicalUrl } from "@/lib/seo-config";

export const metadata = {
  title: "Islamic Learning Blog & Quran Education Articles",
  description:
    "Scholarly educational articles on learning Quran online, Noorani Qaida phonetics, Tajweed articulation, Hifz retention strategies, and course fee structures in India.",
  alternates: {
    canonical: getCanonicalUrl("/blog"),
  },
};

export default function BlogPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Islamic Learning & Quran Blog"
        subtitle="Scholarly articles, recitation tips, and pedagogical insights to illuminate your Quranic study journey."
        arabicTitle="مدونة المعرفة القرآنية والتعليم الإسلامي"
        badge="Authentic Knowledge"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <QuranVerseBanner
          arabic="يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ"
          translation="“Allah will raise those who have believed among you and those who were given knowledge, by degrees.”"
          reference="Surah Al-Mujadila (58:11)"
        />

        {/* Featured Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-3xl bg-ivory-50 border border-emerald-950/10 hover:border-gold-500/50 overflow-hidden shadow-sm hover:shadow-xl transition-all justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-emerald-950">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-900/90 text-ivory-50 text-[11px] font-semibold border border-gold-500/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-dark-800/60 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-emerald-950 text-lg group-hover:text-emerald-800 leading-snug line-clamp-2 mb-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-dark-800/75 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-emerald-950/10 mt-auto">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 group-hover:text-gold-700 underline transition-colors pt-4"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
