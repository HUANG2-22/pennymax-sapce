"use client";

import React from "react";
import { ui, type Lang } from "@/content/i18n";
import { useI18n } from "./I18nProvider";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  const nextLang: Lang = lang === "en" ? "zh" : "en";

  return (
    <button
      type="button"
      onClick={() => setLang(nextLang)}
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs tracking-widest text-fog/90 transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "opacity-100" : "opacity-60"}>
        {ui.en.languageToggle.enLabel}
      </span>
      <span className="text-white/20">|</span>
      <span className={lang === "zh" ? "opacity-100" : "opacity-60"}>
        {ui.zh.languageToggle.zhLabel}
      </span>
    </button>
  );
}

