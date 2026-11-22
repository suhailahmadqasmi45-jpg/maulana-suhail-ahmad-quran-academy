import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Sparkles, BookOpen, Clock, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { INDIA_LOCATIONS } from "@/lib/location-data";
import { SEO_CONFIG, getCanonicalUrl } from "@/lib/seo-config";
import { QuranVerseBanner } from "@/components/IslamicPattern";

export const metadata = {
  title: "Online Quran Classes Across India | City-Wise Distance Learning Hub",
  description:
    "Learn Quran online from anywhere in India with Maulana Suhail Ahmad Online Quran Academy. 1-on-1 personalized classes in Delhi, Mumbai, Hyderabad, Bengaluru, Lucknow, Kolkata & nationwide.",
  alternates: {
    canonical: getCanonicalUrl("/locations"),
  },
};

export default function LocationsHubPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Online Quran Classes Across India"
        subtitle="Distance learning platform connecting students nationwide with verified Islamic scholars, Huffaz, and Qaris for private 1-on-1 Quran education."
        arabicTitle="تعليم القرآن الكريم عن بعد في جميع أنحاء الهند"
        badge="India-Wide Distance Learning Network"
        breadcrumbs={[{ label: "Locations Across India" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <QuranVerseBanner
          arabic="وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ"
          translation="“And We have indeed made the Quran easy to understand and remember, then is there any that will remember?”"
          reference="Surah Al-Qamar (54:17)"
        />

        {/* Distance Learning Explanation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-ivory-100 border border-emerald-950/15 shadow-sm space-y-4">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Zero Physical Commute • 100% Personal Attention
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              How Distance Learning Works in Your City
            </h2>
            <p className="text-sm text-dark-800/80 leading-relaxed font-sans">
              Our registered academic center is located in <strong>Nairana, Muzaffarnagar (Uttar Pradesh)</strong>, directed by <strong>Maulana Suhail Ahmad</strong>. Through secure, interactive digital classrooms, we deliver live, one-on-one personalized Quran lessons directly to students residing in every metropolitan city, town, and rural area across India. You do not need a physical branch in your locality—our verified tutors conduct lessons according to your family’s preferred Indian Standard Time (IST) schedule.
            </p>
          </div>
        </div>

        {/* City Directory Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl font-bold text-emerald-950">
              Explore Online Quran Classes By City
            </h3>
            <p className="text-xs sm:text-sm text-dark-800/75">
              Select your city to review localized schedules, language support, and course options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDIA_LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 hover:border-gold-500/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center border border-gold-500/20 group-hover:bg-emerald-900 group-hover:text-gold-400 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-gold-700 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-400/30">
                      {loc.region}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-lg text-emerald-950 group-hover:text-emerald-800 transition-colors">
                      {loc.cityName}
                    </h4>
                    <p className="text-xs text-dark-800/60 font-medium">{loc.state}</p>
                  </div>

                  <p className="text-xs text-dark-800/75 line-clamp-3 leading-relaxed">
                    {loc.localContext}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-emerald-900 block mb-1">
                      Languages:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.languagesSupported.map((lang) => (
                        <span
                          key={lang}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-ivory-100 text-dark-800/80 font-medium"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-950/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-gold-600">From ₹1,399/mo</span>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-900 hover:text-emerald-700 underline"
                  >
                    <span>View City Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
