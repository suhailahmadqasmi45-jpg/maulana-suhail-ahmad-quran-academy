import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth";
import {
  Shield,
  Users,
  FileCheck,
  Calendar,
  CreditCard,
  Settings,
  MessageSquare,
  LogOut,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Admin Dashboard | Suhail Online Quran Academy",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  // If not logged in as admin, redirect to login
  if (!session || session.role !== "ADMIN") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-ivory-100 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-emerald-950 text-ivory-100 p-6 flex flex-col justify-between shrink-0 border-r border-gold-500/30">
        <div className="space-y-6">
          <div className="border-b border-emerald-900 pb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 text-[10px] font-bold uppercase tracking-wider mb-2">
              <Shield className="w-3 h-3 text-gold-400" />
              <span>Academy Admin</span>
            </div>
            <h2 className="font-serif text-lg font-bold text-white leading-tight">
              Administration
            </h2>
            <p className="text-xs text-ivory-200/70 truncate">{session.email}</p>
          </div>

          <nav className="space-y-1">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-900/60 text-gold-300 transition-colors"
            >
              <Shield className="w-4 h-4 text-gold-400" />
              <span>Admin Control Center</span>
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-emerald-900 text-ivory-100 hover:text-white transition-colors"
            >
              <Users className="w-4 h-4 text-gold-400" />
              <span>View as Student</span>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-emerald-900 text-ivory-100 hover:text-white transition-colors"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
            </Link>
          </nav>
        </div>

        {/* Logout */}
        <div className="pt-6 border-t border-emerald-900">
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-300 hover:bg-red-950/40 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out Admin</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl overflow-x-hidden">{children}</main>
    </div>
  );
}
