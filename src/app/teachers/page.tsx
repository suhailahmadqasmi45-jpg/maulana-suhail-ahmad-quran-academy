import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { GraduationCap, Award, BookOpen, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { QuranVerseBanner } from "@/components/IslamicPattern";

export const metadata = {
  title: "Our Teachers & Scholarly Faculty",
  description:
    "Meet the qualified, certified Islamic scholars, Huffaz, and Qaris who guide our students at Maulana Suhail Ahmad Online Quran Academy.",
};

export default function TeachersPage() {
  const faculty = [
    {
      name: "Maulana Suhail Ahmad",
      role: "Academy Founder & Academic Dean",
      credentials: "Fazil-e-Dars-e-Nizami, Specialist in Islamic Jurisprudence & Quranic Sciences",
      bio: "With over 18 years of scholarly service, Maulana Suhail Ahmad oversees the academic curriculum, teacher selection, and ensures every class adheres to authentic Islamic ethics.",
      focus: "Aalim Studies, Tafseer & Advanced Guidance",
    },
    {
      name: "Qari Muhammad Abdullah",
      role: "Senior Tajweed & Qira'at Specialist",
      credentials: "Hafiz-ul-Quran with Sanad in Qira'at Hafs an Asim",
      bio: "Qari Abdullah has trained hundreds of students worldwide, known for his exceptional patience with young children and meticulous correction of Arabic articulation.",
      focus: "Noorani Qaida & Nazra Quran",
    },
    {
      name: "Ustadha Zainab Al-Huda",
      role: "Head of Female Department",
      credentials: "Certified Alima & Hafiza with 8+ years international teaching experience",
      bio: "Ustadha Zainab leads our female teaching team, delivering dedicated private lessons for sisters and young girls in an encouraging, modest, and comforting environment.",
      focus: "Sisters' Tajweed & Children's Foundation",
    },
    {
      name: "Qari Abdul Rahman",
      role: "Lead Hifz-e-Quran Mentor",
      credentials: "Certified Hafiz & Muraja'ah Master",
      bio: "Specializing in the classical Sabaq, Sabqi, and Manzil retention methodology, Qari Abdul Rahman mentors students pursuing full Quran memorization with disciplined care.",
      focus: "Quran Memorization & Long-Term Revision",
    },
    {
      name: "Ustadha Maryam Siddiqui",
      role: "Senior Qaida & Kids Instructor",
      credentials: "Diploma in Arabic Phonetics & Child Psychology in Islamic Education",
      bio: "Specializing in early childhood Quran learning, Ustadha Maryam excels at keeping 4-to-8-year-old children engaged and enthusiastic about Arabic letters and pronunciation.",
      focus: "Early Childhood Arabic Literacy",
    },
    {
      name: "Maulana Tariq Jamil Al-Madani",
      role: "Associate Professor of Islamic Jurisprudence",
      credentials: "Graduate in Usul al-Fiqh & Prophetic Traditions",
      bio: "Conducts advanced modules in the Aalim program, focusing on Hadith analysis, Seerah, and navigating modern ethical questions through an authentic Islamic framework.",
      focus: "Islamic Jurisprudence & Hadith Studies",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Our Certified Faculty & Teachers"
        subtitle="Learn from patient, verified Islamic scholars and certified Qaris dedicated to your personal Quranic progress."
        arabicTitle="هيئة التدريس والمشايخ المعتمدون"
        badge="Rigorous Teacher Vetting"
        breadcrumbs={[{ label: "Our Teachers" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <QuranVerseBanner
          arabic="يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ"
          translation="“Allah will raise those who have believed among you and those who were given knowledge, by degrees.”"
          reference="Surah Al-Mujadila (58:11)"
        />

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-ivory-50 border border-emerald-950/10 hover:border-gold-500/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center border border-gold-500/30">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-emerald-950 text-xl font-serif">{t.name}</h3>
                  <p className="text-xs font-semibold text-gold-600 mt-0.5">{t.role}</p>
                </div>
                <div className="p-3 rounded-xl bg-ivory-100 text-[11px] text-dark-800/80 font-medium">
                  {t.credentials}
                </div>
                <p className="text-xs text-dark-800/75 leading-relaxed">{t.bio}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-950/10 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-900">{t.focus}</span>
                <Link
                  href="/admission"
                  className="text-xs font-bold text-gold-600 hover:text-gold-700 underline flex items-center gap-1"
                >
                  <span>Request Tutor</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Teacher Selection Standards */}
        <div className="p-8 sm:p-12 rounded-3xl bg-ivory-100 border border-emerald-950/10">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              Our 4-Stage Teacher Selection Process
            </h3>
            <p className="text-sm text-dark-800/80 leading-relaxed">
              Fewer than 10% of teacher applicants are accepted into our academy. Every instructor must pass oral recitation exams, pedagogical psychology interviews, criminal background verification, and continuous quality audits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
