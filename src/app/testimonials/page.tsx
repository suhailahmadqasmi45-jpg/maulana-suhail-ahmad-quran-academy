import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Star, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { QuranVerseBanner } from "@/components/IslamicPattern";

export const metadata = {
  title: "Student & Parent Reviews",
  description:
    "Read genuine reviews and testimonials from parents, adult learners, and students studying at Maulana Suhail Ahmad Online Quran Academy.",
};

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Dr. Tariq Mahmood",
      relation: "Parent of 2 Students (Aged 8 and 11)",
      country: "United Kingdom",
      course: "Noorani Qaida & Nazra",
      rating: 5,
      comment:
        "Maulana Suhail Ahmad Online Quran Academy has transformed my children’s connection with the Quran. The teachers are exceptionally patient, punctual, and follow a structured methodology. Seeing my 8-year-old recite with accurate Makharij brings tears of gratitude.",
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
        "My daughter used to find madrasa intimidating. Here, her teacher Ustadha Zainab is so gentle, warm, and encouraging. She now eagerly waits for her daily 30-minute class every afternoon.",
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
        subtitle="Read real stories of Quranic transformation from students and families around the globe."
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

        <div className="text-center pt-4">
          <Link
            href="/admission"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-ivory-50 font-bold text-sm uppercase tracking-wider transition-colors shadow-lg"
          >
            <span>Join Our Global Academy Family</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
