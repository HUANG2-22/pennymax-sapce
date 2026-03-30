"use client";

import React, { useEffect, useState } from "react";
import { ui } from "@/content/i18n";
import { lab } from "@/content/lab";
import { useI18n } from "@/components/i18n/I18nProvider";

type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string | null;
  pushed_at: string | null;
};

export function LabSection() {
  const { lang } = useI18n();
  const current = ui[lang];

  const [repos, setRepos] = useState<Repo[]>([]);
  const [repoState, setRepoState] = useState<"idle" | "loading" | "ready">(
    "idle"
  );
  const [repoOk, setRepoOk] = useState<boolean | null>(null);
  const [repoReason, setRepoReason] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setRepoState("loading");
      try {
        const res = await fetch("/api/github/repos?limit=6");
        const json = (await res.json()) as {
          ok: boolean;
          reason?: string;
          repos: Repo[];
        };
        if (cancelled) return;
        setRepoOk(json.ok);
        setRepoReason(json.reason || "");
        setRepos(json.repos);
        setRepoState("ready");
      } catch (e) {
        if (cancelled) return;
        setRepoOk(false);
        setRepoReason(e instanceof Error ? e.message : "Unknown error");
        setRepos([]);
        setRepoState("ready");
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="lab" className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {current.lab.title}
          </h2>
          <p className="mt-2 text-sm text-fog/60">
            {lang === "zh"
              ? "GitHub 实时联动 + 科研成果 + 工具箱。"
              : "Live GitHub linkage + publications + toolkits."}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-fog/60">
          Lab Signal // 03
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="mb-4 text-sm tracking-widest text-cyan-200/80">
              {current.lab.liveRepos}
            </div>

            {repoState !== "ready" ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-20 animate-pulse rounded-2xl border border-white/10 bg-black/20"
                  />
                ))}
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {repos.map((r) => (
                  <div
                    key={r.name}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium text-fog/90">
                          {r.html_url ? (
                            <a
                              href={r.html_url}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:underline"
                            >
                              {r.name}
                            </a>
                          ) : (
                            r.name
                          )}
                        </div>
                        <div className="mt-1 text-xs text-fog/60">
                          {r.language ? `Lang: ${r.language}` : "Lang: —"}
                        </div>
                      </div>
                      <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5" />
                    </div>
                    <div className="mt-3 line-clamp-2 text-sm text-fog/70">
                      {r.description || (lang === "zh" ? "占位说明" : "Placeholder description")}
                    </div>
                    <div className="mt-3 text-xs text-fog/50">
                      {r.pushed_at
                        ? new Date(r.pushed_at).toLocaleDateString()
                        : lang === "zh"
                          ? "—"
                          : "—"}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {repoOk === false && (
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-fog/70">
                {current.lab.githubUnavailable}
                {repoReason ? <span className="block mt-2 text-fog/55">({repoReason})</span> : null}
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="text-sm tracking-widest text-cyan-200/80">
              {current.lab.publications}
            </div>
            <div className="mt-4 space-y-3">
              {lab.publications.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="text-xs tracking-widest text-fog/55">
                    {p.outlet}
                  </div>
                  <div className="mt-2 text-sm text-fog/85">
                    {p.title[lang]}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm tracking-widest text-cyan-200/80">
              {current.lab.toolkits}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {lab.toolkits.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-fog/75"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

