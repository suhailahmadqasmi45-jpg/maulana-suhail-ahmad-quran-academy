"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { APPROVED_COURSES } from "@/lib/courses";
import { formatCurrency } from "@/lib/utils";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  Phone,
  User,
  Mail,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Link from "next/link";

function AdmissionFormInner() {
  const searchParams = useSearchParams();
  const defaultCourseSlug = searchParams.get("course") || "noorani-qaida";

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{
    reference: string;
    message: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    studentName: "",
    mobile: "",
    email: "",
    courseSlug: defaultCourseSlug,
    message: "",
  });

  const selectedCourse =
    APPROVED_COURSES.find((c) => c.slug === formData.courseSlug) || APPROVED_COURSES[0];

  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917505511251";
  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    `Assalamu Alaikum, I would like to apply for the ${selectedCourse.title} course at Suhail Online Quran Academy.`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          courseName: selectedCourse.title,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit application");
      }

      setSuccessData({
        reference: data.applicationRef,
        message: data.message,
      });
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (successData) {
    return (
      <div className="p-6 sm:p-8 rounded-3xl bg-ivory-50 border border-emerald-900/20 shadow-xl text-center space-y-5 animate-in fade-in zoom-in-95 max-w-lg mx-auto">
        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-1.5">
          <h2 className="font-serif text-2xl font-bold text-emerald-950">
            Admission Submitted Successfully
          </h2>
          <p className="text-xs sm:text-sm text-dark-800/80 leading-relaxed">
            {successData.message}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-950 text-ivory-50 max-w-xs mx-auto">
          <span className="text-[10px] text-gold-400 uppercase tracking-widest block font-medium">
            Application Reference
          </span>
          <p className="font-mono text-xl font-bold tracking-wider mt-0.5 text-white">
            {successData.reference}
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-colors shadow"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Connect on WhatsApp</span>
          </a>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-900 text-ivory-50 font-bold text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors shadow"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-1 sm:px-0">
      <form
        onSubmit={handleSubmit}
        className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-ivory-50 border border-emerald-950/15 shadow-xl space-y-4"
      >
        {/* Selected Course Header Banner */}
        <div className="p-4 rounded-2xl bg-emerald-950 text-ivory-50 flex items-center justify-between border border-gold-500/20">
          <div>
            <span className="text-[10px] text-gold-400 uppercase tracking-wider font-semibold block">
              Selected Course
            </span>
            <p className="text-base font-serif font-bold text-white">{selectedCourse.title}</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-gold-300 font-serif">
              {formatCurrency(selectedCourse.monthlyFee)}
            </span>
            <span className="text-[11px] text-ivory-200/70 block">/ month</span>
          </div>
        </div>

        {errorMessage && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* 1. Full Name */}
        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-gold-600" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            required
            value={formData.studentName}
            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
            placeholder="Enter full name"
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>

        {/* 2. Call Number */}
        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-gold-600" />
            <span>Call Number *</span>
          </label>
          <input
            type="tel"
            required
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            placeholder="Enter your phone / call number"
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>

        {/* 3. Email (Optional) */}
        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-gold-600" />
            <span>Email Address</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter email address (optional)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>

        {/* 4. Select Course */}
        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-gold-600" />
            <span>Select Course *</span>
          </label>
          <select
            value={formData.courseSlug}
            onChange={(e) => setFormData({ ...formData, courseSlug: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs font-medium text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          >
            {APPROVED_COURSES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title} — ₹{c.monthlyFee}/month
              </option>
            ))}
          </select>
        </div>

        {/* 5. Write Your Message */}
        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
            <span>Write Your Message</span>
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Write your message here..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50 leading-relaxed"
          />
        </div>

        {/* Action Buttons: Submit & WhatsApp */}
        <div className="space-y-2 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-ivory-50 font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Apply for Admission</span>
              </>
            )}
          </button>

          {/* Prominent WhatsApp Option */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp for Instant Admission</span>
          </a>
        </div>
      </form>
    </div>
  );
}

export default function AdmissionPage() {
  return (
    <div className="space-y-8 pb-20">
      <PageHeader
        title="Online Admission"
        subtitle="Submit your application to enroll in online Quran classes."
        arabicTitle="طلب الالتحاق"
        breadcrumbs={[{ label: "Admission" }]}
      />

      <div className="px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="p-10 text-center text-xs text-dark-800/60 flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin text-emerald-900" />
              <span>Loading form...</span>
            </div>
          }
        >
          <AdmissionFormInner />
        </Suspense>
      </div>
    </div>
  );
}
