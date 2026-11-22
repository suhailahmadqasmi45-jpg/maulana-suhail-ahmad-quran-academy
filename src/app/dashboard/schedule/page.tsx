import React from "react";
import { getServerSession } from "@/lib/auth";
import { Calendar, Video, Clock, CheckCircle2 } from "lucide-react";

export default async function StudentSchedulePage() {
  const session = await getServerSession();
  if (!session) return null;

  const schedules = [
    {
      day: "Monday",
      time: "18:00 - 18:45 IST",
      course: "Noorani Qaida",
      teacher: "Qari Muhammad Abdullah",
      topic: "Lesson 5: Nunation (Tanween) Pronunciation",
      link: "https://meet.google.com/quran-live-demo",
      status: "Upcoming",
    },
    {
      day: "Wednesday",
      time: "18:00 - 18:45 IST",
      course: "Noorani Qaida",
      teacher: "Qari Muhammad Abdullah",
      topic: "Lesson 5: Connecting Tanween with Murakkabat",
      link: "https://meet.google.com/quran-live-demo",
      status: "Upcoming",
    },
    {
      day: "Friday",
      time: "18:00 - 18:45 IST",
      course: "Noorani Qaida",
      teacher: "Qari Muhammad Abdullah",
      topic: "Weekly Review & Tajweed Articulation Test",
      link: "https://meet.google.com/quran-live-demo",
      status: "Upcoming",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in">
      <div>
        <h1 className="font-serif text-3xl font-bold text-emerald-950">My Class Schedule</h1>
        <p className="text-xs sm:text-sm text-dark-800/70 mt-1">
          View your upcoming 1-on-1 class times and connect directly with your instructor.
        </p>
      </div>

      <div className="space-y-4">
        {schedules.map((slot, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold text-emerald-950">{slot.day}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  {slot.time}
                </span>
              </div>
              <p className="text-xs font-semibold text-emerald-900">{slot.course} • Teacher: {slot.teacher}</p>
              <p className="text-xs text-dark-800/75">Planned Topic: {slot.topic}</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={slot.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow hover:from-gold-400 hover:to-gold-300 transition-all"
              >
                <Video className="w-4 h-4" />
                <span>Join Live Class</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-ivory-100 border border-emerald-950/10 text-xs text-dark-800/75 space-y-1">
        <h4 className="font-bold text-emerald-950">Rescheduling Note:</h4>
        <p>
          Need to reschedule a session? Please notify your tutor or the academy coordinator via WhatsApp at least 12 hours prior to class time to arrange a make-up lesson.
        </p>
      </div>
    </div>
  );
}
