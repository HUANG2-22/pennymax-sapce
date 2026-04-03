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
        const res = await fetch("/api/github/repos?limit=100");
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
          <p className="mt-2 text-sm text-fog/60">{current.lab.subLine}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-stretch">
        <div className="flex min-h-0 lg:col-span-2">
          <div className="flex h-full w-full min-h-0 flex-col rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="mb-4 shrink-0 text-sm tracking-widest text-cyan-200/80">
              {current.lab.liveRepos}
            </div>

            {repoState !== "ready" ? (
              <div className="grid flex-1 gap-3 sm:grid-cols-2 sm:content-start">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-20 animate-pulse rounded-2xl border border-white/10 bg-black/20"
                  />
                ))}
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {repos.map((r) => {
                  const codeUrl =
                    r.html_url ||
                    `https://github.com/${lab.githubUsername}/${encodeURIComponent(r.name)}`;
                  return (
                    <div
                      key={r.name}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium text-fog/90">
                            <a
                              href={codeUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:underline"
                            >
                              {r.name}
                            </a>
                          </div>
                          <div className="mt-1 text-xs text-fog/60">
                            {r.language ? `Lang: ${r.language}` : "Lang: —"}
                          </div>
                        </div>
                        <div className="h-9 w-9 shrink-0 rounded-xl border border-white/10 bg-white/5" />
                      </div>
                      <div className="mt-3 line-clamp-3 text-sm text-fog/70">
                        {r.description || "—"}
                      </div>
                      {r.pushed_at ? (
                        <div className="mt-2 text-xs text-fog/50">
                          {new Date(r.pushed_at).toLocaleDateString()}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            )}

            {repoOk === false ? (
              <div className="mt-4 shrink-0 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-fog/70">
                {current.lab.githubUnavailable}
                {repoReason ? (
                  <span className="mt-2 block text-fog/55">({repoReason})</span>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex min-h-0 lg:col-span-1">
          <div className="flex h-full w-full flex-col rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="shrink-0 text-sm tracking-widest text-cyan-200/80">
              {current.lab.publications}
            </div>
            <div className="mt-4 min-h-0 flex-1 space-y-4">
              {lab.publications.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="text-sm font-medium leading-snug text-fog/90">
                    {p.title}
                  </div>
                  <div className="mt-2 text-xs leading-relaxed text-fog/65">
                    <span className="text-fog/75">{p.journal}</span>
                    <span className="mx-1.5 text-fog/40">·</span>
                    <span>{p.year}</span>
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
