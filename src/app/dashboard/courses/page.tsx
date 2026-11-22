import React from "react";
import Link from "next/link";
import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { APPROVED_COURSES } from "@/lib/courses";
import { formatCurrency } from "@/lib/utils";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export default async function StudentCoursesPage() {
  const session = await getServerSession();
  if (!session) return null;

  return (
    <div className="space-y-8 animate-in fade-in">
      <div>
        <h1 className="font-serif text-3xl font-bold text-emerald-950">My Enrolled Courses</h1>
        <p className="text-xs sm:text-sm text-dark-800/70 mt-1">
          Review your current syllabus milestone and accessible learning resources.
        </p>
      </div>

      <div className="space-y-6">
        {/* Active Enrolled Course */}
        <div className="p-8 rounded-3xl bg-ivory-50 border-2 border-emerald-950/20 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-950/10 pb-4">
            <div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                Active Enrollment
              </span>
              <h2 className="font-serif text-2xl font-bold text-emerald-950 mt-2">
                Noorani Qaida Course
              </h2>
              <p className="text-xs text-dark-800/70">Assigned Teacher: Qari Muhammad Abdullah</p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-2xl font-serif font-bold text-emerald-900">
                {formatCurrency(1399)}
              </span>
              <span className="text-xs text-dark-800/70 block">/ month</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm text-emerald-950">Curriculum Progress</h3>
            <div className="w-full bg-ivory-200 h-2.5 rounded-full overflow-hidden">
              <div className="bg-emerald-800 h-full w-[45%] rounded-full" />
            </div>
            <div className="flex justify-between text-xs text-dark-800/70">
              <span>Current: Lesson 5 (Tanween & Nunation)</span>
              <span>Overall: 45% Completed</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-dark-800/80 pt-2">
            <div className="p-3.5 rounded-xl bg-ivory-100 border border-emerald-950/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Digital Noorani Qaida PDF Available</span>
            </div>
            <div className="p-3.5 rounded-xl bg-ivory-100 border border-emerald-950/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Makharij Articulation Exercises Logged</span>
            </div>
          </div>
        </div>

        {/* Explore Other Courses */}
        <div className="p-6 rounded-3xl bg-ivory-100 border border-emerald-950/10">
          <h3 className="font-serif text-lg font-bold text-emerald-950 mb-2">
            Want to Enroll in an Additional Program?
          </h3>
          <p className="text-xs text-dark-800/80 mb-4">
            Students can study Quran Kareem Nazra or Hifz simultaneously with personalized dual-course scheduling.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {APPROVED_COURSES.filter((c) => c.slug !== "noorani-qaida").map((c) => (
              <div
                key={c.slug}
                className="p-4 rounded-2xl bg-ivory-50 border border-emerald-950/10 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-emerald-950">{c.title}</h4>
                  <span className="text-xs font-semibold text-emerald-800 block mt-1">
                    {formatCurrency(c.monthlyFee)}/mo
                  </span>
                </div>
                <Link
                  href={`/admission?course=${c.slug}`}
                  className="mt-3 text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1 underline"
                >
                  <span>Apply to Add Course</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
