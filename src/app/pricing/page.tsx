import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { APPROVED_COURSES } from "@/lib/courses";
import { formatCurrency } from "@/lib/utils";
import {
  Check,
  ShieldCheck,
  CreditCard,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { SubtleGeometricPattern, QuranVerseBanner } from "@/components/IslamicPattern";

export const metadata = {
  title: "Course Fees & Tuition Pricing",
  description:
    "Transparent monthly course fees at Maulana Suhail Ahmad Online Quran Academy: Noorani Qaida (₹1,399/mo), Quran Kareem Nazra (₹1,399/mo), Hifz-e-Quran (₹1,899/mo), and Aalim Course (₹1,399/mo).",
};

export default function PricingPage() {
  const courses = APPROVED_COURSES;

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Course Fees & Transparent Pricing"
        subtitle="Simple, honest monthly tuition with zero hidden registration fees, free trial classes, and dedicated one-on-one attention."
        arabicTitle="رسوم الدورات والبرامج الدراسية"
        badge="Official Approved Fee Schedule"
        breadcrumbs={[{ label: "Pricing" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <QuranVerseBanner
          arabic="وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ ۖ وَهُوَ خَيْرُ الرَّازِقِينَ"
          translation="“And whatever you spend [in His cause] - He will compensate it; and He is the best of providers.”"
          reference="Surah Saba (34:39)"
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <div
              key={course.slug}
              className={`flex flex-col p-8 rounded-3xl bg-ivory-50 border transition-all duration-300 shadow-md hover:shadow-2xl ${
                idx === 2
                  ? "border-gold-500/80 ring-2 ring-gold-500/20 relative"
                  : "border-emerald-950/10 hover:border-gold-500/40"
              }`}
            >
              {idx === 2 && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-gold-500 text-emerald-950 text-[10px] font-bold uppercase tracking-wider shadow">
                    Most Revered
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-serif text-xl font-bold text-emerald-950">{course.title}</h3>
                <p className="text-xs text-dark-800/70 mt-1">{course.level}</p>
              </div>

              {/* Fee Section */}
              <div className="py-6 border-y border-emerald-950/10 mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif font-bold text-emerald-950">
                    {formatCurrency(course.monthlyFee)}
                  </span>
                  <span className="text-xs text-dark-800/70">/ month</span>
                </div>
                {course.originalFee && (
                  <p className="text-xs text-emerald-700 font-semibold mt-1">
                    Special rate (₹100 discount included)
                  </p>
                )}
              </div>

              {/* Inclusions */}
              <ul className="space-y-3 text-xs text-dark-800/85 mb-8 flex-1">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>1-on-1 Personalized Live Classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Certified Qari / Scholar</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Digital Noorani Qaida & Tajweed Mushaf</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Monthly Diagnostic Progress Reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Male or Female Instructor Option</span>
                </li>
              </ul>

              <div className="space-y-2">
                <Link
                  href={`/admission?course=${course.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-ivory-50 font-bold text-xs uppercase tracking-wider transition-colors shadow text-center"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/free-trial?course=${course.slug}`}
                  className="w-full inline-flex items-center justify-center py-2 px-4 rounded-xl bg-ivory-100 hover:bg-ivory-200 text-emerald-950 font-semibold text-xs transition-colors text-center"
                >
                  Try Free Trial Class
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Policy Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-ivory-100 border border-emerald-950/10">
            <CreditCard className="w-8 h-8 text-gold-600 mb-3" />
            <h4 className="font-bold text-emerald-950 text-base mb-1">Easy Payment Methods</h4>
            <p className="text-xs text-dark-800/80 leading-relaxed">
              We accept UPI, Google Pay, PhonePe, Paytm, Direct NEFT/IMPS Bank Transfers, and international remittances for diaspora families.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-ivory-100 border border-emerald-950/10">
            <ShieldCheck className="w-8 h-8 text-emerald-800 mb-3" />
            <h4 className="font-bold text-emerald-950 text-base mb-1">No Registration Fees</h4>
            <p className="text-xs text-dark-800/80 leading-relaxed">
              We never charge admission registration charges or annual maintenance fees. You only pay the straightforward monthly course fee.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-ivory-100 border border-emerald-950/10">
            <Sparkles className="w-8 h-8 text-gold-600 mb-3" />
            <h4 className="font-bold text-emerald-950 text-base mb-1">Pause or Cancel Anytime</h4>
            <p className="text-xs text-dark-800/80 leading-relaxed">
              Family vacation or exams coming up? You can pause classes with advance notice without penalty or loss of tutor allocation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
