import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import { QuranVerseBanner } from "@/components/IslamicPattern";

export const metadata = {
  title: "Islamic Learning Blog & Tajweed Articles",
  description:
    "Educational articles on Quran learning, Noorani Qaida methods, Tajweed rules, and proven Hifz memorization strategies.",
};

const blogPosts = [
  {
    slug: "how-to-learn-quran-online-beginners-guide",
    title: "How to Learn Quran Online: A Comprehensive Guide for Beginners & Families",
    category: "Quran Learning",
    readTime: "6 min read",
    date: "November 2026",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=800",
    excerpt: "Discover practical methods, technical setups, and spiritual habits to maximize your Quranic education from the comfort of your home.",
  },
  {
    slug: "what-is-noorani-qaida-foundation-of-quran-reading",
    title: "What Is Noorani Qaida? The Essential Foundation of Quranic Recitation",
    category: "Tajweed & Qaida",
    readTime: "5 min read",
    date: "November 2026",
    image: "https://images.unsplash.com/photo-1587617425953-9075d28b8c46?auto=format&fit=crop&q=80&w=800",
    excerpt: "Understand why the classical Noorani Qaida remains the most trusted phonetic method for children and non-Arabic speaking adults worldwide.",
  },
  {
    slug: "effective-quran-memorization-hifz-tips",
    title: "Proven Quran Memorization (Hifz) Strategies: Tips from Experienced Huffaz",
    category: "Hifz Tips",
    readTime: "7 min read",
    date: "November 2026",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=800",
    excerpt: "Explore the traditional tri-fold Hifz system (Sabaq, Sabqi, and Manzil) and discover psychological techniques to maintain rock-solid retention.",
  },
  {
    slug: "importance-of-tajweed-in-quran-recitation",
    title: "The Essential Importance of Tajweed: Reciting the Quran as Revealed",
    category: "Tajweed",
    readTime: "6 min read",
    date: "November 2026",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=800",
    excerpt: "Why accurate Tajweed is an obligation for every Muslim and how correct pronunciation preserves the sacred meanings of Allah’s speech.",
  },
];

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
          arabic="ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ"
          translation="“Nun. By the pen and what they inscribe.”"
          reference="Surah Al-Qalam (68:1)"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col md:flex-row rounded-3xl bg-ivory-50 border border-emerald-950/10 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-60 md:h-auto md:w-2/5 shrink-0 bg-emerald-950 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-900/90 text-ivory-50 text-[10px] font-semibold border border-gold-500/30">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-dark-800/60 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-emerald-950 text-lg group-hover:text-emerald-800 leading-snug line-clamp-2 mb-2 font-serif">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-dark-800/75 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-700 underline"
                  >
                    <span>Read Complete Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
