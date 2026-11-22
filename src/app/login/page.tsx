"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Lock, Mail, AlertCircle, Loader2, ArrowRight, ShieldCheck } from "lucide-react";
import { IslamicStarPattern } from "@/components/IslamicPattern";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Invalid credentials");
      }

      router.push(data.redirectTo || "/dashboard");
      router.refresh();
    } catch (err: any) {
      setErrorMessage(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const fillDemoStudent = () => {
    setEmail("student@example.com");
    setPassword("student123");
  };

  const fillDemoAdmin = () => {
    setEmail("admin@maulanasuhailacademy.com");
    setPassword("admin123");
  };

  return (
    <div className="space-y-12 pb-20">
      <PageHeader
        title="Student & Scholar Portal Login"
        subtitle="Access your active course materials, live class schedule, and personalized Tajweed progress."
        arabicTitle="تسجيل الدخول إلى البوابة التعليمية"
        badge="Secure Access"
        breadcrumbs={[{ label: "Login" }]}
      />

      <div className="max-w-md mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-ivory-50 border border-emerald-950/15 shadow-2xl space-y-6">
          <div className="text-center space-y-1">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center mb-3">
              <Lock className="w-6 h-6 text-gold-600" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-emerald-950">Welcome Back</h2>
            <p className="text-xs text-dark-800/70">Enter your registered email and password</p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-emerald-950 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50 pl-9"
                />
                <Mail className="w-4 h-4 text-emerald-900/40 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-950 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-950/20 bg-white text-xs text-dark-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50 pl-9"
                />
                <Lock className="w-4 h-4 text-emerald-900/40 absolute left-3 top-3" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-ivory-50 font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Portal</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Fill Buttons for Testing */}
          <div className="pt-4 border-t border-emerald-950/10 space-y-2">
            <span className="text-[11px] font-semibold text-dark-800/60 uppercase tracking-wider block text-center">
              Quick Demo Access
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={fillDemoStudent}
                className="py-1.5 px-2 rounded-lg bg-emerald-900/10 hover:bg-emerald-900/20 text-emerald-950 text-[11px] font-semibold text-center border border-emerald-900/20"
              >
                Demo Student
              </button>
              <button
                type="button"
                onClick={fillDemoAdmin}
                className="py-1.5 px-2 rounded-lg bg-gold-500/20 hover:bg-gold-500/30 text-emerald-950 text-[11px] font-semibold text-center border border-gold-500/40"
              >
                Demo Admin
              </button>
            </div>
          </div>

          <div className="text-center text-xs text-dark-800/70 pt-2">
            Don't have an account yet?{" "}
            <Link href="/register" className="text-emerald-900 underline font-semibold">
              Register here
            </Link>{" "}
            or{" "}
            <Link href="/admission" className="text-emerald-900 underline font-semibold">
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
