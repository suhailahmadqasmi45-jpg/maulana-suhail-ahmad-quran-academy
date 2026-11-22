import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { SubtleGeometricPattern, IslamicStarPattern } from "./IslamicPattern";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  arabicTitle?: string;
  badge?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHeader({
  title,
  subtitle,
  arabicTitle,
  badge,
  breadcrumbs = [],
}: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-ivory-50 pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gold-500/20 overflow-hidden">
      <SubtleGeometricPattern />

      {/* Decorative top soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center space-y-4">
        {/* Breadcrumbs */}
        <nav className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-gold-500/20 text-xs text-ivory-200/80 mb-2 backdrop-blur-sm">
          <Link href="/" className="hover:text-gold-300 flex items-center gap-1">
            <Home className="w-3 h-3" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-gold-500/60" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-gold-300">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold-300 font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {badge && (
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30">
              <IslamicStarPattern className="w-3 h-3 text-gold-400" />
              {badge}
            </span>
          </div>
        )}

        {arabicTitle && (
          <p className="font-arabic text-2xl md:text-3xl text-gold-400 font-semibold tracking-wide">
            {arabicTitle}
          </p>
        )}

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory-50 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-sans">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
