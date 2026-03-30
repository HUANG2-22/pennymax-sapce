import React from "react";
import { ui } from "@/content/i18n";
import { useI18n } from "@/components/i18n/I18nProvider";

export function Footer() {
  const { lang } = useI18n();
  const current = ui[lang];

  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6">
      <div className="border-t border-white/10 pt-6 text-xs text-fog/60">
        {current.footer}
      </div>
    </footer>
  );
}

