import React from "react";
import Link from "next/link";
import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { formatCurrency } from "@/lib/utils";
import {
  BookOpen,
  Calendar,
  Award,
  Video,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default async function StudentDashboardPage() {
  const session = await getServerSession();
  if (!session) return null;

  // Fetch student info
  const student = await prisma.student.findUnique({
    where: { userId: session.userId },
    include: {
      enrollments: {
        include: {
          course: true,
          schedules: true,
        },
      },
      progressRecords: {
        orderBy: { date: "desc" },
        take: 3,
      },
    },
  });

  // Recent payments
  const payments = await prisma.paymentRecord.findMany({
    where: { studentEmail: session.email },
    orderBy: { paymentDate: "desc" },
    take: 2,
  });

  const activeEnrollment = student?.enrollments[0];
  const upcomingSchedule = activeEnrollment?.schedules[0];

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* Welcome Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-ivory-50 shadow-xl border border-gold-500/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Assalamu Alaikum
          </span>
          <h1 className="font-serif text-3xl font-bold text-white">
            Welcome, {session.name}
          </h1>
          <p className="text-xs sm:text-sm text-ivory-200/80">
            {activeEnrollment
              ? `Currently studying ${activeEnrollment.course.title} • 1-on-1 Mentorship`
              : "Welcome to your student portal. Your course advisor is preparing your schedule."}
          </p>
        </div>

        {upcomingSchedule?.meetingLink && (
          <a
            href={upcomingSchedule.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            <Video className="w-4 h-4" />
            <span>Join Live Class</span>
          </a>
        )}
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center mb-3">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-xs text-dark-800/70 block">Enrolled Course</span>
          <h3 className="font-bold text-base text-emerald-950 mt-0.5">
            {activeEnrollment?.course.title || "Noorani Qaida"}
          </h3>
          <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
            Status: Active
          </span>
        </div>

        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center mb-3">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-xs text-dark-800/70 block">Next Scheduled Class</span>
          <h3 className="font-bold text-base text-emerald-950 mt-0.5">
            {upcomingSchedule
              ? `${upcomingSchedule.dayOfWeek} ${upcomingSchedule.startTime}`
              : "Mon, Wed, Fri 18:00 IST"}
          </h3>
          <p className="text-[11px] text-dark-800/60 mt-2">
            Teacher: {upcomingSchedule?.teacherName || "Qari Muhammad Abdullah"}
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center mb-3">
            <Award className="w-5 h-5 text-gold-600" />
          </div>
          <span className="text-xs text-dark-800/70 block">Latest Tajweed Score</span>
          <h3 className="font-bold text-base text-emerald-950 mt-0.5">
            {student?.progressRecords[0]?.tajweedScore
              ? `${student.progressRecords[0].tajweedScore}% (Distinction)`
              : "92% (Lesson 5)"}
          </h3>
          <p className="text-[11px] text-emerald-700 font-medium mt-2">
            Fluency on track
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center mb-3">
            <ShieldCheck className="w-5 h-5 text-emerald-800" />
          </div>
          <span className="text-xs text-dark-800/70 block">Monthly Tuition Fee</span>
          <h3 className="font-bold text-base text-emerald-950 mt-0.5">
            {formatCurrency(activeEnrollment?.course.monthlyFee || 1399)}
          </h3>
          <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
            Status: Paid for Current Month
          </span>
        </div>
      </div>

      {/* Two-Column Section: Schedule & Recent Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Schedule */}
        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-950/10 pb-3">
            <h3 className="font-serif text-lg font-bold text-emerald-950 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-900" />
              <span>Weekly Class Schedule</span>
            </h3>
            <Link
              href="/dashboard/schedule"
              className="text-xs font-semibold text-emerald-900 hover:text-emerald-700 underline"
            >
              Full Schedule →
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { day: "Monday", time: "18:00 - 18:45 IST", status: "Upcoming", subject: "Noorani Qaida Lesson 5" },
              { day: "Wednesday", time: "18:00 - 18:45 IST", status: "Upcoming", subject: "Noorani Qaida Lesson 5" },
              { day: "Friday", time: "18:00 - 18:45 IST", status: "Upcoming", subject: "Review & Oral Assessment" },
            ].map((slot, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-ivory-100 border border-emerald-950/10 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-emerald-950 block">{slot.day}</span>
                  <span className="text-[11px] text-dark-800/70">{slot.time}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-emerald-800 block">
                    {slot.subject}
                  </span>
                  <span className="text-[10px] text-gold-600 font-bold uppercase">
                    {slot.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Teacher Notes & Progress */}
        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-950/10 pb-3">
            <h3 className="font-serif text-lg font-bold text-emerald-950 flex items-center gap-2">
              <Award className="w-5 h-5 text-gold-600" />
              <span>Recent Teacher Evaluations</span>
            </h3>
            <Link
              href="/dashboard/progress"
              className="text-xs font-semibold text-emerald-900 hover:text-emerald-700 underline"
            >
              View Progress Log →
            </Link>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-ivory-100 border border-emerald-950/10 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-950">Lesson 5: Tanween & Nunation</span>
                <span className="font-semibold text-emerald-800">Score: 92/100</span>
              </div>
              <p className="text-dark-800/80 italic leading-relaxed">
                “MashaAllah, demonstrated sharp distinction between Zabar and Tanween sounds. Keep practicing the letter Qaf for the next lesson.”
              </p>
              <span className="text-[10px] text-dark-800/50 block">Teacher: Qari Muhammad Abdullah</span>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-100 border border-emerald-950/10 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-950">Lesson 4: Harakat (Short Vowels)</span>
                <span className="font-semibold text-emerald-800">Score: 95/100</span>
              </div>
              <p className="text-dark-800/80 italic leading-relaxed">
                “Excellent fluency. Very clear vocalization without lengthening short vowels.”
              </p>
              <span className="text-[10px] text-dark-800/50 block">Teacher: Qari Muhammad Abdullah</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
