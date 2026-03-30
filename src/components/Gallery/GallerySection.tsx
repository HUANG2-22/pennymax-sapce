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

  const [filter, setFilter] = useState<
    "all" | GalleryCategory
  >("all");

  const filteredItems = useMemo(() => {
    if (filter === "all") return gallery.items;
    return gallery.items.filter((it) => it.categories.includes(filter));
  }, [filter]);

  const [openItem, setOpenItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {current.gallery.title}
          </h2>
          <p className="mt-2 text-sm text-fog/60">
            {lang === "zh"
              ? "按类型筛选：视频 / 静态摄影 / 新媒体交互。"
              : "Filter by type: Video / Static / New Media Interaction."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {gallery.filters.map((f) => {
            const key = f.key === "all" ? "all" : f.key;
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

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <ProjectCard
            key={item.id}
            item={item}
            onOpen={() => setOpenItem(item)}
          />
        ))}
      </div>

      <ProjectModal
        open={openItem !== null}
        item={openItem}
        onClose={() => setOpenItem(null)}
      />
    </section>
  );
}

