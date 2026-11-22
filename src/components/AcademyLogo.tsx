import React from "react";

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
      ? "w-9 h-9 sm:w-10 sm:h-10"
      : size === "lg"
      ? "w-14 h-14 sm:w-16 sm:h-16"
      : "w-10 h-10 sm:w-12 sm:h-12";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Royal Islamic Crest Emblem SVG */}
      <div
        className={`relative ${iconDimensions} rounded-full p-0.5 bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-200 shadow-[0_4px_16px_rgba(212,175,55,0.35)] shrink-0 group-hover:scale-105 transition-transform duration-300`}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-b from-emerald-900 to-emerald-950 flex items-center justify-center overflow-hidden border border-gold-400/50">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full p-1"
          >
            <defs>
              {/* Metallic Gold Gradient */}
              <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="35%" stopColor="#F5D061" />
                <stop offset="70%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#996515" />
              </linearGradient>

              {/* Radiant Light Glow Gradient */}
              <radialGradient id="sacredGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F5D061" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
              </radialGradient>

              {/* Quran Book Pages Gradient */}
              <linearGradient id="quranPages" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFDF5" />
                <stop offset="100%" stopColor="#F3E5AB" />
              </linearGradient>
            </defs>

            {/* Inner Circular Background Glow */}
            <circle cx="50" cy="50" r="46" fill="url(#sacredGlow)" />

            {/* Outer Geometric Ring */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#goldMetallic)"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="url(#goldMetallic)"
              strokeWidth="0.8"
              opacity="0.85"
            />

            {/* 8-Point Star Accents on Ring */}
            <polygon
              points="50,4 51.5,8 55.5,9.5 51.5,11 50,15 48.5,11 44.5,9.5 48.5,8"
              fill="url(#goldMetallic)"
            />
            <polygon
              points="50,85 51.5,89 55.5,90.5 51.5,92 50,96 48.5,92 44.5,90.5 48.5,89"
              fill="url(#goldMetallic)"
            />

            {/* Radiant Sunburst Rays Behind Dome & Quran */}
            <g stroke="url(#goldMetallic)" strokeWidth="0.75" opacity="0.45">
              <line x1="50" y1="28" x2="50" y2="18" />
              <line x1="40" y1="30" x2="33" y2="23" />
              <line x1="60" y1="30" x2="67" y2="23" />
              <line x1="32" y1="36" x2="24" y2="33" />
              <line x1="68" y1="36" x2="76" y2="33" />
            </g>

            {/* Sacred Mosque Dome Silhouette */}
            <path
              d="M38 48 C38 34, 46 26, 50 22 C54 26, 62 34, 62 48 Z"
              fill="#064E3B"
              stroke="url(#goldMetallic)"
              strokeWidth="1.2"
            />

            {/* Crescent Moon & Star atop the Dome */}
            <path
              d="M50 14 A3 3 0 0 0 53 18 A3.5 3.5 0 0 1 49.5 15.5 A2.8 2.8 0 0 1 50 14 Z"
              fill="url(#goldMetallic)"
            />
            <circle cx="51.5" cy="14.5" r="0.8" fill="url(#goldMetallic)" />

            {/* The Holy Quran (Open Book on Rehal) */}
            {/* Left Page */}
            <path
              d="M48 54 C42 50, 31 51, 25 54 C25 67, 36 67, 48 69 Z"
              fill="url(#quranPages)"
              stroke="url(#goldMetallic)"
              strokeWidth="1.2"
            />
            {/* Right Page */}
            <path
              d="M52 54 C58 50, 69 51, 75 54 C75 67, 64 67, 52 69 Z"
              fill="url(#quranPages)"
              stroke="url(#goldMetallic)"
              strokeWidth="1.2"
            />
            {/* Spine & Book Center */}
            <path
              d="M48 54 L50 56 L52 54 L52 69 L50 71 L48 69 Z"
              fill="#064E3B"
              stroke="url(#goldMetallic)"
              strokeWidth="0.8"
            />

            {/* Arabic Script/Lines on Left Page */}
            <line x1="30" y1="58" x2="44" y2="57" stroke="#064E3B" strokeWidth="0.9" strokeLinecap="round" opacity="0.75" />
            <line x1="31" y1="61" x2="43" y2="60" stroke="#064E3B" strokeWidth="0.9" strokeLinecap="round" opacity="0.75" />
            <line x1="32" y1="64" x2="42" y2="63" stroke="#064E3B" strokeWidth="0.9" strokeLinecap="round" opacity="0.75" />

            {/* Arabic Script/Lines on Right Page */}
            <line x1="56" y1="57" x2="70" y2="58" stroke="#064E3B" strokeWidth="0.9" strokeLinecap="round" opacity="0.75" />
            <line x1="57" y1="60" x2="69" y2="61" stroke="#064E3B" strokeWidth="0.9" strokeLinecap="round" opacity="0.75" />
            <line x1="58" y1="63" x2="68" y2="64" stroke="#064E3B" strokeWidth="0.9" strokeLinecap="round" opacity="0.75" />

            {/* Ornate Wooden Rehal (X-Stand Under Quran) */}
            <path
              d="M33 70 L48 78 L43 85 L28 75 Z"
              fill="url(#goldMetallic)"
              stroke="#543A0C"
              strokeWidth="0.7"
            />
            <path
              d="M67 70 L52 78 L57 85 L72 75 Z"
              fill="url(#goldMetallic)"
              stroke="#543A0C"
              strokeWidth="0.7"
            />
            {/* Center Rehal Interlocking Joint */}
            <circle cx="50" cy="78" r="2.5" fill="#FFF2B2" stroke="#543A0C" strokeWidth="0.8" />

            {/* Decorative Arabesque Laurels Flanking Base */}
            <path
              d="M20 74 C22 82, 34 86, 42 86"
              stroke="url(#goldMetallic)"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M80 74 C78 82, 66 86, 58 86"
              stroke="url(#goldMetallic)"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
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
