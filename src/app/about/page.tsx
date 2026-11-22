import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import {
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  Heart,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SubtleGeometricPattern, QuranVerseBanner } from "@/components/IslamicPattern";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Maulana Suhail Ahmad Online Quran Academy, our history, pedagogical principles, scholarly supervision, and mission to deliver authentic Quran education globally.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="About Our Academy"
        subtitle="Dedicated to authentic Quranic recitation, traditional scholarship, and compassionate one-on-one mentorship for Muslim families worldwide."
        arabicTitle="عن أكاديمية مولانا سهيل أحمد لتعليم القرآن الكريم"
        badge="Our Heritage & Academic Mission"
        breadcrumbs={[{ label: "About Us" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Sacred Verse Banner */}
        <QuranVerseBanner
          arabic="خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
          translation="“The best among you are those who learn the Quran and teach it.”"
          reference="Sahih al-Bukhari (5027)"
        />

        {/* Section 1: Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Our Founding Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 leading-tight">
              A Global Sanctuary for Quranic Literacy & Spiritual Growth
            </h2>
            <p className="text-dark-800/80 text-sm sm:text-base leading-relaxed">
              Maulana Suhail Ahmad Online Quran Academy was founded to bridge the growing gap between traditional Islamic madrasa excellence and modern digital convenience. In a fast-paced world, parents often struggle to find qualified, patient, and reliable Quran teachers within their immediate locality.
            </p>
            <p className="text-dark-800/80 text-sm sm:text-base leading-relaxed">
              Under the direct guidance of Maulana Suhail Ahmad, our academy brings centuries of tested classical pedagogical principles—such as the Noorani Qaida phonetics, Tajweed articulation rules, and the rigorous Sabaq-Sabqi-Manzil memorization methodology—directly into homes across India, the GCC, the United Kingdom, North America, and Australia.
            </p>

            <div className="pt-2">
              <Link
                href="/admission"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-ivory-50 text-xs font-bold transition-all shadow-md"
              >
                <span>Enroll with Our Academy</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-950/10">
            <div className="relative h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=1200"
                alt="Student reciting Quran with teacher"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Core Pillars */}
        <div className="py-12 border-y border-emerald-950/10">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              Our Core Educational Pillars
            </h3>
            <p className="text-xs sm:text-sm text-dark-800/80">
              Every class at our academy is governed by four non-negotiable educational values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "1. Authentic Sanad",
                desc: "All instructors hold verified certification and transmission chains tracing back through generations of recognized Islamic scholars.",
              },
              {
                title: "2. Gentle Pedagogy",
                desc: "We prioritize patience and encouragement. Harsh methods have no place in teaching the speech of Allah the Most Merciful.",
              },
              {
                title: "3. Precision & Tajweed",
                desc: "We ensure accurate articulation of Makharij and strict adherence to pronunciation rules from day one of Noorani Qaida.",
              },
              {
                title: "4. Global Accessibility",
                desc: "Flexible 24/7 one-on-one scheduling accommodating school calendars, work commitments, and international time zones.",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center font-serif font-bold text-lg mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-emerald-950 text-base mb-2">{pillar.title}</h4>
                <p className="text-xs text-dark-800/75 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Scholarly Leadership Note */}
        <div className="p-8 sm:p-12 rounded-3xl bg-ivory-100 border border-emerald-950/15 shadow-sm">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block">
              Scholarly Message
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              A Message from Maulana Suhail Ahmad
            </h3>
            <p className="text-sm text-dark-800/80 leading-relaxed italic font-serif">
              “The Holy Quran is the radiant light that illuminates our hearts, homes, and lives. Our academy exists to serve every soul yearning to connect with Allah’s book with sincerity, accuracy, and love. We invite parents and earnest learners to experience the transformative blessing of regular Quran study.”
            </p>
            <div className="pt-2">
              <p className="font-bold text-emerald-950 text-sm">Maulana Suhail Ahmad</p>
              <p className="text-xs text-dark-800/60">Founder & Academic Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
