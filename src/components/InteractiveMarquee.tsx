"use client";

import React, { useState } from "react";
import { Pause, Play } from "lucide-react";

interface InteractiveMarqueeProps {
  children: React.ReactNode;
  speed?: "normal" | "slow";
  direction?: "rtl" | "ltr";
  className?: string;
  badgeLabel?: string;
}

export function InteractiveMarquee({
  children,
  speed = "normal",
  direction = "rtl",
  className = "",
  badgeLabel,
}: InteractiveMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  const animationClass =
    speed === "slow"
      ? direction === "rtl"
        ? "animate-marquee-rtl-slow"
        : "animate-marquee-slow"
      : direction === "rtl"
      ? "animate-marquee-rtl"
      : "animate-marquee";

  return (
    <div className={`relative w-full ${className}`}>
      {/* Top Controller Bar */}
      <div className="flex items-center justify-between px-2 mb-2">
        {badgeLabel ? (
          <span className="text-[11px] font-semibold text-emerald-900/80">
            {badgeLabel}
          </span>
        ) : (
          <span className="text-[11px] text-dark-800/60 font-medium hidden sm:inline">
            Tip: Click or tap any card to pause / resume scrolling
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-all shadow-sm active:scale-95 ${
            isPaused
              ? "bg-gold-500 text-emerald-950 border border-gold-400 ring-2 ring-gold-400/40 animate-pulse"
              : "bg-emerald-950/80 hover:bg-emerald-900 text-ivory-100 border border-gold-500/30"
          }`}
          aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
          title={isPaused ? "Click to resume scrolling" : "Click to pause scrolling"}
        >
          {isPaused ? (
            <>
              <Play className="w-3 h-3 fill-emerald-950" />
              <span>Paused (Tap to Resume)</span>
            </>
          ) : (
            <>
              <Pause className="w-3 h-3 fill-gold-400 text-gold-400" />
              <span>Click to Pause</span>
            </>
          )}
        </button>
      </div>

      {/* Scrolling Area Container */}
      <div
        className="relative w-full overflow-hidden py-3 cursor-pointer group"
        onClick={() => setIsPaused((prev) => !prev)}
        title={isPaused ? "Paused — Click to Resume" : "Click any card to Pause"}
      >
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-ivory-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-ivory-50 to-transparent z-10" />

        {/* Animated Track */}
        <div
          className={`flex gap-6 w-max select-none py-1 transition-all ${animationClass} group-hover:[animation-play-state:paused]`}
          style={{
            animationPlayState: isPaused ? "paused" : undefined,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
