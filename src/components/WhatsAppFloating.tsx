"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppFloating({
  courseTitle = "Quran",
}: {
  courseTitle?: string;
}) {
  const rawWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210";
  const cleanWhatsapp = rawWhatsapp.replace(/[^0-9]/g, "");

  const rawPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98765 43210";
  const cleanPhone = rawPhone.replace(/[^0-9+]/g, "");

  const prefilledMessage = encodeURIComponent(
    `Assalamu Alaikum, I would like to inquire about Quran classes at Suhail Online Quran Academy.`
  );

  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${prefilledMessage}`;

  return (
    <aside
      aria-label="Quick Contact Dock"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end gap-2.5 select-none"
    >
      {/* 1. Direct Call Floating Button (Compact FAB on mobile, Pill on desktop) */}
      <a
        href={`tel:${cleanPhone}`}
        className="group relative flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2.5 bg-emerald-950 hover:bg-emerald-900 text-ivory-50 rounded-full shadow-[0_4px_16px_rgba(6,78,59,0.45)] border-2 border-gold-400/60 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
        aria-label="Call Suhail Online Quran Academy"
        title="Direct Phone Call"
      >
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center shrink-0 border border-gold-400/40 group-hover:bg-gold-500 group-hover:text-emerald-950 transition-colors">
          <PhoneCall className="w-3.5 h-3.5" />
        </div>
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider text-gold-300 group-hover:text-gold-200 whitespace-nowrap pr-1">
          Call Now
        </span>
      </a>

      {/* 2. Direct WhatsApp Floating Button (Compact FAB on mobile, Pill on desktop) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 p-2.5 sm:px-4 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_6px_20px_rgba(37,211,102,0.45)] border-2 border-white/90 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* Animated pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10 opacity-75" />

        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
          <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-[#25D366]" />
        </div>

        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider text-white whitespace-nowrap pr-1">
          WhatsApp Chat
        </span>
      </a>
    </aside>
  );
}
