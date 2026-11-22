import React from "react";
import Image from "next/image";

interface AcademyLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
}

export function AcademyLogo({
  className = "",
  size = "md",
  iconOnly = false,
}: AcademyLogoProps) {
  const iconDimensions =
    size === "sm"
      ? "w-10 h-10 sm:w-11 sm:h-11"
      : size === "lg"
      ? "w-14 h-14 sm:w-16 sm:h-16"
      : "w-11 h-11 sm:w-12 sm:h-12";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Circular Crest Emblem with Quran & Golden Dome */}
      <div
        className={`relative ${iconDimensions} rounded-full p-0.5 bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-200 shadow-[0_4px_16px_rgba(212,175,55,0.35)] shrink-0 group-hover:scale-105 transition-transform duration-300`}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden bg-emerald-950 border border-gold-400/60 shadow-inner">
          <Image
            src="/images/logo.png"
            alt="Suhail Online Quran Academy Logo"
            fill
            sizes="(max-width: 768px) 48px, 64px"
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Brand Typography */}
      {!iconOnly && (
        <div className="flex flex-col min-w-0">
          {/* Classical Majestic Title */}
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-base sm:text-lg font-extrabold text-ivory-50 tracking-tight leading-tight group-hover:text-gold-300 transition-colors drop-shadow-sm truncate">
              Suhail
            </span>
            <span className="text-[10px] sm:text-[11px] font-serif text-gold-400/90 font-medium hidden xs:inline" dir="rtl">
              أكاديمية سهيل
            </span>
          </div>

          {/* Subtitle Badge */}
          <span className="text-[9px] sm:text-[10px] font-bold text-gold-400 uppercase tracking-[0.18em] sm:tracking-[0.22em] leading-none mt-0.5 truncate flex items-center gap-1">
            <span>Online Quran Academy</span>
          </span>
        </div>
      )}
    </div>
  );
}
