"use client";

import React, { useState } from "react";
import { ui } from "@/content/i18n";
import { contact } from "@/content/contact";
import { useI18n } from "@/components/i18n/I18nProvider";

export function ContactSection() {
  const { lang } = useI18n();
  const current = ui[lang];

  const [copied, setCopied] = useState(false);
  const githubProfileUrl =
    process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL ||
    "https://github.com/HUANG2-22";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = contact.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
      <div className="min-h-[320px] rounded-3xl border border-white/10 bg-white/5 px-5 py-10 backdrop-blur sm:py-12">
        <div>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {current.contact.title}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-fog/75 sm:text-base">
            {current.contact.statement}
          </p>

          <div className="mt-5 space-y-2 text-sm text-fog/70">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs tracking-widest text-cyan-200/80">
                Email
              </span>
              <span
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1"
                aria-label={current.contact.emailAria}
              >
                {contact.email}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-fog/55">
              {contact.locations.map((l) => (
                <span
                  key={l.en}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {l[lang]}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-fog/95 transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
            >
              {current.contact.downloadResume}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-fog/95 transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
              aria-label="Copy email"
            >
              {copied ? current.contact.copied : current.contact.copyEmail}
            </button>

            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-fog/95 transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
            >
              {current.contact.github}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
