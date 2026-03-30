"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItem } from "@/content/gallery";
import { useI18n } from "@/components/i18n/I18nProvider";

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
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            aria-label="Close modal"
          />

          <motion.div
            className="relative mx-auto mt-16 w-full max-w-3xl px-4"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="rounded-3xl border border-white/10 bg-black/70 p-6 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs tracking-widest text-cyan-200/80">
                    {item.categories.join(" / ")}
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

              <p className="mt-4 text-sm leading-relaxed text-fog/80">
                {item.description[lang]}
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {item.details[lang].map((d) => (
                  <div
                    key={d}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-fog/75"
                  >
                    {d}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-fog/55">
                {lang === "zh"
                  ? "提示：此处可替换为真实视频/图片/交互演示链接。"
                  : "Tip: replace this area with your real media links (video/images/interactive demo)."}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

