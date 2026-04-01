"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { ui } from "@/content/i18n";
import { useI18n } from "@/components/i18n/I18nProvider";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number; // 0..1
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function InteractionHero() {
  const { lang } = useI18n();
  const current = ui[lang];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const palette = useMemo(
    () => ({
      cyan: { r: 0, g: 255, b: 255 },
      magenta: { r: 200, g: 0, b: 255 },
      ink: { r: 7, g: 10, b: 18 },
    }),
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      width = Math.floor(rect.width * dpr);
      height = Math.floor(rect.height * dpr);
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      particles.length = 0;
      const count = clamp(Math.floor((rect.width * rect.height) / 20000), 18, 90);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.1,
          vy: (Math.random() - 0.5) * 1.1,
          life: Math.random(),
        });
      }
    };

    const draw = (t: number) => {
      const time = t * 0.001;
      // Clear with subtle persistence for trailing effect
      ctx.fillStyle = `rgba(${palette.ink.r},${palette.ink.g},${palette.ink.b},0.10)`;
      ctx.fillRect(0, 0, width, height);

      // Neon beams / signal lines
      for (const p of particles) {
        p.life += 0.008;
        if (p.life > 1) p.life = 0;

        const n = Math.sin(time + p.x * 0.002 + p.y * 0.002);
        const speed = 0.7 + (n + 1) * 0.25;

        p.x += p.vx * speed;
        p.y += p.vy * speed;

        // Wrap around
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const mix = (Math.sin(time * 0.6 + p.life * Math.PI * 2) + 1) / 2;
        const r = Math.round(
          palette.cyan.r * (1 - mix) + palette.magenta.r * mix
        );
        const g = Math.round(
          palette.cyan.g * (1 - mix) + palette.magenta.g * mix
        );
        const b = Math.round(
          palette.cyan.b * (1 - mix) + palette.magenta.b * mix
        );

        const alpha = 0.12 + (1 - p.life) * 0.32;
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 18, p.y - p.vy * 18);
        ctx.stroke();

        ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 1.1})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4 + (1 - p.life) * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    rafRef.current = requestAnimationFrame(draw);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [palette]);

  return (
    <section
      className="relative overflow-hidden pt-24"
      aria-label="Hero"
      style={{ minHeight: "75vh" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-300/90 shadow-neon" />
            <span className="text-xs tracking-widest text-cyan-200/90">
              Interaction Signal
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {current.hero.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-fog/80 sm:text-lg">
            {current.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#archive"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-fog/95 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
            >
              {current.hero.cta}
              <span className="ml-3 inline-block rotate-[-45deg] text-cyan-200/90">
                ↘
              </span>
            </a>

            <div className="max-w-md text-xs leading-relaxed text-fog/55 italic">
              {current.hero.atmosphere}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

