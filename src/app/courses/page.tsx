import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { APPROVED_COURSES } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";
import { SubtleGeometricPattern, QuranVerseBanner } from "@/components/IslamicPattern";
import { BookOpen, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "All Courses & Academic Programs",
  description:
    "Explore our four approved structured courses: Noorani Qaida (₹1,399/mo), Quran Kareem Nazra (₹1,399/mo), Hifz-e-Quran (₹1,899/mo), and Aalim Course (₹1,399/mo).",
};

export default function CoursesPage() {
  const courses = APPROVED_COURSES;

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Our Quran & Islamic Courses"
        subtitle="Carefully structured one-on-one courses taught by certified Qaris, Huffaz, and traditional Islamic scholars."
        arabicTitle="الدورات القرآنية والعلوم الشرعية"
        badge="Structured Curriculum"
        breadcrumbs={[{ label: "Courses" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <QuranVerseBanner
          arabic="إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ"
          translation="“Indeed, this Quran guides to that which is most suitable.”"
          reference="Surah Al-Isra (17:9)"
        />

        {/* 4 Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <CourseCard key={course.slug} course={course} featured={idx === 2} />
          ))}
        </div>

        {/* Course Selection Guide */}
        <div className="p-8 sm:p-12 rounded-3xl bg-ivory-100 border border-emerald-950/10 shadow-sm">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Not Sure Which Course to Pick?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              Book a Diagnostic Free Trial Session
            </h3>
            <p className="text-sm text-dark-800/80 leading-relaxed">
              Our academic counselor will listen to you or your child recite, evaluate current letter recognition and Tajweed proficiency, and recommend the exact course that will yield maximum benefit.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/free-trial"
                className="px-6 py-3 rounded-xl bg-gold-500 text-emerald-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition-colors shadow-md"
              >
                Book Diagnostic Trial Class
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-emerald-900 text-ivory-50 font-bold text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors shadow-md"
              >
                Speak with an Academic Advisor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
