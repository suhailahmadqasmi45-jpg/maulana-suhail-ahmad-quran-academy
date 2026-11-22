"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { APPROVED_COURSES } from "@/lib/courses";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    courseInterest: "noorani-qaida",
    message: "",
  });

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@maulanasuhailquranacademy.com";
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98765 43210";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit message");
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Contact Our Academy Desk"
        subtitle="Have questions about courses, class timing, or tutor allocation? Reach out to our admissions team directly."
        arabicTitle="اتصل بنا وتواصل مع إدارة الأكاديمية"
        badge="24/7 Support Desk"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                Direct Contact
              </span>
              <h2 className="font-serif text-3xl font-bold text-emerald-950">
                We Are Here to Assist Your Learning
              </h2>
              <p className="text-sm text-dark-800/80 leading-relaxed">
                Whether you wish to discuss your child’s educational background, schedule an assessment, or inquire about fee arrangements, our coordinators are ready to assist.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-ivory-50 border border-emerald-950/10 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-emerald-950">Email Support</h4>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-xs text-dark-800/80 hover:text-emerald-900 underline block mt-0.5"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-ivory-50 border border-emerald-950/10 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-emerald-950">Telephone Helpline</h4>
                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                    className="text-xs text-dark-800/80 hover:text-emerald-900 underline block mt-0.5"
                  >
                    {contactPhone}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-emerald-950">Instant WhatsApp Support</h4>
                  <p className="text-xs text-dark-800/80 mt-0.5">
                    Direct coordinator support: {whatsappNumber}
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Assalamu Alaikum, I would like to inquire about Quran classes.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all shadow"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-ivory-50 border border-emerald-950/10 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-emerald-950">Campus Administration</h4>
                  <p className="text-xs text-dark-800/80 mt-0.5">
                    Online Virtual Campus • Operating globally across multiple timezones
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7">
            {success ? (
              <div className="p-8 sm:p-12 rounded-3xl bg-ivory-50 border-2 border-emerald-900/20 shadow-2xl text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-emerald-950">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-dark-800/80 max-w-md mx-auto">
                  JazakAllahu Khairan! Our academic office has received your message and will respond via email or WhatsApp within a few hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-900 text-ivory-50 text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 sm:p-10 rounded-3xl bg-ivory-50 border border-emerald-950/15 shadow-xl space-y-5"
              >
                <h3 className="font-serif text-xl font-bold text-emerald-950 border-b border-emerald-950/10 pb-3">
                  Send a Direct Inquiry
                </h3>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-950 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Mahmood"
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
                      placeholder="e.g. tariq@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-950 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-950 mb-1">
                      Course of Interest
                    </label>
                    <select
                      value={formData.courseInterest}
                      onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    >
                      {APPROVED_COURSES.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-emerald-950 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiring about weekend classes for my son"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-emerald-950 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share any specific details or questions..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-ivory-50 font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
