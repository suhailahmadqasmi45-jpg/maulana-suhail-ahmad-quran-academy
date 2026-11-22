"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { LanguageCode, translations, TranslationStrings } from "@/lib/translations";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationStrings;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
  isRTL: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as LanguageCode | null;
    if (saved && ["en", "ur", "ar", "hi"].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_lang", lang);
    if (lang === "ur" || lang === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = lang;
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = lang;
    }
  };

  const isRTL = language === "ur" || language === "ar";
  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
