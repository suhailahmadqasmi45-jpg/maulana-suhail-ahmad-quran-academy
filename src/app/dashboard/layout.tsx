import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Award,
  CreditCard,
  LogOut,
  User,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Student Dashboard",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  // If not logged in, redirect to login
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-ivory-100 flex flex-col md:flex-row">
      {/* Student Sidebar */}
      <aside className="w-full md:w-64 bg-emerald-950 text-ivory-100 p-6 flex flex-col justify-between shrink-0 border-r border-gold-500/20">
        <div className="space-y-6">
          <div className="border-b border-emerald-900 pb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400 block">
              Student Portal
            </span>
            <h2 className="font-serif text-lg font-bold text-white mt-0.5">{session.name}</h2>
            <p className="text-xs text-ivory-200/70 truncate">{session.email}</p>
          </div>

          <nav className="space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-emerald-900 text-ivory-100 hover:text-white transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-gold-400" />
              <span>Overview</span>
            </Link>

            <Link
              href="/dashboard/courses"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-emerald-900 text-ivory-100 hover:text-white transition-colors"
            >
              <BookOpen className="w-4 h-4 text-gold-400" />
              <span>My Courses</span>
            </Link>

            <Link
              href="/dashboard/schedule"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-emerald-900 text-ivory-100 hover:text-white transition-colors"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              <span>Class Schedule</span>
            </Link>

            <Link
              href="/dashboard/progress"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-emerald-900 text-ivory-100 hover:text-white transition-colors"
            >
              <Award className="w-4 h-4 text-gold-400" />
              <span>Learning Progress</span>
            </Link>

            <Link
              href="/dashboard/payments"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-emerald-900 text-ivory-100 hover:text-white transition-colors"
            >
              <CreditCard className="w-4 h-4 text-gold-400" />
              <span>Fee Payments</span>
            </Link>
          </nav>
        </div>

        {/* User Actions */}
        <div className="pt-6 border-t border-emerald-900 space-y-2">
          {session.role === "ADMIN" && (
            <Link
              href="/admin"
              className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold bg-gold-500/20 text-gold-300 border border-gold-500/30"
            >
              <span>Admin Panel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          )}

          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-300 hover:bg-red-950/40 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Dashboard Content Area */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl">{children}</main>
    </div>
  );
}
