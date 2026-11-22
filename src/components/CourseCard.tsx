import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import { CheckCircle2, ArrowRight, BookOpen, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CourseData } from "@/lib/courses";

interface CourseCardProps {
  course: CourseData;
  featured?: boolean;
}

export function CourseCard({ course, featured = false }: CourseCardProps) {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210";
  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    `Assalamu Alaikum, I am interested in enrolling in the ${course.title} course at Maulana Suhail Ahmad Online Quran Academy.`
  )}`;

  return (
    <div
      className={`group relative flex flex-col rounded-3xl bg-ivory-50 border border-emerald-950/10 hover:border-gold-500/50 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden ${
        featured ? "ring-2 ring-gold-500/30" : ""
      }`}
    >
      {/* Course Image Banner */}
      <div className="relative h-52 w-full overflow-hidden bg-emerald-950">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />

        {/* Level badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-900/90 text-ivory-50 border border-gold-500/30 backdrop-blur-sm">
            <BookOpen className="w-3 h-3 text-gold-400" />
            {course.level}
          </span>
        </div>

        {/* Pricing badge */}
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between z-10 text-white">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-gold-300 block font-medium">
              Monthly Fee
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-ivory-50 font-serif">
                {formatCurrency(course.monthlyFee)}
              </span>
              <span className="text-xs text-ivory-200/80">/ month</span>
              {course.originalFee && (
                <span className="text-xs line-through text-ivory-300/60 ml-1">
                  {formatCurrency(course.originalFee)}
                </span>
              )}
            </div>
          </div>
          {course.titleArabic && (
            <span className="font-arabic text-xl text-gold-300/90 hidden sm:block">
              {course.titleArabic}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
              {course.title}
            </h3>
            {course.titleUrdu && (
              <span className="font-urdu text-base text-emerald-700/80" dir="rtl">
                {course.titleUrdu}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-dark-800/80 line-clamp-2 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Duration metadata */}
        <div className="flex items-center gap-2 text-xs text-dark-800/70 py-2 border-y border-emerald-950/5 mb-4">
          <Clock className="w-3.5 h-3.5 text-gold-600" />
          <span>{course.duration}</span>
        </div>

        {/* Highlights */}
        <div className="space-y-2 mb-6 flex-1">
          {course.highlights.slice(0, 4).map((h, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-dark-800/90">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Card Actions: View Details, Enroll Now & Direct WhatsApp */}
        <div className="space-y-2 pt-2 border-t border-emerald-950/10">
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/courses/${course.slug}`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-ivory-100 hover:bg-ivory-200 text-emerald-950 border border-emerald-900/10 hover:border-emerald-900/20 transition-all text-center"
            >
              <span>View Details</span>
              <ArrowRight className="w-3 h-3 text-gold-600" />
            </Link>
            <Link
              href={`/admission?course=${course.slug}`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-ivory-50 shadow hover:shadow-md transition-all text-center"
            >
              <span>Enroll Now</span>
            </Link>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg active:scale-95 uppercase tracking-wider"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
