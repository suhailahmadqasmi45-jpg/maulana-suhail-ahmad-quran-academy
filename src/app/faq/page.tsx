import React from "react";
import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { QuranVerseBanner } from "@/components/IslamicPattern";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about online Quran classes, course fees, timings, teachers, and technical requirements.",
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Admissions & Free Trials",
      items: [
        {
          q: "How do I enroll in a course?",
          a: "You can apply directly via our Online Admission form or request a 1-on-1 Free Trial Class first. Once submitted, our coordinator will reach out to you via WhatsApp or Email within 24 hours to schedule your class.",
        },
        {
          q: "Is the trial class truly free?",
          a: "Yes, 100% free with zero obligation. You are not required to provide payment information or commitment before taking your trial session.",
        },
        {
          q: "At what age can children begin Noorani Qaida?",
          a: "Children as young as 4 or 5 can comfortably start our Noorani Qaida course. Our teachers utilize child-friendly interactive flashcards and gentle pacing designed for early attention spans.",
        },
      ],
    },
    {
      category: "Tuition Fees & Payments",
      items: [
        {
          q: "What are the exact monthly fees?",
          a: "Our approved monthly fees are: Noorani Qaida (₹1,399/mo), Quran Kareem Nazra (₹1,399/mo), Hifz-e-Quran (₹1,899/mo), and Aalim Course (₹1,399/mo). All fees are payable monthly.",
        },
        {
          q: "Are there any hidden admission or examination fees?",
          a: "No. We never charge hidden registration fees, admission processing costs, or annual maintenance fees. You only pay the straightforward monthly fee for your selected course.",
        },
        {
          q: "What payment methods are supported?",
          a: "We support UPI (Google Pay, PhonePe, Paytm), Direct Bank Transfer (NEFT/IMPS), and international wire options for overseas students in the UK, UAE, USA, and Canada.",
        },
      ],
    },
    {
      category: "Classes & Scheduling",
      items: [
        {
          q: "Are classes 1-on-1 or group classes?",
          a: "All our classes are conducted 1-on-1 privately between one teacher and one student. This ensures 100% dedicated focus, immediate oral correction, and customized pacing.",
        },
        {
          q: "Can we request a female teacher for sisters or young girls?",
          a: "Yes. We have a distinguished female department with qualified, certified female Qariyas and Alimas for sisters and young girls.",
        },
        {
          q: "What happens if we miss a class due to illness or emergency?",
          a: "With at least 12 hours advance notification to your teacher or coordinator, we will happily arrange a make-up class according to tutor availability.",
        },
        {
          q: "How many classes are conducted per week?",
          a: "Standard enrollments typically feature 3 to 5 classes per week (each session 30 to 45 minutes) based on student age, course type, and family schedule.",
        },
      ],
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Common questions regarding course enrollment, scheduling, trial classes, and online tutoring."
        arabicTitle="الأسئلة الأكثر شيوعاً"
        badge="Clear & Transparent Guidance"
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <QuranVerseBanner
          arabic="فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ"
          translation="“So ask the people of the message if you do not know.”"
          reference="Surah An-Nahl (16:43)"
        />

        <div className="space-y-12">
          {faqCategories.map((cat, cidx) => (
            <div key={cidx} className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-emerald-950 border-b border-emerald-950/10 pb-2">
                {cat.category}
              </h3>

              <div className="space-y-3">
                {cat.items.map((item, idx) => (
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
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-ivory-100 border border-emerald-950/15 text-center space-y-4">
          <h3 className="font-serif text-xl font-bold text-emerald-950">
            Have a Specific Question We Didn’t Cover?
          </h3>
          <p className="text-xs sm:text-sm text-dark-800/80 max-w-md mx-auto">
            Our admissions counselors are available on WhatsApp and phone to guide you regarding suitable courses and class schedules.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-emerald-900 text-ivory-50 text-xs font-bold uppercase tracking-wider hover:bg-emerald-800 transition-colors shadow"
            >
              Contact Admission Desk
            </Link>
            <Link
              href="/free-trial"
              className="px-6 py-3 rounded-xl bg-gold-500 text-emerald-950 text-xs font-bold uppercase tracking-wider hover:bg-gold-400 transition-colors shadow"
            >
              Book Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
