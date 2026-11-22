import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { ArrowLeft, Clock, Calendar, User, Share2, BookOpen, ArrowRight } from "lucide-react";
import { QuranVerseBanner } from "@/components/IslamicPattern";

const blogDatabase: Record<
  string,
  {
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    content: string[];
  }
> = {
  "how-to-learn-quran-online-beginners-guide": {
    title: "How to Learn Quran Online: A Comprehensive Guide for Beginners & Families",
    category: "Quran Learning",
    author: "Academy Academic Council",
    date: "November 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200",
    content: [
      "In today’s interconnected digital era, geographic distance is no longer an obstacle to receiving traditional, authentic Islamic education. Students across the globe can now connect directly with qualified, patient, and certified Quran tutors from the sanctity of their homes.",
      "1. Why Online Quran Learning is Thriving:\n• Individualized One-on-One Attention: Unlike crowded physical classrooms, online sessions ensure that 100% of the tutor’s focus is on listening, detecting slight phonetic variations, and providing immediate oral feedback.\n• Flexible Scheduling for Global Lifestyles: Whether you reside in India, the Gulf countries, the UK, Europe, or the Americas, class schedules can be coordinated to suit your school, office, or family timings.\n• Safe & Familiar Environment: Especially for young children and female learners, learning from home provides maximum comfort, safety, and family involvement.",
      "2. Setting Up an Effective Learning Space:\n• Dedicated Peaceful Area: Choose a quiet room free from distractions, television, and heavy background noise.\n• Stable Internet & Clear Audio: A modest internet connection coupled with a clear headset or earphones allows the teacher and student to hear delicate Arabic letters like ح, خ, ص, and ض distinctly.\n• Respectful Posture with the Mushaf: Place the Holy Quran or Qaida on an elevated wooden stand (Rihal) or desk, maintaining physical and spiritual adab.",
      "3. The Golden Rule of Consistency:\nThe Prophet Muhammad (peace be upon him) said: 'The deeds most loved by Allah are those done regularly, even if they are small.' (Sahih al-Bukhari). Spending 30 minutes daily with a dedicated teacher produces far greater retention and spiritual sweetness than irregular multi-hour sessions.",
    ],
  },
  "what-is-noorani-qaida-foundation-of-quran-reading": {
    title: "What Is Noorani Qaida? The Essential Foundation of Quranic Recitation",
    category: "Tajweed & Qaida",
    author: "Maulana Suhail Ahmad",
    date: "November 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1587617425953-9075d28b8c46?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Compiled by the venerable scholar Sheikh Noor Muhammad Haqqani, the Noorani Qaida has served as the universal primer for Quranic literacy for generations across the Muslim world.",
      "The Systematic Progression of Noorani Qaida:\n1. Mufradat (Single Letters): Mastering the 29 consonants individually, emphasizing their specific point of articulation (Makhraj).\n2. Murakkabat (Compound Forms): Learning how Arabic letters transform their visual shapes when appearing at the beginning, middle, or end of a word.\n3. Harakat (Short Vowels): Pronouncing Zabar, Zair, and Pesh swiftly without dragging or tilting the vowel.\n4. Tanween & Sukoon: Understanding nasalization (Ghunnah) and resting consonants with their associated phonetic bounces (Qalqalah).\n5. Rules of Madd & Tashdeed: Transitioning from simple syllables to complex multi-letter words identical to those found in the Holy Quran.",
      "Why Beginners Should Never Skip Noorani Qaida:\nAttempting to read the Holy Quran without mastering phonetic foundations frequently leads to ingrained pronunciation errors that become exceedingly difficult to unlearn later. A thorough study of Noorani Qaida guarantees that when a student opens the Mushaf, their tongue glides smoothly across the sacred text with confidence and correct Tajweed.",
    ],
  },
  "effective-quran-memorization-hifz-tips": {
    title: "Proven Quran Memorization (Hifz) Strategies: Tips from Experienced Huffaz",
    category: "Hifz Tips",
    author: "Academy Hifz Department",
    date: "November 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Committing the 6,236 verses of the Holy Quran to heart is an incomparable spiritual honor. However, true memorization is not merely committing words to short-term memory—it is anchoring the sacred text deep into long-term subconscious recall.",
      "The Golden Rule: Sabaq, Sabqi, and Manzil:\nThe classical Islamic seminary system relies upon a three-tiered daily cycle:\n• Sabaq (New Lesson): The new portion (usually half a page to one page) memorized that day after multiple readings with correct Tajweed.\n• Sabqi (Recent Memorization): The preceding 5 to 10 pages memorized in recent days. This strengthens newly formed neural pathways.\n• Manzil / Amokhta (Long-Term Retention): Daily systematic revision of entire previously completed Juz. A Hafiz should cycle through their entire memorization at least once every 10 to 15 days.",
      "Practical Advice for Hifz Students:\n1. Use One Mushaf Edition Exclusively: Visual memory plays a pivotal role in Hifz. Always use the same 15-line or 16-line print so page boundaries, line placements, and aya positions remain imprinted in your visual memory.\n2. Recite Aloud to a Teacher: Never assess your own memorization in silence. Self-recitation hides blind spots. Having a vigilant teacher interrupt each hesitation is the secret to enduring retention.\n3. Pray with What You Memorize: Reciting newly memorized portions during Tahajjud and Sunnah prayers cements verses permanently into your heart.",
    ],
  },
  "importance-of-tajweed-in-quran-recitation": {
    title: "The Essential Importance of Tajweed: Reciting the Quran as Revealed",
    category: "Tajweed",
    author: "Maulana Suhail Ahmad",
    date: "November 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Linguistically, Tajweed means 'betterment' or 'beautification'. In Islamic terminology, it signifies giving every Arabic letter its rightful sound, characteristic, and origin without exaggeration or deficiency.",
      "Allah the Almighty instructs in Surah Al-Muzzammil:\n'And recite the Quran with measured, distinct recitation.' (Quran 73:4)",
      "Minor Errors vs. Meaning-Altering Errors:\nIn the Arabic language, slight mispronunciations can radically alter the theological meaning of a verse:\n• Confusing ق (Qaf) with ك (Kaf): Changing Qalb (Heart) into Kalb (Canine).\n• Confusing ح (Haa) with هـ (Haa): Changing Al-Hamd (All Praise) into a distorted sound.\n• Neglecting Madd (Prolongation): Omitting elongation can turn affirmative statements into negations.",
      "Learning Tajweed under a competent, patient teacher is not an optional luxury; it is the protective shield that preserves the integrity of Divine revelation.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(blogDatabase).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogDatabase[params.slug];
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | Suhail Online Quran Academy`,
    description: post.content[0],
  };
}

export default function BlogPostDetailPage({ params }: { params: { slug: string } }) {
  const post = blogDatabase[params.slug];
  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title={post.title}
        subtitle={`Category: ${post.category} • ${post.readTime}`}
        badge={post.category}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title.slice(0, 30) + "..." },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border border-emerald-950/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* Author / Metadata bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-ivory-100 border border-emerald-950/10 text-xs text-dark-800/80">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-emerald-800" />
            <span className="font-semibold text-emerald-950">{post.author}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold-600" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold-600" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="prose prose-emerald max-w-none space-y-6 text-sm sm:text-base text-dark-800/85 leading-relaxed">
          {post.content.map((p, idx) => (
            <div key={idx} className="whitespace-pre-line bg-ivory-50 p-6 rounded-2xl border border-emerald-950/5 shadow-sm">
              {p}
            </div>
          ))}
        </div>

        {/* Article End Action CTA */}
        <div className="p-8 rounded-3xl bg-emerald-950 text-ivory-50 border border-gold-500/30 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white">
            Ready to Begin Learning with Certified Scholars?
          </h3>
          <p className="text-xs sm:text-sm text-ivory-200/80 max-w-md mx-auto">
            Book a complimentary 1-on-1 trial class at Suhail Online Quran Academy today.
          </p>
          <div className="pt-2">
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 text-emerald-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition-colors shadow"
            >
              <span>Book Your Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
