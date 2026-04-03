"use client";

import React from "react";
import type { GalleryItem, GalleryCategory } from "@/content/gallery";
import { useI18n } from "@/components/i18n/I18nProvider";

export function ProjectCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: () => void;
}) {
  const { lang } = useI18n();
  const catLabel: Record<GalleryCategory, string> =
    lang === "zh"
      ? { video: "视频", photo: "图像", interaction: "新媒体交互", exhibitions: "展览经历" }
      : { video: "Video", photo: "Photography", interaction: "New Media Interaction", exhibitions: "Exhibitions" };

  const useVideoLayout =
    item.categories.includes("video") || item.categories.includes("interaction");

  /** EN: align cover focal area with neighbors in the 2-col interaction grid */
  const coverBgAlign =
    lang === "en" &&
    item.categories.includes("interaction") &&
    (item.id === "cloud-museum" || item.id === "memoji-flat")
      ? "bg-top"
      : "bg-center";

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group flex h-full w-full flex-col overflow-hidden border border-white/10 bg-white/5 text-left transition hover:border-cyan-300/30 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50 ${
        useVideoLayout ? "rounded-t-none rounded-b-3xl" : "rounded-3xl"
      }`}
      aria-label={`Open project: ${item.title.en}`}
    >
      {item.coverImage ? (
        <div
          className={`relative w-full shrink-0 ${
            useVideoLayout
              ? "h-56 border border-white/15 rounded-none overflow-hidden"
              : "h-40"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover ${coverBgAlign}`}
            style={{ backgroundImage: `url(${item.coverImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
        </div>
      ) : null}

      <div className="flex min-h-0 flex-1 flex-col p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs tracking-widest text-cyan-200/80">
            {item.categories.map((c) => catLabel[c]).join(" / ")}
          </div>
          <div className="mt-2 text-base font-semibold text-fog">
            {item.title[lang]}
          </div>
          <div className="mt-1 text-sm text-fog/70">
            {item.subtitle[lang]}
          </div>
        </div>

        <div className="mt-1 h-10 w-10 shrink-0 rounded-2xl border border-white/10 bg-black/20 shadow-neon/0 transition group-hover:shadow-neon" />
      </div>

      <div className="mt-4 line-clamp-3 text-sm text-fog/65">
        {item.description[lang]}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-fog/50">↗ Preview</div>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/40 to-transparent ml-3" />
      </div>
      </div>
    </button>
  );
}

