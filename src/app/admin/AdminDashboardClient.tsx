"use client";

import React, { useState } from "react";
import { formatCurrency, formatDate } from "@/lib/utils";
import {
  Users,
  FileCheck,
  Calendar,
  CreditCard,
  Settings as SettingsIcon,
  MessageSquare,
  CheckCircle2,
  Clock,
  AlertCircle,
  Save,
  Loader2,
  Edit3,
  ExternalLink,
  ChevronRight,
  Shield,
  Phone,
} from "lucide-react";

interface Props {
  initialCourses: any[];
  initialAdmissions: any[];
  initialTrials: any[];
  initialInquiries: any[];
  initialSettings: any[];
  stats: {
    totalAdmissions: number;
    pendingTrials: number;
    totalStudents: number;
    totalRevenue: number;
  };
}

export function AdminDashboardClient({
  initialCourses,
  initialAdmissions,
  initialTrials,
  initialInquiries,
  initialSettings,
  stats,
}: Props) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "admissions" | "trials" | "pricing" | "inquiries" | "settings"
  >("overview");

  const [courses, setCourses] = useState(initialCourses);
  const [admissions, setAdmissions] = useState(initialAdmissions);
  const [trials, setTrials] = useState(initialTrials);
  const [settings, setSettings] = useState(initialSettings);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Edit Course Pricing Form state
  const [editingCourse, setEditingCourse] = useState<any | null>(null);

  const handleUpdateCoursePrice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCourse) return;
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/admin/update-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: editingCourse.slug,
          monthlyFee: Number(editingCourse.monthlyFee),
          originalFee: Number(editingCourse.originalFee),
          description: editingCourse.description,
          level: editingCourse.level,
          duration: editingCourse.duration,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to update course");
      }

      setCourses(
        courses.map((c) => (c.slug === editingCourse.slug ? data.course : c))
      );
      setMessage(`Successfully updated pricing for ${editingCourse.title}!`);
      setEditingCourse(null);
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateAdmissionStatus = async (
    id: string,
    status: string,
    adminNotes?: string
  ) => {
    try {
      const res = await fetch("/api/admin/update-admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status, adminNotes }),
      });
      const data = await res.json();
      if (data.success) {
        setAdmissions(
          admissions.map((a) => (a.id === id ? { ...a, status, adminNotes } : a))
        );
        setMessage("Admission application updated successfully.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateTrialStatus = async (
    id: string,
    status: string,
    meetingLink?: string
  ) => {
    try {
      const res = await fetch("/api/admin/update-trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status, meetingLink }),
      });
      const data = await res.json();
      if (data.success) {
        setTrials(
          trials.map((t) => (t.id === id ? { ...t, status, meetingLink } : t))
        );
        setMessage("Trial booking updated successfully.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveSetting = async (key: string, value: string) => {
    try {
      const res = await fetch("/api/admin/update-setting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage(`Setting ${key} updated successfully.`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-950/10 pb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold-600 block">
            Administrative Control Panel
          </span>
          <h1 className="font-serif text-3xl font-bold text-emerald-950 mt-1">
            Academy Management System
          </h1>
          <p className="text-xs text-dark-800/70">
            Real-time management for admissions, trial requests, and centralized course pricing.
          </p>
        </div>

        {message && (
          <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
            <span>{message}</span>
          </div>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-ivory-50 border border-emerald-950/10 text-xs font-semibold">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2.5 rounded-xl transition-all ${
            activeTab === "overview"
              ? "bg-emerald-900 text-ivory-50 shadow-sm"
              : "text-dark-800 hover:bg-ivory-200"
          }`}
        >
          Overview & Metrics
        </button>

        <button
          onClick={() => setActiveTab("admissions")}
          className={`px-4 py-2.5 rounded-xl transition-all ${
            activeTab === "admissions"
              ? "bg-emerald-900 text-ivory-50 shadow-sm"
              : "text-dark-800 hover:bg-ivory-200"
          }`}
        >
          Admissions ({admissions.length})
        </button>

        <button
          onClick={() => setActiveTab("trials")}
          className={`px-4 py-2.5 rounded-xl transition-all ${
            activeTab === "trials"
              ? "bg-emerald-900 text-ivory-50 shadow-sm"
              : "text-dark-800 hover:bg-ivory-200"
          }`}
        >
          Free Trial Requests ({trials.length})
        </button>

        <button
          onClick={() => setActiveTab("pricing")}
          className={`px-4 py-2.5 rounded-xl transition-all ${
            activeTab === "pricing"
              ? "bg-emerald-900 text-ivory-50 shadow-sm"
              : "text-dark-800 hover:bg-ivory-200"
          }`}
        >
          Course Pricing & Details
        </button>

        <button
          onClick={() => setActiveTab("inquiries")}
          className={`px-4 py-2.5 rounded-xl transition-all ${
            activeTab === "inquiries"
              ? "bg-emerald-900 text-ivory-50 shadow-sm"
              : "text-dark-800 hover:bg-ivory-200"
          }`}
        >
          Contact Inquiries ({initialInquiries.length})
        </button>

        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2.5 rounded-xl transition-all ${
            activeTab === "settings"
              ? "bg-emerald-900 text-ivory-50 shadow-sm"
              : "text-dark-800 hover:bg-ivory-200"
          }`}
        >
          Website Settings
        </button>
      </div>

      {/* ========================================================
          TAB 1: OVERVIEW & STATS
      ======================================================== */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm">
              <span className="text-xs text-dark-800/70 block">Total Admission Requests</span>
              <span className="font-serif text-3xl font-bold text-emerald-950 mt-1 block">
                {stats.totalAdmissions}
              </span>
              <span className="text-[11px] text-emerald-800 font-medium">From global applicants</span>
            </div>

            <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm">
              <span className="text-xs text-dark-800/70 block">Pending Trial Bookings</span>
              <span className="font-serif text-3xl font-bold text-gold-600 mt-1 block">
                {stats.pendingTrials}
              </span>
              <span className="text-[11px] text-dark-800/60 font-medium">Awaiting tutor matching</span>
            </div>

            <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm">
              <span className="text-xs text-dark-800/70 block">Active Enrolled Students</span>
              <span className="font-serif text-3xl font-bold text-emerald-950 mt-1 block">
                {stats.totalStudents}
              </span>
              <span className="text-[11px] text-emerald-700 font-medium">Attending weekly classes</span>
            </div>

            <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm">
              <span className="text-xs text-dark-800/70 block">Tuition Collections</span>
              <span className="font-serif text-3xl font-bold text-emerald-950 mt-1 block">
                {formatCurrency(stats.totalRevenue)}
              </span>
              <span className="text-[11px] text-dark-800/60 font-medium">Processed course fees</span>
            </div>
          </div>

          {/* Quick Course Pricing Overview Card */}
          <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-950/10 pb-3">
              <h3 className="font-serif text-lg font-bold text-emerald-950">
                Official Approved Course Pricing
              </h3>
              <button
                onClick={() => setActiveTab("pricing")}
                className="text-xs font-bold text-emerald-900 hover:text-emerald-700 underline"
              >
                Modify Prices →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {courses.map((course) => (
                <div
                  key={course.slug}
                  className="p-4 rounded-2xl bg-ivory-100 border border-emerald-950/10 text-xs"
                >
                  <span className="font-bold text-emerald-950 block text-sm">{course.title}</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-xl font-bold text-emerald-900 font-serif">
                      {formatCurrency(course.monthlyFee)}
                    </span>
                    <span className="text-dark-800/60">/mo</span>
                  </div>
                  {course.originalFee && (
                    <span className="text-[10px] text-dark-800/60 block line-through mt-0.5">
                      Regular: {formatCurrency(course.originalFee)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: ADMISSIONS MANAGEMENT
      ======================================================== */}
      {activeTab === "admissions" && (
        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-emerald-950">
              Online Admission Applications ({admissions.length})
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-emerald-950/10 text-dark-800/60 uppercase">
                  <th className="py-3 px-4">Ref Code</th>
                  <th className="py-3 px-4">Student & Age</th>
                  <th className="py-3 px-4">Course</th>
                  <th className="py-3 px-4">Country & Phone</th>
                  <th className="py-3 px-4">Preferred Timing</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-950/5">
                {admissions.map((adm) => (
                  <tr key={adm.id} className="hover:bg-ivory-100/50">
                    <td className="py-3 px-4 font-mono font-bold text-emerald-950">
                      {adm.applicationRef}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-emerald-950 block">{adm.studentName}</span>
                      <span className="text-dark-800/60">
                        Age: {adm.age} {adm.parentName ? `• Parent: ${adm.parentName}` : ""}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-emerald-900">
                      {adm.courseName}
                    </td>
                    <td className="py-3 px-4">
                      <span className="block font-medium">{adm.country}</span>
                      <span className="text-dark-800/60">{adm.whatsapp}</span>
                    </td>
                    <td className="py-3 px-4 text-dark-800/75">
                      {adm.preferredTiming}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          adm.status === "APPROVED"
                            ? "bg-emerald-100 text-emerald-800"
                            : adm.status === "ENROLLED"
                            ? "bg-gold-500/30 text-emerald-950"
                            : adm.status === "REJECTED"
                            ? "bg-red-100 text-red-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {adm.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleUpdateAdmissionStatus(adm.id, "APPROVED")}
                          className="px-2 py-1 rounded bg-emerald-900 text-ivory-50 text-[10px] font-bold hover:bg-emerald-800"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleUpdateAdmissionStatus(adm.id, "ENROLLED")}
                          className="px-2 py-1 rounded bg-gold-500 text-emerald-950 text-[10px] font-bold hover:bg-gold-400"
                        >
                          Enroll
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 3: TRIAL BOOKINGS MANAGEMENT
      ======================================================== */}
      {activeTab === "trials" && (
        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-emerald-950">
              Free Trial Booking Requests ({trials.length})
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-emerald-950/10 text-dark-800/60 uppercase">
                  <th className="py-3 px-4">Ref Code</th>
                  <th className="py-3 px-4">Name & Contact</th>
                  <th className="py-3 px-4">Course</th>
                  <th className="py-3 px-4">Requested Slot</th>
                  <th className="py-3 px-4">Meeting Link</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-950/5">
                {trials.map((tr) => (
                  <tr key={tr.id} className="hover:bg-ivory-100/50">
                    <td className="py-3 px-4 font-mono font-bold text-emerald-950">
                      {tr.reference}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-emerald-950 block">{tr.name}</span>
                      <span className="text-dark-800/60">{tr.phone} • {tr.country}</span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-emerald-900">
                      {tr.courseName}
                    </td>
                    <td className="py-3 px-4 text-dark-800/75">
                      {tr.preferredDate} at {tr.preferredTime}
                    </td>
                    <td className="py-3 px-4">
                      {tr.meetingLink ? (
                        <a
                          href={tr.meetingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-900 underline font-medium truncate block max-w-xs"
                        >
                          {tr.meetingLink}
                        </a>
                      ) : (
                        <span className="text-dark-800/40 italic">Not set</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          tr.status === "APPROVED"
                            ? "bg-emerald-100 text-emerald-800"
                            : tr.status === "RESCHEDULED"
                            ? "bg-amber-100 text-amber-800"
                            : tr.status === "REJECTED"
                            ? "bg-red-100 text-red-800"
                            : "bg-ivory-200 text-dark-800"
                        }`}
                      >
                        {tr.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() =>
                            handleUpdateTrialStatus(
                              tr.id,
                              "APPROVED",
                              tr.meetingLink || "https://meet.google.com/quran-live-demo"
                            )
                          }
                          className="px-2 py-1 rounded bg-emerald-900 text-ivory-50 text-[10px] font-bold hover:bg-emerald-800"
                        >
                          Approve Slot
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 4: COURSE PRICING & DETAILS MANAGEMENT
      ======================================================== */}
      {activeTab === "pricing" && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-emerald-950">
                Course Pricing & Content Manager
              </h3>
              <p className="text-xs text-dark-800/70 mt-1">
                Update course monthly fees, regular prices, and descriptions. Changes are saved in the database and immediately update all website pages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div
                  key={course.slug}
                  className="p-6 rounded-2xl bg-ivory-100 border border-emerald-950/10 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-emerald-950">{course.title}</h4>
                      <span className="text-xs text-dark-800/60">{course.level}</span>
                    </div>

                    <p className="text-xs text-dark-800/80 leading-relaxed">{course.description}</p>

                    <div className="py-3 border-y border-emerald-950/10 flex items-baseline gap-3">
                      <div>
                        <span className="text-[10px] uppercase text-dark-800/60 block">Monthly Fee</span>
                        <span className="text-2xl font-serif font-bold text-emerald-900">
                          {formatCurrency(course.monthlyFee)}
                        </span>
                      </div>
                      {course.originalFee && (
                        <div>
                          <span className="text-[10px] uppercase text-dark-800/60 block">Reference Fee</span>
                          <span className="text-sm line-through text-dark-800/60">
                            {formatCurrency(course.originalFee)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setEditingCourse({ ...course })}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-ivory-50 text-xs font-bold transition-all"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit Price & Information</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal / Form when editing a course */}
          {editingCourse && (
            <div className="p-8 rounded-3xl bg-ivory-50 border-2 border-gold-500/40 shadow-2xl space-y-5 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-emerald-950/10 pb-3">
                <h4 className="font-serif text-lg font-bold text-emerald-950">
                  Editing: {editingCourse.title}
                </h4>
                <button
                  onClick={() => setEditingCourse(null)}
                  className="text-xs font-semibold text-dark-800/60 hover:text-black"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleUpdateCoursePrice} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-950 mb-1">
                      Monthly Fee (INR) *
                    </label>
                    <input
                      type="number"
                      required
                      value={editingCourse.monthlyFee}
                      onChange={(e) =>
                        setEditingCourse({
                          ...editingCourse,
                          monthlyFee: Number(e.target.value),
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs font-bold text-emerald-950"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-950 mb-1">
                      Original / Regular Fee (INR)
                    </label>
                    <input
                      type="number"
                      value={editingCourse.originalFee || ""}
                      onChange={(e) =>
                        setEditingCourse({
                          ...editingCourse,
                          originalFee: Number(e.target.value),
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-emerald-950 mb-1">
                      Short Description
                    </label>
                    <textarea
                      rows={2}
                      value={editingCourse.description}
                      onChange={(e) =>
                        setEditingCourse({
                          ...editingCourse,
                          description: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-950 mb-1">
                      Level
                    </label>
                    <input
                      type="text"
                      value={editingCourse.level}
                      onChange={(e) =>
                        setEditingCourse({
                          ...editingCourse,
                          level: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-950 mb-1">
                      Duration
                    </label>
                    <input
                      type="text"
                      value={editingCourse.duration}
                      onChange={(e) =>
                        setEditingCourse({
                          ...editingCourse,
                          duration: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setEditingCourse(null)}
                    className="px-4 py-2 rounded-xl bg-ivory-200 text-xs font-bold text-dark-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-1.5 px-6 py-2 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-ivory-50 text-xs font-bold shadow"
                  >
                    {saving ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Save className="w-3.5 h-3.5" />
                    )}
                    <span>Save Course Changes</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          TAB 5: CONTACT INQUIRIES
      ======================================================== */}
      {activeTab === "inquiries" && (
        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-emerald-950">
              Contact Form Inquiries ({initialInquiries.length})
            </h3>
          </div>

          <div className="space-y-4">
            {initialInquiries.map((inq) => (
              <div
                key={inq.id}
                className="p-5 rounded-2xl bg-ivory-100 border border-emerald-950/10 space-y-2 text-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-emerald-950/10 pb-2">
                  <div>
                    <span className="font-bold text-emerald-950 text-sm">{inq.name}</span>
                    <span className="text-dark-800/60 ml-2">
                      ({inq.email} • {inq.phone})
                    </span>
                  </div>
                  <span className="text-[10px] text-dark-800/50">
                    {formatDate(inq.createdAt)}
                  </span>
                </div>
                <p className="font-semibold text-emerald-900">Subject: {inq.subject}</p>
                <p className="text-dark-800/80 leading-relaxed">{inq.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 6: WEBSITE SETTINGS
      ======================================================== */}
      {activeTab === "settings" && (
        <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm space-y-6">
          <div>
            <h3 className="font-serif text-xl font-bold text-emerald-950">
              Academy Contact & Platform Settings
            </h3>
            <p className="text-xs text-dark-800/70 mt-1">
              Configure WhatsApp phone numbers, email addresses, and general academy metadata.
            </p>
          </div>

          <div className="space-y-4 max-w-2xl">
            {settings.map((s) => (
              <div key={s.key} className="space-y-1">
                <label className="block text-xs font-bold text-emerald-950">
                  {s.description || s.key}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    defaultValue={s.value}
                    id={`setting-${s.key}`}
                    className="flex-1 px-3.5 py-2 rounded-xl border border-emerald-950/20 bg-white text-xs"
                  />
                  <button
                    onClick={() => {
                      const input = document.getElementById(
                        `setting-${s.key}`
                      ) as HTMLInputElement;
                      if (input) handleSaveSetting(s.key, input.value);
                    }}
                    className="px-4 py-2 rounded-xl bg-emerald-900 text-ivory-50 text-xs font-bold hover:bg-emerald-800"
                  >
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
