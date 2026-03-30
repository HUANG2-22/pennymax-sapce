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
      ? { video: "视频", photo: "静态摄影", interaction: "新媒体交互" }
      : { video: "Video", photo: "Static Photography", interaction: "New Media Interaction" };

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full rounded-3xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-cyan-300/30 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
      aria-label={`Open project: ${item.title.en}`}
    >
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
    </button>
  );
}

