"use client";

import React from "react";
import { ui } from "@/content/i18n";
import { useI18n } from "@/components/i18n/I18nProvider";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative rounded-xl px-3 py-2 text-sm text-fog/80 transition hover:text-fog focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
    >
      {children}
      <span className="pointer-events-none absolute inset-x-3 bottom-1 h-[1px] origin-left scale-x-0 bg-cyan-300/70 transition group-hover:scale-x-100" />
    </a>
  );
}

export function Topbar() {
  const { lang } = useI18n();
  const current = ui[lang];

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="flex w-full items-center gap-6 rounded-2xl border border-white/10 bg-black/30 px-3 py-3 backdrop-blur md:gap-8 lg:gap-10">
          <nav className="hidden min-w-0 flex-1 items-center justify-evenly sm:flex">
            <NavLink href="#archive">{current.nav.archive}</NavLink>
            <NavLink href="#gallery">{current.nav.gallery}</NavLink>
            <NavLink href="#lab">{current.nav.lab}</NavLink>
            <NavLink href="#contact">{current.nav.contact}</NavLink>
          </nav>

          <div className="ml-auto flex shrink-0 items-center sm:ml-0">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

