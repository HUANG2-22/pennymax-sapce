"use client";

import React, { useMemo, useState } from "react";
import { ui } from "@/content/i18n";
import { gallery, type GalleryCategory, type GalleryItem } from "@/content/gallery";
import { useI18n } from "@/components/i18n/I18nProvider";
import { ProjectCard } from "@/components/Gallery/ProjectCard";
import { ProjectModal } from "@/components/Gallery/ProjectModal";

export function GallerySection() {
  const { lang } = useI18n();
  const current = ui[lang];

  const [filter, setFilter] = useState<GalleryCategory>("video");

  const filteredItems = useMemo(() => {
    if (filter === "exhibitions") return [];
    if (filter === "photo") return [];
    return gallery.items.filter((it: any) => it.categories.includes(filter as any));
  }, [filter]);

  const [openItem, setOpenItem] = useState<GalleryItem | null>(null);
  const [openPhoto, setOpenPhoto] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="mx-auto max-w-6xl px-4 py-14"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {current.gallery.title}
          </h2>
          <p className="mt-2 text-sm text-fog/60">
            {lang === "zh"
              ? "按类型筛选：视频 / 图像 / 新媒体交互。"
              : "Filter by type: Video / Photography / New Media Interaction."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {gallery.filters.map((f) => {
            const key = f.key;
            const active = filter === key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(key)}
                className={`rounded-full border px-4 py-2 text-xs tracking-widest transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50 ${
                  active
                    ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100"
                    : "border-white/10 bg-white/5 text-fog/70 hover:bg-white/10"
                }`}
              >
                {f.label[lang]}
              </button>
            );
          })}
        </div>
      </div>

      {filter === "exhibitions" ? (
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="text-sm tracking-widest text-cyan-200/80">
            {lang === "zh" ? "展览经历" : "Exhibitions"}
          </div>
          <div className="mt-4 grid gap-1">
            {gallery.exhibitions.entries.map((e) => (
              <div
                key={e}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-[13px] leading-snug text-fog/75"
              >
                {e}
              </div>
            ))}
          </div>

          <div className="mt-6 flex h-32 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white">
            <img
              src={gallery.exhibitions.logoImage}
              alt="Museum logos"
              className="h-full w-full origin-center object-contain scale-[0.88]"
              loading="lazy"
            />
          </div>
        </div>
      ) : filter === "photo" ? (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.photographyImages.map((src, idx) => {
            const heights = [
              "h-56",
              "h-72",
              "h-64",
              "h-80",
              "h-60",
              "h-72",
              "h-64",
              "h-80",
              "h-56",
            ];
            const h = heights[idx % heights.length];
            return (
              <button
                key={src}
                type="button"
                onClick={() => setOpenPhoto(src)}
                className={`group overflow-hidden rounded-2xl border border-white/10 bg-black/20 text-left ${h} focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60`}
                aria-label={`Open photography image ${idx + 1}`}
              >
                <img
                  src={src}
                  alt={`Photography work ${idx + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      ) : (
        <div
          className={`mt-8 grid gap-4 ${
            filter === "video" || filter === "interaction"
              ? "md:grid-cols-2 md:items-start lg:grid-cols-2 lg:items-start"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filteredItems.map((item) => (
            <ProjectCard
              key={item.id}
              item={item}
              onOpen={() => setOpenItem(item)}
            />
          ))}
        </div>
      )}

      <ProjectModal
        open={openItem !== null}
        item={openItem}
        onClose={() => setOpenItem(null)}
      />

      {openPhoto ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenPhoto(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpenPhoto(null);
          }}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-fog/80 hover:bg-black/60"
            onClick={() => setOpenPhoto(null)}
            aria-label="Close photo preview"
          >
            Close
          </button>
          <img
            src={openPhoto}
            alt="Expanded photography artwork"
            className="max-h-[88vh] w-auto max-w-[95vw] rounded-xl border border-white/15 object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}

