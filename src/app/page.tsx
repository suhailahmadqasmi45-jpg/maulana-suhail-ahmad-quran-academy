import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
  Star,
  Award,
  Clock,
  ArrowRight,
  Headphones,
  Laptop,
  GraduationCap,
  Sparkles,
  PhoneCall,
  Check,
  HeartHandshake,
} from "lucide-react";
import { APPROVED_COURSES } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  IslamicStarPattern,
  QuranVerseBanner,
  SubtleGeometricPattern,
} from "@/components/IslamicPattern";
import { formatCurrency } from "@/lib/utils";

export default function HomePage() {
  const courses = APPROVED_COURSES;

  return (
    <div className="relative overflow-hidden">
      {/* ========================================================
          1. HERO SECTION (Desktop 2-Column, Mobile Vertical)
      ======================================================== */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-ivory-50 pt-28 sm:pt-36 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gold-500/20">
        <SubtleGeometricPattern />

        {/* Ambient atmospheric lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Description, CTAs, Trust points */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-gold-500/30 text-xs md:text-sm text-gold-300 font-medium shadow-inner backdrop-blur-md">
                <IslamicStarPattern className="w-4 h-4 text-gold-400" />
                <span>Premier International Online Quran Education</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h2 className="text-sm md:text-base font-semibold tracking-wider text-gold-400 uppercase">
                  Suhail Online Quran Academy
                </h2>
                <h1 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-50 leading-[1.2] sm:leading-[1.15]">
                  Learn Quran from Home, <br className="hidden sm:inline" />
                  <span className="text-gold-300 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-gold-300 sm:via-gold-400 sm:to-gold-200">
                    From Anywhere in the World
                  </span>
                </h1>
              </div>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-ivory-200/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Begin your journey of Quran learning with structured online courses designed for children, beginners, and adults. Learn Quran reading, memorization, and Islamic knowledge from the comfort of your home.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 hover:from-gold-400 hover:to-gold-200 text-emerald-950 shadow-xl hover:shadow-gold-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Our Courses</span>
                </Link>

                <Link
                  href="/admission"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-emerald-900/90 hover:bg-emerald-800 text-ivory-50 border border-gold-500/40 shadow-lg hover:border-gold-400 transition-all duration-300"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>

                <a
                  href="https://wa.me/917505511251?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20inquire%20about%20Quran%20classes%20at%20Suhail%20Online%20Quran%20Academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp Chat</span>
                </a>

                <Link
                  href="/free-trial"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl text-sm font-semibold text-gold-300 hover:text-white underline hover:no-underline transition-colors"
                >
                  <span>Book Free Trial Class</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-emerald-900/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-left">
                <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-emerald-900/30 sm:bg-transparent border border-gold-500/10 sm:border-0">
                  <div className="w-9 h-9 rounded-xl bg-emerald-900/70 border border-gold-500/20 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ivory-50">1-on-1 Sessions</h4>
                    <p className="text-[11px] text-ivory-200/70">Personalized Pace</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-emerald-900/30 sm:bg-transparent border border-gold-500/10 sm:border-0">
                  <div className="w-9 h-9 rounded-xl bg-emerald-900/70 border border-gold-500/20 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ivory-50">Certified Qaris</h4>
                    <p className="text-[11px] text-ivory-200/70">Male & Female Tutors</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-emerald-900/30 sm:bg-transparent border border-gold-500/10 sm:border-0">
                  <div className="w-9 h-9 rounded-xl bg-emerald-900/70 border border-gold-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ivory-50">Flexible Hours</h4>
                    <p className="text-[11px] text-ivory-200/70">Worldwide Timezones</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Quran Learning Image with Islamic Geometric Border */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* Decorative Rotating Geometric Ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-gold-500/30 via-emerald-800/40 to-gold-400/20 blur-xl opacity-75" />

                <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 bg-emerald-950 shadow-2xl p-2.5">
                  <div className="relative h-80 sm:h-96 md:h-[430px] w-full rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200"
                      alt="Open Holy Quran on a traditional wooden stand"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />

                    {/* Floating Callout: Live Class Preview */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-emerald-950/90 backdrop-blur-md border border-gold-500/30 text-ivory-50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center border border-gold-400/40">
                          <Headphones className="w-5 h-5 text-gold-400" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-ivory-50">1-on-1 Live Class</p>
                          <p className="text-[11px] text-gold-300">With Certified Qari</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-full bg-emerald-700/60 text-ivory-100 border border-emerald-500/40">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                        Live Now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. INTRODUCTION TO THE ACADEMY & SACRED VERSE
      ======================================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <QuranVerseBanner
          arabic="وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"
          translation="“And recite the Quran with measured, distinct recitation.”"
          reference="Surah Al-Muzzammil (73:4)"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              About Our Online Academy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 leading-tight">
              Preserving Authentic Quranic Recitation Through Modern Digital Excellence
            </h2>
            <p className="text-dark-800/80 text-sm sm:text-base leading-relaxed">
              Founded under the scholarly guidance of Maulana Suhail Ahmad, our academy was established with a singular, noble objective: to remove all geographical, linguistic, and logistical obstacles preventing Muslim families from accessing authentic Quranic education.
            </p>
            <p className="text-dark-800/80 text-sm sm:text-base leading-relaxed">
              We combine traditional Sanad-backed pedagogical methods with state-of-the-art interactive digital tools. Whether your 6-year-old child is pronouncing their first Arabic letter or an adult learner is seeking to perfect their Tajweed, our certified male and female scholars provide compassionate, rigorous, and individualized mentorship.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-ivory-100 border border-emerald-950/10">
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-emerald-900">
                  100%
                </span>
                <span className="text-xs text-dark-800/80 font-medium">
                  One-on-One Individual Attention
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-ivory-100 border border-emerald-950/10">
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-gold-600">
                  Global
                </span>
                <span className="text-xs text-dark-800/80 font-medium">
                  Students across India & Abroad
                </span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-950/10">
            <div className="relative h-96 w-full">
              <Image
                src="/images/suhail/maulana-suhail-quran.jpg"
                alt="Maulana Suhail Ahmad - Founder & Academic Director holding the Holy Quran"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory-50">
                <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
                  Scholarly Supervision
                </p>
                <h3 className="font-serif text-lg font-bold">
                  Under the Guidance of Maulana Suhail Ahmad
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR FOUR QURAN COURSES (EXACT LIST & APPROVED PRICING)
      ======================================================== */}
      <section className="py-20 bg-ivory-100 border-y border-emerald-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-900/10 text-emerald-900 border border-emerald-900/20">
              <BookOpen className="w-3.5 h-3.5 text-gold-600" />
              Our Four Structured Courses
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
              Structured Quran Learning Paths
            </h2>
            <p className="text-sm sm:text-base text-dark-800/80">
              Choose from our four specialized curricula, specifically designed for beginners, reciters, memorizers, and students of Islamic scholarship.
            </p>
          </div>

          {/* 4 Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <CourseCard key={course.slug} course={course} featured={idx === 2} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-900 hover:text-emerald-700 underline"
            >
              <span>Explore Comprehensive Syllabi & Enrollment Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. WHY CHOOSE OUR ACADEMY
      ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Academy Advantages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
            Why Families Worldwide Trust Us
          </h2>
          <p className="text-sm sm:text-base text-dark-800/80">
            We hold ourselves to the highest standards of Islamic pedagogy, punctuality, and student engagement.
          </p>
        </div>

        {/* Right-to-Left Auto-Scrolling Carousel */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-ivory-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-ivory-50 to-transparent z-10" />

          <div className="flex gap-6 animate-marquee-rtl hover:[animation-play-state:paused] active:[animation-play-state:paused] w-max select-none py-2">
            {[
              {
                icon: Users,
                title: "1-on-1 Focused Attention",
                desc: "Every single class is private and dedicated to one student only, guaranteeing that the tutor identifies and corrects every subtle pronunciation nuance immediately.",
              },
              {
                icon: Award,
                title: "Certified Qaris & Huffaz",
                desc: "All male and female instructors possess formal Ijazah / Sanad in Tajweed and extensive teaching experience with young children and adults.",
              },
              {
                icon: Clock,
                title: "Flexible Scheduling (24/7)",
                desc: "Coordinate your classes to match your family's timezone, school timings, or working shifts across India, GCC, UK, USA, and beyond.",
              },
              {
                icon: HeartHandshake,
                title: "Female Teachers Available",
                desc: "Dedicated, certified female Quran teachers are available for sisters and young daughters in an atmosphere of complete comfort and respect.",
              },
              {
                icon: Laptop,
                title: "Interactive Digital Tools",
                desc: "Engaging digital Noorani Qaida, color-coded Tajweed Mushaf, and whiteboard explanations make learning vibrant and memorable.",
              },
              {
                icon: ShieldCheck,
                title: "Regular Progress Monitoring",
                desc: "Parents receive regular oral test evaluations, monthly attendance logs, and Tajweed benchmark reports tracking real progress.",
              },
              // Duplicated for seamless continuous right-to-left loop
              {
                icon: Users,
                title: "1-on-1 Focused Attention",
                desc: "Every single class is private and dedicated to one student only, guaranteeing that the tutor identifies and corrects every subtle pronunciation nuance immediately.",
              },
              {
                icon: Award,
                title: "Certified Qaris & Huffaz",
                desc: "All male and female instructors possess formal Ijazah / Sanad in Tajweed and extensive teaching experience with young children and adults.",
              },
              {
                icon: Clock,
                title: "Flexible Scheduling (24/7)",
                desc: "Coordinate your classes to match your family's timezone, school timings, or working shifts across India, GCC, UK, USA, and beyond.",
              },
              {
                icon: HeartHandshake,
                title: "Female Teachers Available",
                desc: "Dedicated, certified female Quran teachers are available for sisters and young daughters in an atmosphere of complete comfort and respect.",
              },
              {
                icon: Laptop,
                title: "Interactive Digital Tools",
                desc: "Engaging digital Noorani Qaida, color-coded Tajweed Mushaf, and whiteboard explanations make learning vibrant and memorable.",
              },
              {
                icon: ShieldCheck,
                title: "Regular Progress Monitoring",
                desc: "Parents receive regular oral test evaluations, monthly attendance logs, and Tajweed benchmark reports tracking real progress.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-[300px] sm:w-[360px] shrink-0 p-8 rounded-3xl bg-ivory-50 border border-emerald-950/10 hover:border-gold-500/40 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-900/10 text-emerald-900 group-hover:bg-emerald-900 group-hover:text-gold-400 flex items-center justify-center mb-5 transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950 mb-2">{item.title}</h3>
                  <p className="text-sm text-dark-800/75 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-emerald-800/70 mt-3 font-medium">
          <span>⇄ Auto-scrolling right to left • Hover or touch to pause</span>
        </div>
      </section>

      {/* ========================================================
          5. HOW ONLINE CLASSES WORK (4 SIMPLE STEPS)
      ======================================================== */}
      <section className="py-20 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-ivory-50 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Effortless Setup
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory-50">
              How Online Quran Classes Work
            </h2>
            <p className="text-sm sm:text-base text-ivory-200/80">
              Getting started takes fewer than 5 minutes. No complex hardware required—only a mobile phone, tablet, or laptop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                title: "Select Course & Timing",
                desc: "Choose between Noorani Qaida, Nazra, Hifz, or Aalim Course and specify your convenient days and time.",
              },
              {
                step: "02",
                title: "Attend Free Trial",
                desc: "Meet your assigned certified teacher 1-on-1, experience their teaching style, and assess your starting level.",
              },
              {
                step: "03",
                title: "Confirm Enrollment",
                desc: "Upon your satisfaction, complete admission and lock in your permanent class schedule.",
              },
              {
                step: "04",
                title: "Begin Quranic Journey",
                desc: "Log in for scheduled live lessons, receive daily feedback, and watch your Quran recitation flourish.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-emerald-900/60 border border-gold-500/20 shadow-lg backdrop-blur-sm"
              >
                <span className="font-serif text-4xl font-bold text-gold-400/40 block mb-3">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-ivory-50 mb-2">{step.title}</h3>
                <p className="text-xs text-ivory-200/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 text-emerald-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition-colors shadow-md"
            >
              <span>Read Full Class Guide & Technical Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. COURSE PRICING SUMMARY (CENTRALIZED APPROVED PRICING)
      ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Transparent Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
            Affordable Monthly Fee Plans
          </h2>
          <p className="text-sm sm:text-base text-dark-800/80">
            All prices reflect our official approved rates. No hidden admission fees, no surprise renewals.
          </p>
        </div>

        {/* Right-to-Left Auto-Scrolling Carousel */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-ivory-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-ivory-50 to-transparent z-10" />

          <div className="flex gap-6 animate-marquee-rtl hover:[animation-play-state:paused] active:[animation-play-state:paused] w-max select-none py-2">
            {[...courses, ...courses, ...courses].map((course, idx) => (
              <div
                key={`${course.slug}-${idx}`}
                className="w-[280px] sm:w-[320px] shrink-0 flex flex-col p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 hover:border-gold-500/50 shadow-md hover:shadow-xl transition-all justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-emerald-950 mb-1">{course.title}</h3>
                  <p className="text-xs text-dark-800/70 mb-4">{course.level}</p>

                  <div className="py-4 border-y border-emerald-950/10 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-serif font-bold text-emerald-900">
                        {formatCurrency(course.monthlyFee)}
                      </span>
                      <span className="text-xs text-dark-800/70">/ month</span>
                    </div>
                    {course.originalFee && (
                      <p className="text-xs text-dark-800/60 mt-1">
                        Regular: <span className="line-through">{formatCurrency(course.originalFee)}</span> (You save ₹100/mo)
                      </p>
                    )}
                  </div>

                  <ul className="space-y-2.5 text-xs text-dark-800/85 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>1-on-1 Live Class Session</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{course.duration}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>Certified Islamic Tutor</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>Free Trial Class Eligible</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href={`/admission?course=${course.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-emerald-900 hover:bg-emerald-800 text-ivory-50 transition-colors shadow-sm mt-2"
                >
                  Enroll in {course.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-emerald-800/70 mt-3 font-medium">
          <span>⇄ Auto-scrolling right to left • Hover or touch to pause</span>
        </div>
      </section>

      {/* ========================================================
          7. LEARNING BENEFITS FOR VARIOUS AUDIENCES
      ======================================================== */}
      <section className="py-20 bg-ivory-100 border-t border-emerald-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
              Designed for Every Stage of Life
            </h2>
            <p className="text-sm sm:text-base text-dark-800/80">
              Our teachers adapt teaching speed, tone, and encouragement to suit each learner’s unique age group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block mb-2">
                For Young Children
              </span>
              <h3 className="text-xl font-bold text-emerald-950 mb-3">
                Playful, Patient & Positive
              </h3>
              <p className="text-sm text-dark-800/75 leading-relaxed">
                We make Quran learning joyful. Young learners build letter recognition through colorful digital flashcards, vocal repetitions, and gentle reward systems.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block mb-2">
                For Sisters & Girls
              </span>
              <h3 className="text-xl font-bold text-emerald-950 mb-3">
                Privacy & Certified Female Staff
              </h3>
              <p className="text-sm text-dark-800/75 leading-relaxed">
                Complete comfort and privacy with certified female Alimas and Qariyas. Lessons conducted with utmost respect and cultural sensitivity.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block mb-2">
                For Working Adults
              </span>
              <h3 className="text-xl font-bold text-emerald-950 mb-3">
                Flexible Evening & Weekend Hours
              </h3>
              <p className="text-sm text-dark-800/75 leading-relaxed">
                It is never too late to learn or correct your recitation. We respect adult learners with dignity, patient correction, and tailored scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. MEET OUR TEACHERS PREVIEW
      ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-1">
              Qualified Academic Faculty
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
              Meet Our Certified Quran Instructors
            </h2>
          </div>
          <Link
            href="/teachers"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-700 underline"
          >
            <span>View All Academy Faculty</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Qari Muhammad Abdullah",
              role: "Senior Tajweed & Qira'at Instructor",
              qual: "Hafiz & Sanad in Hafs an Asim",
              exp: "12+ Years Teaching Experience",
            },
            {
              name: "Maulana Suhail Ahmad",
              role: "Academy Founder & Head of Aalim Studies",
              qual: "Fazil-e-Dars-e-Nizami & Islamic Jurisprudence",
              exp: "18+ Years Scholarly Guidance",
            },
            {
              name: "Ustadha Zainab Al-Huda",
              role: "Head of Female Department",
              qual: "Hafiza & Alima Degree",
              exp: "8+ Years Teaching Children & Sisters",
            },
            {
              name: "Qari Abdul Rahman",
              role: "Hifz-e-Quran Lead Mentor",
              qual: "Certified Hafiz & Muraja'ah Specialist",
              exp: "10+ Years Hifz Mentorship",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-900/10 border-2 border-gold-500/30 flex items-center justify-center mb-4 text-emerald-900">
                <GraduationCap className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-emerald-950 text-base">{t.name}</h3>
              <p className="text-xs text-gold-600 font-semibold mt-0.5">{t.role}</p>
              <div className="mt-4 pt-3 border-t border-emerald-950/10 text-[11px] text-dark-800/70 space-y-1">
                <p>{t.qual}</p>
                <p className="font-medium text-emerald-900">{t.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          9. STUDENT LEARNING JOURNEY TIMELINE
      ======================================================== */}
      <section className="py-20 bg-ivory-100 border-t border-emerald-950/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Proven Path
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
              The Student Learning Journey
            </h2>
            <p className="text-sm text-dark-800/80">
              From the first Arabic alphabet to melodious recitation and lifelong Quranic connection.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                stage: "Phase 1: Foundation (Noorani Qaida)",
                detail: "Makharij mastery, single letter recognition, joining rules, short and long vowels.",
                result: "Student can comfortably recognize and pronounce any Arabic word from script.",
              },
              {
                stage: "Phase 2: Fluency & Tajweed (Quran Kareem Nazra)",
                detail: "Reciting directly from the Mushaf, applying rules of Noon Sakin, Meem Sakin, Madd, and stopping signs.",
                result: "Student recites with confidence, melodious flow, and adherence to Tajweed rules.",
              },
              {
                stage: "Phase 3: Memorization & Mastery (Hifz & Aalim Course)",
                detail: "Systematic memorization with Sabaq, Sabqi, and Manzil, or in-depth study of Arabic and Islamic sciences.",
                result: "A lifelong spiritual connection, deep understanding, and certification.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-ivory-50 border border-emerald-950/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-base font-bold text-emerald-950">{p.stage}</h3>
                  <p className="text-xs text-dark-800/80 mt-1">{p.detail}</p>
                </div>
                <div className="md:text-right shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-semibold">
                    {p.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          10. FREE TRIAL REGISTRATION CTA BANNER
      ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 p-8 sm:p-12 text-ivory-50 border-2 border-gold-500/30 shadow-2xl">
          <SubtleGeometricPattern />
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-500/40">
              <Sparkles className="w-3.5 h-3.5" />
              100% Free • No Payment Required
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Book a Free Trial Class with a Certified Quran Tutor
            </h2>
            <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed">
              Experience our one-on-one teaching methodology first-hand. Evaluate tutor chemistry, ask questions, and receive a friendly initial recitation assessment without any commitment.
            </p>
            <div className="pt-2">
              <Link
                href="/free-trial"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-emerald-950 font-bold text-sm shadow-xl transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Free Trial Class Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. STUDENT & PARENT REVIEWS (TESTIMONIALS)
      ======================================================== */}
      <section className="py-20 bg-ivory-100 border-t border-emerald-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Global Reviews
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
              What Parents & Students Say
            </h2>
            <p className="text-sm sm:text-base text-dark-800/80">
              Read authentic feedback from families in India, the UK, the Gulf, and North America.
            </p>
          </div>

        {/* Right-to-Left Auto-Scrolling Carousel */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-ivory-100 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-ivory-100 to-transparent z-10" />

          <div className="flex gap-6 animate-marquee-rtl-slow hover:[animation-play-state:paused] active:[animation-play-state:paused] w-max select-none py-2">
            {[
              {
                name: "Dr. Tariq Mahmood",
                role: "Parent of 2 Students (Aged 8 and 11)",
                country: "United Kingdom",
                course: "Noorani Qaida & Nazra",
                quote:
                  "Suhail Online Quran Academy has transformed my children’s connection with the Quran. The teachers are exceptionally patient, punctual, and follow a structured methodology. Seeing my 8-year-old recite with accurate Makharij brings tears of gratitude.",
              },
              {
                name: "Sister Fatima Al-Zahra",
                role: "Adult Learner",
                country: "Canada",
                course: "Quran Kareem Nazra",
                quote:
                  "As a working professional, I struggled for years to find a schedule that worked for me. The flexible timing and dedicated female instructors here allowed me to complete the Nazra course with authentic Tajweed. Highly recommended for adults!",
              },
              {
                name: "Brother Zafar Iqbal",
                role: "Parent of Hifz Student",
                country: "India",
                course: "Hifz-e-Quran",
                quote:
                  "The Hifz program’s revision system (Sabaq, Sabqi, Manzil) is rigorous and results-driven. My son has already completed 10 Juz with impeccable retention and confidence. The monthly progress reports keep us fully informed.",
              },
              {
                name: "Sister Ayesha Siddiqui",
                role: "Mother of 9-year-old Daughter",
                country: "United Arab Emirates",
                course: "Noorani Qaida",
                quote:
                  "Finding a dedicated female teacher who understands child psychology was a blessing. In just 4 months, my daughter graduated from alphabet recognition to fluent Quran reading with proper Tajweed rules.",
              },
              {
                name: "Dr. Bilal Siddique",
                role: "Parent of 3 Children",
                country: "United States (Texas)",
                course: "Quran Kareem Nazra",
                quote:
                  "The 1-on-1 private class model makes a massive difference. The teacher gives undivided attention and fixes subtle articulation errors immediately. Very professional and dependable academy.",
              },
              {
                name: "Brother Imran Qureshi",
                role: "Aalim Course Student",
                country: "Australia",
                course: "Aalim Course",
                quote:
                  "The depth of knowledge and classical Arabic grammar explanation provided by the scholars is exemplary. It is rare to find such high-level Islamic scholarship in an accessible online format.",
              },
              // Duplicated for seamless continuous right-to-left loop
              {
                name: "Dr. Tariq Mahmood",
                role: "Parent of 2 Students (Aged 8 and 11)",
                country: "United Kingdom",
                course: "Noorani Qaida & Nazra",
                quote:
                  "Suhail Online Quran Academy has transformed my children’s connection with the Quran. The teachers are exceptionally patient, punctual, and follow a structured methodology. Seeing my 8-year-old recite with accurate Makharij brings tears of gratitude.",
              },
              {
                name: "Sister Fatima Al-Zahra",
                role: "Adult Learner",
                country: "Canada",
                course: "Quran Kareem Nazra",
                quote:
                  "As a working professional, I struggled for years to find a schedule that worked for me. The flexible timing and dedicated female instructors here allowed me to complete the Nazra course with authentic Tajweed. Highly recommended for adults!",
              },
              {
                name: "Brother Zafar Iqbal",
                role: "Parent of Hifz Student",
                country: "India",
                course: "Hifz-e-Quran",
                quote:
                  "The Hifz program’s revision system (Sabaq, Sabqi, Manzil) is rigorous and results-driven. My son has already completed 10 Juz with impeccable retention and confidence. The monthly progress reports keep us fully informed.",
              },
              {
                name: "Sister Ayesha Siddiqui",
                role: "Mother of 9-year-old Daughter",
                country: "United Arab Emirates",
                course: "Noorani Qaida",
                quote:
                  "Finding a dedicated female teacher who understands child psychology was a blessing. In just 4 months, my daughter graduated from alphabet recognition to fluent Quran reading with proper Tajweed rules.",
              },
              {
                name: "Dr. Bilal Siddique",
                role: "Parent of 3 Children",
                country: "United States (Texas)",
                course: "Quran Kareem Nazra",
                quote:
                  "The 1-on-1 private class model makes a massive difference. The teacher gives undivided attention and fixes subtle articulation errors immediately. Very professional and dependable academy.",
              },
              {
                name: "Brother Imran Qureshi",
                role: "Aalim Course Student",
                country: "Australia",
                course: "Aalim Course",
                quote:
                  "The depth of knowledge and classical Arabic grammar explanation provided by the scholars is exemplary. It is rare to find such high-level Islamic scholarship in an accessible online format.",
              },
            ].map((r, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[380px] shrink-0 p-8 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-dark-800/80 italic leading-relaxed">
                    “{r.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-950/10">
                  <h4 className="font-bold text-emerald-950 text-sm">{r.name}</h4>
                  <p className="text-xs text-dark-800/70">{r.role} • {r.country}</p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-emerald-800">
                    Course: {r.course}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-emerald-800/70 mt-3 font-medium">
          <span>⇄ Auto-scrolling right to left • Hover or touch to pause</span>
        </div>

          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-900 hover:text-emerald-700 underline"
            >
              <span>Read More Verified Student Testimonials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. FREQUENTLY ASKED QUESTIONS (ACCORDION)
      ======================================================== */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-dark-800/80">
            Everything you need to know about our courses, fees, and class platform.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What courses are currently offered at the academy?",
              a: "We offer exactly four approved courses: Noorani Qaida (₹1,399/month), Quran Kareem Nazra (₹1,399/month), Hifz-e-Quran (₹1,899/month), and the Aalim Course (₹1,399/month).",
            },
            {
              q: "How does the free trial class work?",
              a: "When you book a free trial, our academic coordinator coordinates with you to schedule a 30-minute private 1-on-1 session with a certified instructor at your preferred time. There is zero obligation or payment required.",
            },
            {
              q: "Are female Quran instructors available for sisters and young daughters?",
              a: "Yes, absolutely. We have a dedicated female faculty composed of qualified, certified Qariyas and Alimas to instruct sisters and young girls in complete comfort and privacy.",
            },
            {
              q: "What equipment do I need for online classes?",
              a: "You only need a desktop computer, laptop, tablet, or smartphone with an internet connection and a clear microphone/headset. Classes are conducted via Google Meet or Zoom.",
            },
            {
              q: "Can I reschedule a missed class?",
              a: "Yes. With 12 to 24 hours prior notice to your tutor or academy coordinator, make-up classes can be arranged based on teacher availability.",
            },
          ].map((item, idx) => (
            <details
              key={idx}
              className="group p-5 rounded-2xl bg-ivory-50 border border-emerald-950/10 hover:border-gold-500/40 shadow-sm transition-all open:bg-ivory-100"
            >
              <summary className="font-bold text-emerald-950 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-4">
                <span>{item.q}</span>
                <span className="text-gold-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-dark-800/80 leading-relaxed border-t border-emerald-950/10 pt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-xs font-bold text-emerald-900 hover:text-emerald-700 underline"
          >
            Have more questions? View Complete FAQ Page →
          </Link>
        </div>
      </section>

      {/* ========================================================
          13. LATEST EDUCATIONAL ARTICLES (BLOG PREVIEW)
      ======================================================== */}
      <section className="py-20 bg-ivory-100 border-t border-emerald-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block mb-1">
                Islamic Knowledge & Guidance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
                Latest Educational Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-700 underline"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        {/* Right-to-Left Auto-Scrolling Carousel */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-ivory-100 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-ivory-100 to-transparent z-10" />

          <div className="flex gap-6 animate-marquee-rtl hover:[animation-play-state:paused] active:[animation-play-state:paused] w-max select-none py-2">
            {[
              {
                slug: "how-to-learn-quran-online-beginners-guide",
                title: "How to Learn Quran Online: A Comprehensive Guide for Beginners & Families",
                category: "Quran Learning",
                readTime: "6 min read",
                image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=800",
                desc: "Discover practical methods, technical setups, and spiritual habits to maximize your Quranic education from the comfort of your home.",
              },
              {
                slug: "what-is-noorani-qaida-foundation-of-quran-reading",
                title: "What Is Noorani Qaida? The Essential Foundation of Quranic Recitation",
                category: "Tajweed & Qaida",
                readTime: "5 min read",
                image: "https://images.unsplash.com/photo-1587617425953-9075d28b8c46?auto=format&fit=crop&q=80&w=800",
                desc: "Understand why the classical Noorani Qaida remains the most trusted phonetic method for children and non-Arabic speaking adults worldwide.",
              },
              {
                slug: "effective-quran-memorization-hifz-tips",
                title: "Proven Quran Memorization (Hifz) Strategies: Tips from Experienced Huffaz",
                category: "Hifz Tips",
                readTime: "7 min read",
                image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=800",
                desc: "Explore the traditional tri-fold Hifz system (Sabaq, Sabqi, and Manzil) and discover psychological techniques to maintain rock-solid retention.",
              },
              {
                slug: "importance-of-tajweed-in-quran-recitation",
                title: "The Essential Role of Tajweed in Quranic Recitation: Rules & Mastery",
                category: "Tajweed Rules",
                readTime: "8 min read",
                image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80&w=800",
                desc: "Learn why precise articulation points (Makharij) and phonological characteristics preserve the sacred meaning of the Divine Revelation.",
              },
              // Duplicated for seamless continuous right-to-left loop
              {
                slug: "how-to-learn-quran-online-beginners-guide",
                title: "How to Learn Quran Online: A Comprehensive Guide for Beginners & Families",
                category: "Quran Learning",
                readTime: "6 min read",
                image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=800",
                desc: "Discover practical methods, technical setups, and spiritual habits to maximize your Quranic education from the comfort of your home.",
              },
              {
                slug: "what-is-noorani-qaida-foundation-of-quran-reading",
                title: "What Is Noorani Qaida? The Essential Foundation of Quranic Recitation",
                category: "Tajweed & Qaida",
                readTime: "5 min read",
                image: "https://images.unsplash.com/photo-1587617425953-9075d28b8c46?auto=format&fit=crop&q=80&w=800",
                desc: "Understand why the classical Noorani Qaida remains the most trusted phonetic method for children and non-Arabic speaking adults worldwide.",
              },
              {
                slug: "effective-quran-memorization-hifz-tips",
                title: "Proven Quran Memorization (Hifz) Strategies: Tips from Experienced Huffaz",
                category: "Hifz Tips",
                readTime: "7 min read",
                image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=800",
                desc: "Explore the traditional tri-fold Hifz system (Sabaq, Sabqi, and Manzil) and discover psychological techniques to maintain rock-solid retention.",
              },
              {
                slug: "importance-of-tajweed-in-quran-recitation",
                title: "The Essential Role of Tajweed in Quranic Recitation: Rules & Mastery",
                category: "Tajweed Rules",
                readTime: "8 min read",
                image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80&w=800",
                desc: "Learn why precise articulation points (Makharij) and phonological characteristics preserve the sacred meaning of the Divine Revelation.",
              },
            ].map((post, idx) => (
              <article
                key={`${post.slug}-${idx}`}
                className="w-[310px] sm:w-[360px] shrink-0 group flex flex-col rounded-3xl bg-ivory-50 border border-emerald-950/10 overflow-hidden shadow-sm hover:shadow-xl transition-all justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-emerald-950">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-emerald-900/90 text-ivory-50 text-[11px] font-semibold border border-gold-500/30">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[11px] text-dark-800/60 block mb-2">{post.readTime}</span>
                    <h3 className="font-bold text-emerald-950 text-base group-hover:text-emerald-800 leading-snug line-clamp-2 mb-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-xs text-dark-800/75 line-clamp-2 leading-relaxed mb-6">
                      {post.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-700 underline"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-emerald-800/70 mt-3 font-medium">
          <span>⇄ Auto-scrolling right to left • Hover or touch to pause</span>
        </div>
        </div>
      </section>

      {/* ========================================================
          14. FINAL ADMISSION CTA SECTION
      ======================================================== */}
      <section className="py-20 bg-gradient-to-tr from-emerald-950 via-emerald-900 to-emerald-950 text-ivory-50 text-center px-4 sm:px-6 lg:px-8 border-t border-gold-500/20 relative">
        <SubtleGeometricPattern />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-gold-600 to-gold-400 p-0.5 shadow-xl flex items-center justify-center">
            <div className="w-full h-full rounded-[14px] bg-emerald-950 flex items-center justify-center">
              <IslamicStarPattern className="w-8 h-8 text-gold-400" />
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory-50 leading-tight">
            Begin Your Sacred Quran Learning Journey Today
          </h2>

          <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed font-sans max-w-xl mx-auto">
            Join hundreds of satisfied students worldwide. Take the first step with certified scholars at Suhail Online Quran Academy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/admission"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 hover:from-gold-400 hover:to-gold-200 text-emerald-950 font-bold text-sm shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Apply for Online Admission
            </Link>

            <Link
              href="/free-trial"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-ivory-50 border border-gold-500/40 font-bold text-sm shadow-lg transition-all"
            >
              Book Free Trial Class
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
