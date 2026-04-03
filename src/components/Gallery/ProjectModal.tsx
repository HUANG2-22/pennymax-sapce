"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItem, InteractionModalExtra, GalleryCategory } from "@/content/gallery";
import { useI18n } from "@/components/i18n/I18nProvider";

function bilibiliWatchPageUrl(embedSrc: string): string | null {
  try {
    const u = new URL(embedSrc);
    const bvid = u.searchParams.get("bvid");
    if (bvid) return `https://www.bilibili.com/video/${bvid}`;
  } catch {
    /* ignore */
  }
  return null;
}

/** Prefer full web controls: no autoplay, widescreen, HQ, hide danmaku bar clutter */
function buildBilibiliEmbedSrc(raw: string): string {
  try {
    const u = new URL(raw);
    u.searchParams.set("autoplay", "0");
    u.searchParams.set("danmaku", "0");
    u.searchParams.set("high_quality", "1");
    u.searchParams.set("as_wide", "1");
    return u.toString();
  } catch {
    return raw;
  }
}

function BilibiliPlayerBlock({
  embedSrc,
  titleEn,
  lang,
}: {
  embedSrc: string;
  titleEn: string;
  lang: "en" | "zh";
}) {
  const src = buildBilibiliEmbedSrc(embedSrc);
  const openBili = bilibiliWatchPageUrl(embedSrc);
  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        {/* Taller than strict 16:9 at narrow widths so B站底部进度条/清晰度栏能露出来；可滚动卡片避免裁切 */}
        <div
          className="relative w-full bg-black"
          style={{
            height: "clamp(320px, min(56.25vw, 68vh), 580px)",
          }}
        >
          <iframe
            title={`Bilibili — ${titleEn}`}
            src={src}
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            scrolling="no"
            referrerPolicy="no-referrer"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture; clipboard-write; web-share"
          />
        </div>
      </div>
      {openBili ? (
        <p className="text-center text-xs leading-relaxed text-fog/55">
          <a
            href={openBili}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 underline-offset-2 hover:text-sky-300 hover:underline"
          >
            {lang === "zh"
              ? "若内嵌控件不完整，可在哔哩哔哩新窗口中观看（含完整进度与清晰度）"
              : "For full controls (progress & quality), open on Bilibili"}
          </a>
        </p>
      ) : null}
    </div>
  );
}

function categoryLine(categories: GalleryCategory[], lang: "en" | "zh") {
  const zh: Record<GalleryCategory, string> = {
    video: "视频",
    photo: "图像",
    interaction: "新媒体交互",
    exhibitions: "展览经历",
  };
  const en: Record<GalleryCategory, string> = {
    video: "Video",
    photo: "Photography",
    interaction: "New Media Interaction",
    exhibitions: "Exhibitions",
  };
  const map = lang === "zh" ? zh : en;
  return categories.map((c) => map[c]).join(" / ");
}

