import React from "react";

export function IslamicStarPattern({ className = "w-6 h-6 text-gold-500" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <polygon points="50,5 64,36 95,36 71,56 80,88 50,70 20,88 29,56 5,36 36,36" />
      <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function IslamicArchBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-8 text-ivory-50 fill-current"
      >
        <path d="M0,0 C150,90 350,-40 500,60 C650,160 850,20 1000,70 C1100,100 1150,40 1200,0 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
  );
}

export function SubtleGeometricPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 opacity-[0.035] pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23064E3B' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M30 30L15 15H0v15l15 15 15-15zm0 0l15 15h15V30L45 15 30 30zm0 0l-15 15v15h15l15-15-15-15zm0 0l15-15V0H30L15 15l15 15z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  );
}

export function QuranVerseBanner({
  arabic = "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
  translation = "“And recite the Quran with measured, distinct recitation.”",
  reference = "Surah Al-Muzzammil (73:4)",
}: {
  arabic?: string;
  translation?: string;
  reference?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 p-6 md:p-8 text-center text-ivory-50 shadow-xl border border-gold-500/20">
      <div className="absolute top-2 left-4 text-gold-500/20 text-6xl font-serif select-none pointer-events-none">
        ﷽
      </div>
      <div className="relative z-10 max-w-3xl mx-auto space-y-3">
        <p className="font-arabic text-2xl md:text-3xl text-gold-400 font-semibold leading-relaxed tracking-wide">
          {arabic}
        </p>
        <p className="text-ivory-100/90 text-sm md:text-base italic font-serif">
          {translation}
        </p>
        <div className="inline-flex items-center gap-2 pt-1">
          <span className="h-px w-8 bg-gold-500/40" />
          <span className="text-xs uppercase tracking-widest text-gold-300 font-medium">
            {reference}
          </span>
          <span className="h-px w-8 bg-gold-500/40" />
        </div>
      </div>
    </div>
  );
}
