import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { GraduationCap, Award, BookOpen, HeartHandshake, ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { QuranVerseBanner } from "@/components/IslamicPattern";

export const metadata = {
  title: "Our Teachers & Scholarly Faculty",
  description:
    "Meet the qualified, certified Islamic scholars, Huffaz, and Qaris who guide our students at Suhail Online Quran Academy under the leadership of Maulana Suhail Ahmad.",
};

export default function TeachersPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917505511251";
  const cleanWhatsapp = whatsappNumber.replace(/[^0-9]/g, "");
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 75055 11251";
  const cleanPhone = contactPhone.replace(/[^0-9+]/g, "");

  const faculty = [
    {
      name: "Maulana Suhail Ahmad",
      role: "Academy Founder & Academic Dean",
      image: "/images/suhail/maulana-suhail-portrait.jpg",
      credentials: "Fazil-e-Dars-e-Nizami, Specialist in Islamic Jurisprudence & Quranic Sciences",
      bio: "With over 18 years of scholarly service, Maulana Suhail Ahmad oversees the academic curriculum, teacher selection, and ensures every class adheres to authentic Islamic ethics.",
      focus: "Aalim Studies, Tafseer & Advanced Guidance",
      isFounder: true,
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
        subtitle="Learn from patient, verified Islamic scholars and certified Qaris dedicated to your personal Quranic progress under the supervision of Maulana Suhail Ahmad."
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
              className={`p-8 rounded-3xl bg-ivory-50 border transition-all flex flex-col justify-between ${
                t.isFounder
                  ? "border-gold-500/60 shadow-lg ring-2 ring-gold-400/20 bg-gradient-to-b from-ivory-50 via-gold-50/20 to-ivory-50"
                  : "border-emerald-950/10 hover:border-gold-500/50 shadow-sm hover:shadow-xl"
              }`}
            >
              <div className="space-y-4">
                {t.image ? (
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-gold-500/60 shadow-md">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center border border-gold-500/30">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-emerald-950 text-xl font-serif flex items-center gap-2">
                    <span>{t.name}</span>
                    {t.isFounder && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-700 border border-gold-400/40 uppercase tracking-wider">
                        Founder
                      </span>
                    )}
                  </h3>
                  <p className="text-xs font-semibold text-gold-600 mt-0.5">{t.role}</p>
                </div>
                <div className="p-3 rounded-xl bg-ivory-100 text-[11px] text-dark-800/80 font-medium">
                  {t.credentials}
                </div>
                <p className="text-xs text-dark-800/75 leading-relaxed">{t.bio}</p>

                {t.isFounder && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={`tel:${cleanPhone}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-900 text-ivory-50 text-xs font-bold hover:bg-emerald-800 transition-colors shadow-sm"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
                      <span>Direct Call</span>
                    </a>
                    <a
                      href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
                        "Assalamu Alaikum Maulana Suhail Ahmad, I would like to inquire about Quran classes."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors shadow-sm"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                )}
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
              Fewer than 10% of teacher applicants are accepted into our academy. Every instructor must pass oral recitation exams personally supervised by Maulana Suhail Ahmad, pedagogical psychology interviews, background checks, and continuous audio/video audits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
