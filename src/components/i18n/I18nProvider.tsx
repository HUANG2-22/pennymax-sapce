"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LANGS, type Lang } from "@/content/i18n";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined"
      ? window.localStorage.getItem("lang")
      : null) as Lang | null;
    if (stored && LANGS.includes(stored)) {
      setLangState(stored);
      return;
    }
    // Default: English
    setLangState("en");
  }, []);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    window.localStorage.setItem("lang", nextLang);
    document.documentElement.setAttribute("lang", nextLang === "zh" ? "zh" : "en");
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

