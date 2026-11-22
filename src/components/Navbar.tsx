"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  PhoneCall,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { APPROVED_COURSES } from "@/lib/courses";
import { IslamicStarPattern } from "./IslamicPattern";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [pathname]);

  const rawWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210";
  const cleanWhatsapp = rawWhatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
    "Assalamu Alaikum, I would like to inquire about Quran classes at Suhail Online Quran Academy."
  )}`;

  const rawPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98765 43210";
  const cleanPhone = rawPhone.replace(/[^0-9+]/g, "");

  // ONLY Courses, About Us, and Contact Us
  const navLinks = [
    {
      label: "Courses",
      href: "/courses",
      hasDropdown: true,
    },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-emerald-900/95 backdrop-blur-md shadow-lg border-b border-gold-500/20 py-3"
          : "bg-emerald-900 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0 max-w-[200px] sm:max-w-none">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-gold-600 via-gold-500 to-gold-400 p-0.5 shadow-md flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-[10px] sm:rounded-[14px] bg-emerald-950 flex items-center justify-center">
                <IslamicStarPattern className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>

            <div className="min-w-0">
              <span className="block font-serif text-sm sm:text-lg font-bold text-ivory-50 tracking-tight leading-tight group-hover:text-gold-300 transition-colors truncate">
                Suhail
              </span>
              <span className="block text-[9px] sm:text-[11px] font-medium text-gold-400 uppercase tracking-widest truncate">
                Online Quran Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links: ONLY Courses, About Us, Contact Us */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setCoursesDropdownOpen(true)}
                    onMouseLeave={() => setCoursesDropdownOpen(false)}
                  >
                    <button
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        pathname.startsWith("/courses")
                          ? "text-gold-300 font-bold bg-emerald-800/60"
                          : "text-ivory-100 hover:text-white hover:bg-emerald-800/50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>

                    {coursesDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 rounded-2xl bg-emerald-950 border border-gold-500/30 shadow-2xl p-2 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-1">
                        <div className="p-2 border-b border-emerald-900/60 mb-1">
                          <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider">
                            Our Approved Courses
                          </span>
                        </div>
                        {APPROVED_COURSES.map((course) => (
                          <Link
                            key={course.slug}
                            href={`/courses/${course.slug}`}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-900/60 text-ivory-100 hover:text-white transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-emerald-900 border border-gold-500/20 text-gold-400 group-hover:scale-105 transition-transform">
                              <BookOpen className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-ivory-50 group-hover:text-gold-300">
                                  {course.title}
                                </p>
                                <span className="text-[10px] font-semibold text-gold-400">
                                  ₹{course.monthlyFee}/mo
                                </span>
                              </div>
                              <p className="text-[11px] text-ivory-200/70 truncate mt-0.5">
                                {course.level}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <div className="pt-2 border-t border-emerald-900/60 mt-1">
                          <Link
                            href="/courses"
                            className="block text-center text-xs font-semibold text-gold-300 hover:text-gold-200 py-1"
                          >
                            View All Courses →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "text-gold-300 font-bold bg-emerald-800/60"
                      : "text-ivory-100 hover:text-white hover:bg-emerald-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Right Actions: Call + WhatsApp + Admission CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Quick Call Button */}
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-gold-300 border border-gold-500/30 shadow-md transition-all active:scale-95 uppercase tracking-wider"
              aria-label="Direct Phone Call"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
              <span>Call Us</span>
            </a>

            {/* Prominent WhatsApp Button in Header */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md hover:shadow-lg transition-all active:scale-95 uppercase tracking-wider"
              aria-label="WhatsApp Contact"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/admission"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-emerald-950 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 uppercase tracking-wider"
            >
              <span>Apply for Admission</span>
            </Link>
          </div>

          {/* Mobile Actions: Compact Call, WhatsApp & Hamburger */}
          <div className="flex items-center gap-1.5 md:hidden shrink-0">
            {/* Quick Call Icon Button */}
            <a
              href={`tel:${cleanPhone}`}
              className="w-8 h-8 rounded-lg bg-emerald-800/90 text-gold-300 border border-gold-500/30 flex items-center justify-center shadow-sm active:scale-95 transition-transform"
              aria-label="Direct Phone Call"
              title="Call Academy"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
            </a>

            {/* Quick WhatsApp Icon Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shadow-sm active:scale-95 transition-transform"
              aria-label="WhatsApp Contact"
              title="WhatsApp Chat"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
            </a>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-ivory-100 hover:text-white hover:bg-emerald-800/70 focus:outline-none ml-0.5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer: ONLY Courses, About Us, Contact Us */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gold-500/20 bg-emerald-950 px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2">
          <div className="space-y-1">
            <div className="py-2 px-3">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-wider block mb-2">
                Courses
              </span>
              <div className="space-y-1.5 pl-2 border-l border-gold-500/30">
                {APPROVED_COURSES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    className="flex items-center justify-between text-xs text-ivory-200 py-1 hover:text-gold-300"
                  >
                    <span>{c.title}</span>
                    <span className="text-gold-400 font-semibold">₹{c.monthlyFee}/mo</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="block px-3 py-2.5 text-sm font-semibold text-ivory-100 hover:bg-emerald-900 rounded-lg"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="block px-3 py-2.5 text-sm font-semibold text-ivory-100 hover:bg-emerald-900 rounded-lg"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-emerald-900/80 space-y-2">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold rounded-xl bg-emerald-900 hover:bg-emerald-800 text-gold-300 border border-gold-500/30 text-center shadow uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>Call Us Now</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-center shadow uppercase tracking-wider"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/admission"
              className="w-full inline-flex items-center justify-center py-3 text-xs font-bold rounded-xl bg-gold-500 text-emerald-950 text-center shadow-lg uppercase tracking-wider"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
