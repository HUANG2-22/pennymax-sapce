"use client";

import React from "react";
import { ui } from "@/content/i18n";
import { archive } from "@/content/archive";
import { useI18n } from "@/components/i18n/I18nProvider";

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="mb-3 text-sm tracking-widest text-cyan-200/80">{title}</div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function ArchiveSection() {
  const { lang } = useI18n();
  const current = ui[lang];

  return (
    <section id="archive" className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {current.archive.title}
          </h2>
          <p className="mt-2 text-sm text-fog/60">
            {lang === "zh"
              ? "教育、里程碑与荣誉语言。"
              : "Education, milestones, and honors/skills."}
          </p>
        </div>
        <div className="hidden sm:block rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-fog/60">
          Archive Signal // 01
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <SectionCard title={current.archive.education}>
            {archive.education.map((e) => (
              <div
                key={`${e.period.en}-${e.title.en}`}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="text-xs tracking-widest text-cyan-200/70">
                  {e.period[lang]}
                </div>
                <div className="mt-2 text-sm font-medium text-fog/90">
                  {e.title[lang]}
                </div>
                <div className="mt-1 text-sm text-fog/70">{e.org[lang]}</div>
              </div>
            ))}
          </SectionCard>
        </div>

        <div className="lg:col-span-2">
          <SectionCard title={current.archive.milestones}>
            {archive.milestones.map((m) => (
              <div
                key={`${m.org.en}-${m.role.en}`}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-fog/90">
                      {m.role[lang]}
                    </div>
                    <div className="text-xs tracking-widest text-fog/60">
                      {m.org[lang]}
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-xl border border-white/10 bg-white/5" />
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-fog/70">
                  {m.highlights[lang].map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </SectionCard>
        </div>
      </div>

      <div className="mt-4">
        <SectionCard title={current.archive.honors}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs tracking-widest text-cyan-200/70">
                {lang === "zh" ? "( ) 荣誉 / 奖项" : "( ) Awards"}
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-fog/70">
                {archive.honors.awards[lang].map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs tracking-widest text-cyan-200/70">
                {lang === "zh" ? "( ) 语言" : "( ) Languages"}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {archive.honors.languages[lang].map((l) => (
                  <span
                    key={l}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-fog/75"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </section>
  );
}

