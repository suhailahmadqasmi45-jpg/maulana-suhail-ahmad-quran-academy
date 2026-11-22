import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  BookOpen,
  ShieldCheck,
  HeartHandshake,
  Clock,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { APPROVED_COURSES } from "@/lib/courses";
import { IslamicStarPattern } from "./IslamicPattern";

export function Footer() {
  const currentYear = 2026;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@maulanasuhailquranacademy.com";
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98765 43210";

  return (
    <footer className="relative bg-emerald-950 text-ivory-100 pt-16 pb-12 border-t border-gold-500/20 overflow-hidden">
      {/* Decorative Gold Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-900 via-gold-500 to-emerald-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-600 to-gold-400 p-0.5 shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-[14px] bg-emerald-950 flex items-center justify-center">
                  <IslamicStarPattern className="w-7 h-7 text-gold-400" />
                </div>
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-ivory-50 tracking-tight leading-tight">
                  Suhail
                </span>
                <span className="block text-xs font-semibold text-gold-400 uppercase tracking-widest">
                  Online Quran Academy
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory-200/80 leading-relaxed max-w-md">
              A premier international Islamic education institution dedicated to delivering authentic, structured Quranic recitation, Tajweed, Hifz, and foundational Islamic scholarship to children, beginners, and adults worldwide from the comfort of home.
            </p>

            <div className="p-4 rounded-2xl bg-emerald-900/50 border border-gold-500/20 max-w-md">
              <div className="flex items-center gap-2 text-gold-300 text-xs font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Global Reach & Flexible Timings</span>
              </div>
              <p className="text-xs text-ivory-200/80">
                Serving dedicated students in India, UAE, Saudi Arabia, UK, USA, Canada, Australia, and worldwide with one-on-one tailored scheduling.
              </p>
            </div>
          </div>

          {/* Column 2: Approved Courses */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Our Courses</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {APPROVED_COURSES.map((course) => (
                <li key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-ivory-200/80 hover:text-gold-300 transition-colors flex items-center justify-between"
                  >
                    <span>{course.title}</span>
                    <span className="text-xs font-semibold text-gold-400/90">
                      ₹{course.monthlyFee}/m
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/pricing"
                className="inline-block text-xs font-semibold text-gold-300 hover:text-gold-200 underline"
              >
                View Detailed Fee Schedule →
              </Link>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-ivory-200/80">
              <li>
                <Link href="/about" className="hover:text-gold-300 transition-colors">
                  About the Academy
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="hover:text-gold-300 transition-colors">
                  Our Certified Teachers
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-gold-300 transition-colors">
                  How Online Classes Work
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-gold-300 transition-colors">
                  Student & Parent Reviews
                </Link>
              </li>
              <li>
                <Link href="/free-trial" className="hover:text-gold-300 transition-colors">
                  Book Free Trial Class
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold-300 transition-colors">
                  Islamic Learning Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </h4>
            <ul className="space-y-3 text-xs text-ivory-200/80">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors">
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {contactPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#25D366] hover:text-[#20ba59] transition-colors"
                >
                  WhatsApp: {whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Online Campus • Distance Learning Platform</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/admission"
                className="w-full inline-flex items-center justify-center py-2 px-3 text-xs font-bold rounded-xl bg-gold-500 hover:bg-gold-400 text-emerald-950 transition-colors text-center"
              >
                Apply for Admission Now
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Policies & Copyright Footer Bar */}
        <div className="pt-8 border-t border-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-200/60">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-center sm:text-left">
            <p>© {currentYear} Suhail Online Quran Academy. All Rights Reserved.</p>
            <span className="hidden sm:inline text-emerald-800">•</span>
            <p className="text-gold-400/90 font-medium">
              Created by{" "}
              <a
                href="https://codeorbit.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-300 hover:text-gold-200 underline underline-offset-2 transition-colors font-semibold"
              >
                codeorbit.cloud
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-gold-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gold-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-gold-300 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
