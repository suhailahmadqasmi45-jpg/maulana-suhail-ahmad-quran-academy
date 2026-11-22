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
  PhoneCall,
  MapPin,
  Clock,
  Compass,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SubtleGeometricPattern, QuranVerseBanner, IslamicStarPattern } from "@/components/IslamicPattern";

export const metadata = {
  title: "About Us | Maulana Suhail Ahmad & Academy Heritage",
  description:
    "Learn about Suhail Online Quran Academy, founded and directed by Maulana Suhail Ahmad, our heritage, registered office in Nairana, Muzaffarnagar, and mission to deliver authentic Quran education globally.",
};

export default function AboutPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917505511251";
  const cleanWhatsapp = whatsappNumber.replace(/[^0-9]/g, "");
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 75055 11251";
  const cleanPhone = contactPhone.replace(/[^0-9+]/g, "");
  const academyAddress =
    process.env.NEXT_PUBLIC_ACADEMY_ADDRESS ||
    "Village Nairana, District Muzaffarnagar, Uttar Pradesh - 251203, India";

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="About Our Academy"
        subtitle="Founded and supervised by Maulana Suhail Ahmad — dedicated to authentic Quranic recitation, classical Sanad, and compassionate 1-on-1 mentorship for families worldwide."
        arabicTitle="عن أكاديمية سهيل لتعليم القرآن الكريم"
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

        {/* ========================================================
            FEATURE SECTION: FOUNDER & ACADEMIC DIRECTOR SPOTLIGHT
        ======================================================== */}
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-ivory-50 p-6 sm:p-10 lg:p-12 shadow-2xl border-2 border-gold-500/40 overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Founder's Portrait with Calligraphy */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                {/* Glow ring */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-gold-500 via-emerald-600 to-gold-400 opacity-70 blur-lg group-hover:opacity-100 transition duration-500" />

                <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/80 bg-emerald-950 shadow-2xl">
                  <div className="relative h-96 sm:h-[420px] w-full">
                    <Image
                      src="/images/suhail/maulana-suhail-portrait.jpg"
                      alt="Maulana Suhail Ahmad - Founder & Academic Director"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />

                    {/* Bottom Name Tag overlay */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-emerald-950/90 backdrop-blur-md border border-gold-500/40 text-center">
                      <p className="font-serif text-lg font-bold text-ivory-50 tracking-wide">
                        Maulana Suhail Ahmad
                      </p>
                      <p className="text-xs font-semibold text-gold-400 uppercase tracking-widest mt-0.5">
                        Founder & Academic Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed Scholarly Profile, Calligraphy & Direct Action Buttons */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/50 text-gold-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Academic Leadership</span>
              </div>

              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory-50 leading-tight">
                  Guided by Maulana Suhail Ahmad
                </h2>
                <p className="text-gold-300 font-serif italic text-base sm:text-lg mt-1">
                  “اللہ کی رضا ہی اصل کامیابی ہے”
                </p>
                <p className="text-xs text-ivory-200/70 font-sans">
                  (Seeking Allah&apos;s Pleasure is the Ultimate Success)
                </p>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-ivory-200/90 leading-relaxed font-sans">
                <p>
                  <strong className="text-ivory-50">Suhail Online Quran Academy</strong> is led under the direct supervision of <strong className="text-gold-300">Maulana Suhail Ahmad</strong>, an esteemed scholar dedicated to preserving authentic Quranic recitation, classical Tajweed phonetics, and traditional Islamic sciences.
                </p>
                <p>
                  Having mastered classical Dars-e-Nizami curricula and verified recitation Sanad, Maulana Suhail Ahmad established this international digital academy to ensure Muslim families across India, the Middle East, United Kingdom, North America, and Europe receive genuine, one-on-one Islamic tutoring right from their homes.
                </p>
                <p>
                  Every course curriculum—from early childhood Noorani Qaida to full Hifz-e-Quran and Aalim Studies—is curated, reviewed, and periodically assessed under his direct scholarly guidance.
                </p>
              </div>

              {/* Direct Call & WhatsApp Action Buttons */}
              <div className="pt-4 border-t border-emerald-800/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-emerald-950 shadow-xl hover:shadow-gold-500/20 transition-all duration-300 active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-950" />
                  <span>Call Maulana Suhail: {contactPhone}</span>
                </a>

                <a
                  href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
                    "Assalamu Alaikum Maulana Suhail Ahmad, I would like to inquire about Quran classes at Suhail Online Quran Academy."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp: {whatsappNumber}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            AUTHENTIC PHOTO GALLERY: MOMENTS OF DEVOTION
        ======================================================== */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Devotion & Scholarship
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              Glimpses of Quranic Service
            </h3>
            <p className="text-xs sm:text-sm text-dark-800/80">
              Moments illustrating our leadership’s lifelong commitment to studying, teaching, and sharing the Holy Quran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Photo 1: Holding Quran with Islamic Books */}
            <div className="group rounded-3xl overflow-hidden bg-ivory-50 border border-emerald-950/15 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-80 w-full overflow-hidden bg-emerald-950">
                <Image
                  src="/images/suhail/maulana-suhail-quran.jpg"
                  alt="Maulana Suhail Ahmad holding the Holy Quran with Islamic library collections"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-[11px] font-bold text-gold-300 border border-gold-500/30">
                  Quranic Studies
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-emerald-950 text-base mb-1">
                    With the Holy Quran
                  </h4>
                  <p className="text-xs text-dark-800/75 leading-relaxed">
                    Maulana Suhail Ahmad engaged with classic Tafseer and Hadith texts, maintaining the highest standards of Islamic pedagogical integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 2: Reciting Quran in Dastaar */}
            <div className="group rounded-3xl overflow-hidden bg-ivory-50 border border-emerald-950/15 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-80 w-full overflow-hidden bg-emerald-950">
                <Image
                  src="/images/suhail/maulana-suhail-reading.jpg"
                  alt="Maulana Suhail Ahmad reciting the Holy Quran with Dastaar"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-[11px] font-bold text-gold-300 border border-gold-500/30">
                  Traditional Tilawat
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-emerald-950 text-base mb-1">
                    Authentic Oral Recitation
                  </h4>
                  <p className="text-xs text-dark-800/75 leading-relaxed">
                    Recitation in a traditional scholarly assembly with Dastaar, adhering strictly to classical Tajweed phonetics and oral Sanad.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 3: Portrait with Calligraphy */}
            <div className="group rounded-3xl overflow-hidden bg-ivory-50 border border-emerald-950/15 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-80 w-full overflow-hidden bg-emerald-950">
                <Image
                  src="/images/suhail/maulana-suhail-portrait.jpg"
                  alt="Maulana Suhail Ahmad portrait with Urdu calligraphy"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-[11px] font-bold text-gold-300 border border-gold-500/30">
                  Academic Director
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-emerald-950 text-base mb-1">
                    Guiding Students Globally
                  </h4>
                  <p className="text-xs text-dark-800/75 leading-relaxed">
                    Directing our certified male and female teachers to ensure every child and adult receives patient, respectful, and disciplined education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            OFFICIAL ACADEMY POSTERS & PROSPECTUS
        ======================================================== */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Official Prospectus
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              Our Comprehensive Quran Curriculum
            </h3>
            <p className="text-xs sm:text-sm text-dark-800/80">
              Structured courses for kids, sisters, and adults with one-to-one classes, certified male and female instructors, and free trial demo sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-emerald-950 border-2 border-gold-500/40 shadow-xl">
              <div className="relative h-[480px] sm:h-[540px] w-full">
                <Image
                  src="/images/posters/learn-quran-online-dome.jpg"
                  alt="Maulana Suhail Ahmad - Learn Quran Online Official Poster"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain sm:object-cover"
                />
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-emerald-950 border-2 border-gold-500/40 shadow-xl">
              <div className="relative h-[480px] sm:h-[540px] w-full">
                <Image
                  src="/images/posters/learn-quran-online-kids.jpg"
                  alt="Suhail Online Quran Academy - Kids & Adults Quran Classes Poster"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain sm:object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            OFFICIAL ACADEMY REGISTERED ADDRESS & OFFICE CARD
        ======================================================== */}
        <div className="p-8 sm:p-10 rounded-3xl bg-ivory-50 border-2 border-emerald-900/20 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-950/10 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold-600" />
                <span>Verified Academy Information</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
                Registered Academy Headquarters & Contact Details
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-900 text-ivory-50 text-xs font-bold hover:bg-emerald-800 transition-colors shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
                  "Assalamu Alaikum, I would like to inquire about Quran classes at Suhail Online Quran Academy."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Academy & Leadership */}
            <div className="p-5 rounded-2xl bg-ivory-100/70 border border-emerald-950/10 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-emerald-900" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-dark-800/60">
                Academy & Director
              </h4>
              <p className="font-bold text-emerald-950 text-sm leading-snug">
                Suhail Online Quran Academy
              </p>
              <p className="text-xs text-gold-700 font-semibold">
                Director: Maulana Suhail Ahmad
              </p>
            </div>

            {/* Box 2: Registered Physical Address */}
            <div className="p-5 rounded-2xl bg-ivory-100/70 border border-emerald-950/10 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-700 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gold-600" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-dark-800/60">
                Official Academy Address
              </h4>
              <p className="font-bold text-emerald-950 text-sm leading-snug">
                Village: Nairana
              </p>
              <p className="text-xs text-dark-800/80 leading-relaxed">
                District: Muzaffarnagar<br />
                State: Uttar Pradesh — 251203, India
              </p>
            </div>

            {/* Box 3: Phone & WhatsApp */}
            <div className="p-5 rounded-2xl bg-ivory-100/70 border border-emerald-950/10 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center">
                <PhoneCall className="w-5 h-5 text-emerald-900" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-dark-800/60">
                Direct Contact Helpline
              </h4>
              <a
                href={`tel:${cleanPhone}`}
                className="font-bold text-emerald-950 hover:text-emerald-800 text-sm block underline"
              >
                {contactPhone}
              </a>
              <a
                href={`https://wa.me/${cleanWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#25D366] font-bold hover:underline block"
              >
                WhatsApp: {whatsappNumber}
              </a>
            </div>

            {/* Box 4: Online Distance Campus */}
            <div className="p-5 rounded-2xl bg-ivory-100/70 border border-emerald-950/10 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-700 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold-600" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-dark-800/60">
                Online Campus Hours
              </h4>
              <p className="font-bold text-emerald-950 text-sm leading-snug">
                24 Hours • 7 Days a Week
              </p>
              <p className="text-xs text-dark-800/80 leading-relaxed">
                Personalized 1-on-1 sessions matching India, UAE, UK, USA & global schedules.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            CORE EDUCATIONAL PILLARS
        ======================================================== */}
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

        {/* ========================================================
            SCHOLARLY LEADERSHIP MESSAGE
        ======================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-ivory-100 border border-emerald-950/15 shadow-sm">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block">
              Scholarly Message
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              A Personal Message from Maulana Suhail Ahmad
            </h3>
            <p className="text-sm text-dark-800/80 leading-relaxed italic font-serif">
              “The Holy Quran is the radiant light that illuminates our hearts, homes, and lives. Our academy exists to serve every soul yearning to connect with Allah’s book with sincerity, accuracy, and love. We invite parents and earnest learners to experience the transformative blessing of regular Quran study.”
            </p>
            <div className="pt-3">
              <p className="font-bold text-emerald-950 text-base">Maulana Suhail Ahmad</p>
              <p className="text-xs text-dark-800/60">
                Founder & Academic Director • Suhail Online Quran Academy
              </p>
              <p className="text-[11px] text-emerald-900 font-medium mt-1">
                Nairana, Muzaffarnagar, Uttar Pradesh - 251203, India
              </p>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <Link
                href="/admission"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-ivory-50 text-xs font-bold transition-all shadow-md"
              >
                <span>Enroll with Our Academy</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