function InteractionExtraMedia({ extra }: { extra: InteractionModalExtra }) {
  switch (extra.layout) {
    case "single":
      return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <img
            src={extra.src}
            alt=""
            className="mx-auto h-auto max-h-[min(72vh,640px)] w-full object-contain"
            loading="lazy"
          />
        </div>
      );
    case "gif":
      return (
        <div className="mt-4 flex justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2">
          <img
            src={extra.src}
            alt=""
            className="max-h-[min(420px,55vh)] w-auto max-w-full object-contain"
            loading="lazy"
          />
        </div>
      );
    case "row3": {
      const lightRow = extra.lightSurface === true;
      return (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {extra.srcs.map((src) => (
            <div
              key={src}
              className={`flex min-h-[min(56vh,520px)] items-center justify-center overflow-hidden rounded-xl border p-3 sm:min-h-[min(60vh,560px)] ${
                lightRow
                  ? "border-neutral-200 bg-white"
                  : "border-white/10 bg-black/40"
              }`}
            >
              <img
                src={src}
                alt=""
                className="max-h-[min(56vh,520px)] w-full object-contain sm:max-h-[min(60vh,560px)]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      );
    }
    case "pair": {
      const light = extra.lightSurface === true;
      return (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {extra.srcs.map((src) => (
            <div
              key={src}
              className={`overflow-hidden rounded-2xl border p-3 sm:p-4 ${
                light
                  ? "border-neutral-200 bg-white"
                  : "border-white/10 bg-black/40"
              }`}
            >
              <img
                src={src}
                alt=""
                className="mx-auto h-auto max-h-[min(360px,50vh)] w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      );
    }
    default:
      return null;
  }
}

export function ProjectModal({
  open,
  item,
  onClose,
}: {
  open: boolean;
  item: GalleryItem | null;
  onClose: () => void;
}) {
  const { lang } = useI18n();

  const biliMedia =
    item?.media?.filter((m) => m.type === "bilibili") ?? [];
  const videoPlayerFirst =
    Boolean(item?.categories.includes("video")) && biliMedia.length > 0;
  const mediaRest =
    item?.media?.filter(
      (m) => !(videoPlayerFirst && m.type === "bilibili")
    ) ?? [];

  const modalMaxClass =
    biliMedia.length > 0
      ? "max-w-5xl"
      : item?.interactionDemo
        ? "max-w-4xl"
        : "max-w-3xl";

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <button
            type="button"
            className="absolute inset-0 z-0 bg-black/60"
            onClick={onClose}
            aria-label="Close modal"
          />

          <motion.div
            className={`relative z-10 mx-auto mt-12 w-full px-4 sm:mt-14 ${modalMaxClass}`}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex max-h-[calc(100vh-3rem)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/70 backdrop-blur sm:max-h-[calc(100vh-2.5rem)]">
              <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/[0.08] px-5 py-4 sm:px-6 sm:py-5">
                <div>
                  <div className="text-xs tracking-widest text-cyan-200/80">
                    {categoryLine(item.categories, lang)}
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold text-fog">
                    {item.title[lang]}
                  </h3>
                  <div className="mt-1 text-sm text-fog/70">{item.subtitle[lang]}</div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-fog/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
                >
                  Close
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-5 py-4 sm:px-6 sm:py-5">
                <p className="text-sm leading-relaxed text-fog/80">
                  {item.description[lang]}
                </p>

                <div className="mt-4 grid gap-3 sm:mt-5 md:grid-cols-2">
                  {item.details[lang].map((d) => (
                    <div
                      key={d}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-fog/75"
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {videoPlayerFirst ? (
                  <div className="mt-5 space-y-6 sm:mt-6">
                    {biliMedia.map((m, idx) =>
                      m.type === "bilibili" ? (
                        <BilibiliPlayerBlock
                          key={`bili-${idx}`}
                          embedSrc={m.embedSrc}
                          titleEn={item.title.en}
                          lang={lang}
                        />
                      ) : null,
                    )}
                  </div>
                ) : null}

                {item.interactionDemo ? (
                  <p className="mt-6 text-sm leading-relaxed">
                    <a
                      href={item.interactionDemo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-sky-400 hover:text-sky-300"
                    >
                      {lang === "zh"
                        ? item.interactionDemo.linkZh
                        : item.interactionDemo.linkEn}
                    </a>
                  </p>
                ) : null}

                {item.interactionDemo?.extras ? (
                  <InteractionExtraMedia extra={item.interactionDemo.extras} />
                ) : null}

                {mediaRest.length ? (
                  <div className="mt-6 space-y-4">
                    {mediaRest.map((m, idx) => {
                      if (m.type === "video") {
                        return (
                          <div
                            key={`${m.type}-${idx}`}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-black/40"
                          >
                            <video
                              controls
                              playsInline
                              preload="metadata"
                              poster={m.poster}
                              className="h-auto w-full"
                            >
                              <source src={m.src} />
                            </video>
                          </div>
                        );
                      }

                      if (m.type === "bilibili") {
                        return (
                          <BilibiliPlayerBlock
                            key={`${m.type}-${idx}`}
                            embedSrc={m.embedSrc}
                            titleEn={item.title.en}
                            lang={lang}
                          />
                        );
                      }

                      return (
                        <div
                          key={`${m.type}-${idx}`}
                          className="grid gap-3 md:grid-cols-2"
                        >
                          {m.images.map((img) => (
                            <a
                              key={img.src}
                              href={img.src}
                              target="_blank"
                              rel="noreferrer"
                              className="group overflow-hidden rounded-2xl border border-white/10 bg-black/40"
                            >
                              <img
                                src={img.src}
                                alt={img.alt[lang]}
                                className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </a>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                ) : null}

                {item.links?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-fog/75 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
                      >
                        {l.label[lang]}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

