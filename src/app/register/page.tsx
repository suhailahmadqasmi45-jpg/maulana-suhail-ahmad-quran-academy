"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { User, Mail, Lock, Phone, AlertCircle, Loader2, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    parentName: "",
    country: "India",
    preferredLanguage: "English",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Registration failed");
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to register account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 pb-20">
      <PageHeader
        title="Student Registration"
        subtitle="Create a student account to manage your class schedule, homework, and fee records."
        arabicTitle="تسجيل حساب طالب جديد"
        badge="New Student Signup"
        breadcrumbs={[{ label: "Register" }]}
      />

      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <form
          onSubmit={handleSubmit}
          className="p-8 sm:p-10 rounded-3xl bg-ivory-50 border border-emerald-950/15 shadow-2xl space-y-4"
        >
          <div className="text-center space-y-1 mb-4">
            <h2 className="font-serif text-2xl font-bold text-emerald-950">Create Student Account</h2>
            <p className="text-xs text-dark-800/70">Takes under 60 seconds to get set up</p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-emerald-950 mb-1">
              Student Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Zaid Al-Mansoor"
              className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-emerald-950 mb-1">
              Parent / Guardian Name (Optional)
            </label>
            <input
              type="text"
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              placeholder="e.g. Tariq Al-Mansoor"
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
              placeholder="e.g. zaid@example.com"
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
              placeholder="e.g. +91 98765 00001"
              className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-emerald-950 mb-1">Country</label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-950 mb-1">Language</label>
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
          </div>

          <div>
            <label className="block text-xs font-semibold text-emerald-950 mb-1">
              Create Password *
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="At least 6 characters"
              className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-ivory-50 font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <span>Complete Registration</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </>
            )}
          </button>

          <div className="text-center text-xs text-dark-800/70 pt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-900 underline font-semibold">
              Sign in here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
