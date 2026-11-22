import React from "react";
import { getServerSession } from "@/lib/auth";
import { Award, CheckCircle2, TrendingUp } from "lucide-react";

export default async function StudentProgressPage() {
  const session = await getServerSession();
  if (!session) return null;

  const records = [
    {
      date: "Nov 18, 2026",
      lesson: "Lesson 5: Tanween (Double Vowels - Do Zabar, Do Zair, Do Pesh)",
      tajweedScore: 92,
      memorizationScore: 88,
      notes: "MashaAllah, demonstrated sharp distinction between Zabar and Tanween sounds. Keep practicing the letter Qaf.",
      teacher: "Qari Muhammad Abdullah",
    },
    {
      date: "Nov 14, 2026",
      lesson: "Lesson 4: Harakat (Short Vowels)",
      tajweedScore: 95,
      memorizationScore: 90,
      notes: "Excellent fluency. Very clear vocalization without lengthening short vowels.",
      teacher: "Qari Muhammad Abdullah",
    },
    {
      date: "Nov 10, 2026",
      lesson: "Lesson 3: Compound Letters & Joining (Murakkabat)",
      tajweedScore: 90,
      memorizationScore: 85,
      notes: "Successfully identified connected letter shapes at the beginning and middle of words.",
      teacher: "Qari Muhammad Abdullah",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in">
      <div>
        <h1 className="font-serif text-3xl font-bold text-emerald-950">Learning Progress Log</h1>
        <p className="text-xs sm:text-sm text-dark-800/70 mt-1">
          Detailed oral recitation evaluation, Tajweed benchmarks, and teacher feedback.
        </p>
      </div>

      {/* Benchmark Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm text-center">
          <span className="text-xs text-dark-800/70 block">Average Tajweed Accuracy</span>
          <span className="font-serif text-3xl font-bold text-emerald-950 mt-1 block">92.3%</span>
          <span className="text-[11px] text-emerald-700 font-semibold">Exemplary Grade</span>
        </div>

        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm text-center">
          <span className="text-xs text-dark-800/70 block">Completed Lessons</span>
          <span className="font-serif text-3xl font-bold text-emerald-950 mt-1 block">5 / 12</span>
          <span className="text-[11px] text-dark-800/60 font-semibold">Noorani Qaida Modules</span>
        </div>

        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm text-center">
          <span className="text-xs text-dark-800/70 block">Attendance Rate</span>
          <span className="font-serif text-3xl font-bold text-emerald-950 mt-1 block">100%</span>
          <span className="text-[11px] text-emerald-700 font-semibold">Perfect Record</span>
        </div>
      </div>

      {/* Progress Cards */}
      <div className="space-y-4">
        <h3 className="font-serif text-lg font-bold text-emerald-950">Past Lesson Assessments</h3>
        {records.map((r, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-950/10 pb-3">
              <div>
                <span className="text-[10px] text-dark-800/60 uppercase tracking-widest">{r.date}</span>
                <h4 className="font-bold text-sm sm:text-base text-emerald-950 mt-0.5">{r.lesson}</h4>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  Tajweed: {r.tajweedScore}/100
                </span>
                <span className="px-2.5 py-1 rounded-full bg-gold-500/20 text-emerald-950 text-xs font-bold">
                  Retention: {r.memorizationScore}/100
                </span>
              </div>
            </div>

            <p className="text-xs text-dark-800/80 italic leading-relaxed">
              Teacher Feedback: “{r.notes}”
            </p>
            <span className="text-[11px] text-dark-800/50 block">Evaluated by: {r.teacher}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
