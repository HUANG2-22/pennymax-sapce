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
    process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL || "https://github.com/";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback: best-effort copy using a temporary textarea
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
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {current.contact.title}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-fog/75 sm:text-base">
              "{current.contact.statement}"
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

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-fog/95 transition hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
              >
                {current.contact.downloadResume}
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-fog/95 transition hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
                aria-label="Copy email"
              >
                {copied ? current.contact.copied : current.contact.copyEmail}
              </button>

              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-fog/95 transition hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
              >
                {current.contact.github}
              </a>
            </div>
          </div>

          <div className="w-full sm:max-w-xs">
            <div className="text-sm tracking-widest text-cyan-200/80">
              Platforms
            </div>
            <div className="mt-3 space-y-3">
              {contact.socials.map((s) => (
                <div
                  key={s.id}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-fog/90">
                        {s.label}
                      </div>
                      <div className="mt-1 text-xs text-fog/60">{s.hint}</div>
                    </div>
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-fog/80 hover:bg-white/10"
                      >
                        Open
                      </a>
                    ) : (
                      <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-fog/50">
                        —
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

