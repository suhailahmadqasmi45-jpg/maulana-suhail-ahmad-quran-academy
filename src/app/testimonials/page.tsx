import React from "react";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Star, Quote, ArrowRight, Video, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { QuranVerseBanner } from "@/components/IslamicPattern";

export const metadata = {
  title: "Student & Parent Reviews | Suhail Online Quran Academy",
  description:
    "Read genuine reviews and view live 1-on-1 class moments from parents, adult learners, and students studying at Suhail Online Quran Academy.",
};

export default function TestimonialsPage() {
  const liveClassShowcases = [
    {
      image: "/images/reviews/live-class-student-1.jpg",
      studentName: "Muhammad Rayan (Age 6)",
      parent: "Parent: Brother Farhan & Family",
      location: "Delhi, India",
      course: "Noorani Qaida",
      badge: "Beginner Foundation Student",
      quote:
        "My 6-year-old son started from absolute zero Arabic letters. In just 3 months with Maulana Suhail Ahmad's academy, he recites Noorani Qaida with clear, precise Makharij! The teacher's gentle encouragement on live video call keeps him excited to learn every single day without any fear.",
      highlights: ["1-on-1 Private Attention", "Daily Makharij Practice", "Patience with Young Children"],
    },
    {
      image: "/images/reviews/live-class-student-2.jpg",
      studentName: "Hamza Farooqui (Age 10)",
      parent: "Parent: Dr. Tariq Mahmood",
      location: "Lucknow, India",
      course: "Quran Kareem Nazra & Tajweed",
      badge: "Fluent Recitation Student",
      quote:
        "Alhamdulillah, one-on-one personal video instruction makes a monumental difference compared to crowded local tuition. The scholar watches his articulation in real time, pausing to fix heavy and light letters instantly. His Tajweed confidence has skyrocketed.",
      highlights: ["Real-time Tajweed Correction", "Screen-shared Digital Mushaf", "Flexible Evening Schedule"],
    },
  ];

  const reviews = [
    {
      name: "Dr. Tariq Mahmood",
      relation: "Parent of 2 Students (Aged 8 and 11)",
      country: "United Kingdom",
      course: "Noorani Qaida & Nazra",
      rating: 5,
      comment:
        "Suhail Online Quran Academy has transformed my children’s connection with the Quran. The teachers are exceptionally patient, punctual, and follow a structured methodology. Seeing my 8-year-old recite with accurate Makharij brings tears of gratitude.",
    },
    {
      name: "Sister Fatima Al-Zahra",
      relation: "Adult Learner",
      country: "Canada",
      course: "Quran Kareem Nazra",
      rating: 5,
      comment:
        "As a working professional, I struggled for years to find a schedule that worked for me. The flexible timing and dedicated female instructors here allowed me to complete the Nazra course with authentic Tajweed. Highly recommended for adults!",
    },
    {
      name: "Brother Zafar Iqbal",
      relation: "Parent of Hifz Student",
      country: "India",
      course: "Hifz-e-Quran",
      rating: 5,
      comment:
        "The Hifz program’s revision system (Sabaq, Sabqi, Manzil) is rigorous and results-driven. My son has already completed 10 Juz with impeccable retention and confidence. The monthly progress reports keep us fully informed.",
    },
    {
      name: "Sheikh Abdul Wahid",
      relation: "Student",
      country: "United Arab Emirates",
      course: "Aalim Course",
      rating: 5,
      comment:
        "The depth of knowledge in the Aalim course, especially classical Arabic grammar (Nahw and Sarf), is remarkable. The scholars explain complex theological concepts with clarity, wisdom, and adab.",
    },
    {
      name: "Sister Aisha Begum",
      relation: "Mother of 7-Year-Old",
      country: "India",
      course: "Noorani Qaida",
      rating: 5,
      comment:
        "My daughter used to find madrasa intimidating. Here, her teacher is so gentle, warm, and encouraging. She now eagerly waits for her daily 30-minute class every afternoon.",
    },
    {
      name: "Brother Salman Rauf",
      relation: "Adult Re-learner",
      country: "United States",
      course: "Quran Kareem Nazra & Tajweed",
      rating: 5,
      comment:
        "I was always self-conscious about my recitation pronunciation. My teacher patiently identified my errors with heavy and light letters without ever making me feel embarrassed. May Allah reward the academy abundantly.",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Student & Parent Testimonials"
        subtitle="Read real stories of Quranic transformation and see authentic moments from our live 1-on-1 video classes."
        arabicTitle="آراء الطلاب وأولياء الأمور"
        badge="Verified Student Experiences"
        breadcrumbs={[{ label: "Reviews" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <QuranVerseBanner
          arabic="هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ"
          translation="“Is the reward for good anything but good?”"
          reference="Surah Ar-Rahman (55:60)"
        />

        {/* ========================================================
            FEATURED: LIVE 1-ON-1 CLASS MOMENTS & SCREENSHOTS
        ======================================================== */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <Video className="w-3.5 h-3.5 text-emerald-700" />
              <span>Real Class Moments</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              Live 1-on-1 Video Class Sessions
            </h2>
            <p className="text-xs sm:text-sm text-dark-800/80">
              Every student learns individually with their personal certified teacher in an interactive, live audio-video environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {liveClassShowcases.map((showcase, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-ivory-50 border-2 border-gold-500/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                {/* Live Class Screenshot */}
                <div className="relative h-72 sm:h-80 w-full bg-emerald-950">
                  <Image
                    src={showcase.image}
                    alt={`${showcase.studentName} Live Class`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-black/20" />
                  
                  {/* Glowing Live Badge */}
                  <div className="absolute top-4 left-4 bg-emerald-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold-400/40 flex items-center gap-2 text-xs text-gold-300 font-bold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live 1-on-1 Session</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-ivory-50">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400 block mb-0.5">
                      {showcase.badge}
                    </span>
                    <h3 className="font-serif text-xl font-bold">{showcase.studentName}</h3>
                    <p className="text-xs text-ivory-200/80">
                      {showcase.parent} • {showcase.location}
                    </p>
                  </div>
                </div>

                {/* Review Text & Highlights */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-gold-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <span className="text-xs font-semibold text-emerald-900 ml-2">Verified Parent</span>
                    </div>

                    <p className="text-xs sm:text-sm text-dark-800/85 italic leading-relaxed">
                      “{showcase.quote}”
                    </p>
                  </div>

                  <div className="pt-4 border-t border-emerald-950/10 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block">
                      Course Enrolled: {showcase.course}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {showcase.highlights.map((h, hidx) => (
                        <span
                          key={hidx}
                          className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-ivory-100 border border-emerald-950/10 text-emerald-950 font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            MORE VERIFIED STUDENT REVIEWS GRID
        ======================================================== */}
        <section className="space-y-8 pt-6 border-t border-emerald-950/10">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="font-serif text-2xl font-bold text-emerald-950">
              More Stories from Parents & Adult Students
            </h3>
            <p className="text-xs text-dark-800/70">
              Students from India, UK, USA, UAE, and Canada learning from home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-dark-800/80 italic leading-relaxed">
                    “{r.comment}”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-950/10">
                  <h4 className="font-bold text-emerald-950 text-base">{r.name}</h4>
                  <p className="text-xs text-dark-800/70">{r.relation} • {r.country}</p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-emerald-800">
                    Course: {r.course}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-4">
          <Link
            href="/admission"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-ivory-50 font-bold text-sm uppercase tracking-wider transition-colors shadow-lg"
          >
            <span>Book a Free Trial Class for Your Child</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
