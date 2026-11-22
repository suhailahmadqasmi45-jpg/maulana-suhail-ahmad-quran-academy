import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Laptop, Headphones, Calendar, CheckCircle2, Video, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { QuranVerseBanner } from "@/components/IslamicPattern";

export const metadata = {
  title: "How Online Quran Classes Work",
  description:
    "Learn how our 1-on-1 online Quran classes are conducted via Google Meet and Zoom with interactive digital tools and flexible scheduling.",
};

export default function HowItWorksPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="How Online Quran Classes Work"
        subtitle="A modern, distraction-free digital learning environment bringing certified Islamic education directly to your screen."
        arabicTitle="كيفية سير الحصص الدراسية عبر الإنترنت"
        badge="Simple 4-Step Process"
        breadcrumbs={[{ label: "How It Works" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <QuranVerseBanner
          arabic="وَقُل رَّبِّ زِدْنِي عِلْمًا"
          translation="“And say: My Lord, increase me in knowledge.”"
          reference="Surah Taha (20:114)"
        />

        {/* Step-by-Step Walkthrough */}
        <div className="space-y-8">
          {[
            {
              step: "Step 01",
              title: "Choose Your Desired Course & Apply",
              desc: "Explore our four accredited courses: Noorani Qaida, Quran Kareem Nazra, Hifz-e-Quran, or the Aalim Course. Submit your admission or free trial form online in under two minutes.",
              icon: Calendar,
            },
            {
              step: "Step 02",
              title: "Receive Tutor Match & Trial Class Link",
              desc: "Our academic coordinator evaluates your timing preferences and language requirements, assigning an ideal male or female tutor. You will receive a direct Google Meet or Zoom link via WhatsApp and email.",
              icon: Video,
            },
            {
              step: "Step 03",
              title: "Attend Private 1-on-1 Live Class",
              desc: "Join the session from any laptop, tablet, or smartphone. The teacher shares high-definition digital Qaida pages or color-coded Tajweed Mushaf, hearing your recitation and correcting Makharij in real-time.",
              icon: Headphones,
            },
            {
              step: "Step 04",
              title: "Track Regular Progress & Receive Certification",
              desc: "Following each class, notes and daily assignments are recorded. Parents receive regular updates on attendance, Tajweed progress, upcoming lessons, and examination schedules.",
              icon: CheckCircle2,
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm flex flex-col md:flex-row items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                <s.icon className="w-7 h-7" />
              </div>
              <div className="space-y-2 flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                  {s.step}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-950">
                  {s.title}
                </h3>
                <p className="text-sm text-dark-800/80 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Requirements */}
        <div className="p-8 sm:p-12 rounded-3xl bg-ivory-100 border border-emerald-950/10 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-emerald-950 text-center">
            Technical & Environment Requirements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-ivory-50 border border-emerald-950/10">
              <Laptop className="w-6 h-6 text-emerald-900 mb-2" />
              <h4 className="font-bold text-sm text-emerald-950">Any Device</h4>
              <p className="text-xs text-dark-800/75 mt-1">
                A laptop, desktop PC, iPad, tablet, or smartphone with a working screen.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory-50 border border-emerald-950/10">
              <Headphones className="w-6 h-6 text-gold-600 mb-2" />
              <h4 className="font-bold text-sm text-emerald-950">Audio Headset</h4>
              <p className="text-xs text-dark-800/75 mt-1">
                Earphones or a headset help both teacher and student hear delicate Arabic consonants clearly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory-50 border border-emerald-950/10">
              <ShieldCheck className="w-6 h-6 text-emerald-900 mb-2" />
              <h4 className="font-bold text-sm text-emerald-950">Quiet Study Space</h4>
              <p className="text-xs text-dark-800/75 mt-1">
                A dedicated, quiet corner in your home free from television or distracting noise.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-emerald-950 font-bold text-sm uppercase tracking-wider transition-colors shadow-lg"
          >
            <span>Book Your Free Trial Class Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
