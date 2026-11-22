import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { APPROVED_COURSES, getCourseBySlug } from "@/lib/courses";
import { formatCurrency } from "@/lib/utils";
import {
  CheckCircle2,
  Clock,
  BookOpen,
  Calendar,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  UserCheck,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { QuranVerseBanner, SubtleGeometricPattern } from "@/components/IslamicPattern";

export function generateStaticParams() {
  return APPROVED_COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} — Online Course`,
    description: `${course.description} Monthly Fee: ${formatCurrency(course.monthlyFee)}/month. 1-on-1 personalized lessons with certified teachers.`,
  };
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) {
    notFound();
  }

  const rawWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917505511251";
  const cleanWhatsapp = rawWhatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
    `Assalamu Alaikum, I am interested in enrolling in the ${course.title} course at Suhail Online Quran Academy. Please share the admission details.`
  )}`;

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title={course.title}
        subtitle={course.description}
        arabicTitle={course.titleArabic}
        badge={course.level}
        breadcrumbs={[
          { label: "Courses", href: "/courses" },
          { label: course.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Course In-Depth Details & Curriculum */}
          <div className="lg:col-span-8 space-y-12">
            {/* Featured Image */}
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-emerald-950/10">
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory-50 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block">
                    Curriculum Level
                  </span>
                  <h2 className="font-serif text-2xl font-bold">{course.title}</h2>
                </div>
                {course.titleUrdu && (
                  <span className="font-urdu text-2xl text-gold-300 hidden sm:block" dir="rtl">
                    {course.titleUrdu}
                  </span>
                )}
              </div>
            </div>

            {/* In-depth Introduction */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
                Course Overview & Objectives
              </h2>
              <p className="text-dark-800/85 leading-relaxed text-sm sm:text-base">
                {course.fullDescription}
              </p>
              {course.slug === "aalim-course" && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-600/30 text-xs text-amber-950">
                  <strong>Important Academic Note:</strong> The final syllabus, course duration, prerequisite qualifications, and scholarly certification details for the Aalim Course are subject to personalized assessment and confirmation by the academy administration.
                </div>
              )}
            </section>

            {/* Key Learning Highlights */}
            <section className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-950">
                What You Will Master in This Course
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-ivory-50 border border-emerald-950/10 flex items-start gap-2.5 text-xs sm:text-sm text-dark-800/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Syllabus / Curriculum Modules */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-950">
                  Syllabus Breakdown
                </h3>
                <span className="text-xs text-dark-800/60 font-medium">
                  {course.curriculum.length} Structured Modules
                </span>
              </div>

              <div className="space-y-4">
                {course.curriculum.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-ivory-50 border border-emerald-950/10 hover:border-gold-500/40 shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                        {mod.week}
                      </span>
                      <span className="text-xs text-dark-800/60">Module {idx + 1}</span>
                    </div>
                    <h4 className="font-bold text-emerald-950 text-base mb-3">{mod.title}</h4>
                    <ul className="space-y-1.5 pl-2 border-l-2 border-gold-500/30">
                      {mod.topics.map((t, tidx) => (
                        <li key={tidx} className="text-xs text-dark-800/80">
                          • {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Who Can Enroll */}
            <section className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-950">
                Who Can Enroll?
              </h3>
              <div className="p-6 rounded-3xl bg-ivory-100 border border-emerald-950/10 text-xs sm:text-sm text-dark-800/85 space-y-2">
                <p>• Children aged 4 and above (boys and girls)</p>
                <p>• Beginners of any age who have never read Arabic</p>
                <p>• Adults looking to correct lingering pronunciation errors and learn Tajweed rules</p>
                <p>• Sisters who prefer one-on-one instruction with qualified female teachers</p>
              </div>
            </section>
          </div>

          {/* Right Column: Pricing & Quick Enrollment Sticky Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 rounded-3xl bg-ivory-50 border-2 border-gold-500/40 shadow-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-600 block mb-1">
                  Approved Course Fee
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif font-bold text-emerald-950">
                    {formatCurrency(course.monthlyFee)}
                  </span>
                  <span className="text-sm text-dark-800/70">/ month</span>
                </div>
                {course.originalFee && (
                  <p className="text-xs text-dark-800/60 mt-1">
                    Regular: <span className="line-through">{formatCurrency(course.originalFee)}</span> (Save ₹100 every month)
                  </p>
                )}
              </div>

              <div className="space-y-3 pt-4 border-t border-emerald-950/10 text-xs text-dark-800/80">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold-600" />
                    <span>Duration</span>
                  </span>
                  <span className="font-semibold text-emerald-950">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-gold-600" />
                    <span>Level</span>
                  </span>
                  <span className="font-semibold text-emerald-950">{course.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-gold-600" />
                    <span>Format</span>
                  </span>
                  <span className="font-semibold text-emerald-950">1-on-1 Private Lessons</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-emerald-950/10">
                <Link
                  href={`/admission?course=${course.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-ivory-50 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>

                <Link
                  href={`/free-trial?course=${course.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow transition-all"
                >
                  <span>Book Free Trial Class</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-center text-[11px] text-dark-800/60">
                No long-term contracts • Cancel or pause anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
