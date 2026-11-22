"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { APPROVED_COURSES } from "@/lib/courses";
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

function FreeTrialFormInner() {
  const searchParams = useSearchParams();
  const defaultCourse = searchParams.get("course") || "noorani-qaida";

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{
    reference: string;
    message: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseSlug: defaultCourse,
    country: "India",
    preferredDate: "",
    preferredTime: "18:00",
    preferredLanguage: "English",
    notes: "",
  });

  const selectedCourse =
    APPROVED_COURSES.find((c) => c.slug === formData.courseSlug) || APPROVED_COURSES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          courseName: selectedCourse.title,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit trial booking");
      }

      setSuccessData({
        reference: data.reference,
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
      <div className="p-8 sm:p-12 rounded-3xl bg-ivory-50 border-2 border-emerald-900/20 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block">
            Trial Request Received
          </span>
          <h2 className="font-serif text-3xl font-bold text-emerald-950">
            Trial Class Request Submitted
          </h2>
          <p className="text-sm text-dark-800/80 max-w-lg mx-auto leading-relaxed">
            {successData.message}
          </p>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-600/30 text-xs text-amber-950 max-w-md mx-auto mt-2">
            <strong>Please Note:</strong> All trial slots are subject to academy tutor matching and confirmation. Our coordinator will contact you via WhatsApp or Email with the final meeting connection link.
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-950 text-ivory-50 max-w-xs mx-auto">
          <span className="text-xs text-gold-400 uppercase tracking-widest block">
            Booking Reference
          </span>
          <p className="font-mono text-xl font-bold tracking-wider mt-1 text-white">
            {successData.reference}
          </p>
        </div>

        <div className="flex justify-center gap-4 pt-2">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-emerald-900 text-ivory-50 font-bold text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors shadow"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-12 rounded-3xl bg-ivory-50 border border-emerald-950/15 shadow-xl space-y-6"
    >
      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Yusuf Patel"
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. yusuf@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1">
            Contact Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 75055 11251"
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1">
            Country of Residence *
          </label>
          <input
            type="text"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. India"
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1">
            Select Desired Course *
          </label>
          <select
            value={formData.courseSlug}
            onChange={(e) => setFormData({ ...formData, courseSlug: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          >
            {APPROVED_COURSES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1">
            Preferred Language *
          </label>
          <select
            value={formData.preferredLanguage}
            onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
            <option value="Hindi">Hindi</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1">
            Preferred Date *
          </label>
          <input
            type="date"
            required
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-950 mb-1">
            Preferred Time Slot *
          </label>
          <input
            type="time"
            required
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-emerald-950 mb-1">
            Notes (Student Age, Learning Goals, Female Teacher Preference)
          </label>
          <textarea
            rows={2}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Tell us about the student's age, background, or tutor preference..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 hover:from-gold-400 hover:to-gold-200 text-emerald-950 font-bold text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Submitting Trial Request...</span>
          </>
        ) : (
          <>
            <Calendar className="w-4 h-4" />
            <span>Request Free Trial Class</span>
          </>
        )}
      </button>
    </form>
  );
}

export default function FreeTrialPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Book a Free Trial Class"
        subtitle="Experience our 1-on-1 teaching methodology firsthand. 100% free with certified instructors."
        arabicTitle="احجز درساً تجريبياً مجانياً"
        badge="Zero Risk • No Payment Required"
        breadcrumbs={[{ label: "Free Trial" }]}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="p-12 text-center text-xs text-dark-800/60 flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin text-emerald-900" />
              <span>Loading trial booking portal...</span>
            </div>
          }
        >
          <FreeTrialFormInner />
        </Suspense>
      </div>
    </div>
  );
}
