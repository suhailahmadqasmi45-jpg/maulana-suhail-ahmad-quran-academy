"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { LanguageCode } from "@/lib/translations";
import { Globe } from "lucide-react";

const languages: { code: LanguageCode; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "ur", label: "Urdu", native: "اردو" },
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium rounded-full bg-emerald-950/40 text-ivory-50 border border-gold-500/30 hover:border-gold-400 hover:bg-emerald-900/60 transition-all duration-200"
        aria-label="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-gold-400" />
        <span>{currentLang.native}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl bg-emerald-950 border border-gold-500/20 shadow-2xl py-1 z-50 backdrop-blur-md">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLanguage(l.code);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-xs md:text-sm flex items-center justify-between transition-colors ${
                language === l.code
                  ? "bg-gold-500/20 text-gold-300 font-semibold"
                  : "text-ivory-100 hover:bg-emerald-900/50"
              }`}
            >
              <span>{l.native}</span>
              <span className="text-[10px] text-ivory-100/60 uppercase">{l.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
