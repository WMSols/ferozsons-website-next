"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function OrbLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasEl = canvas;
    const canvasCtx = ctx;
    let raf: number;

    const LINE_COUNT = 38;
    const CENTER_X_FRAC = 0.5;
    const CENTER_Y_FRAC = 1.08; // slightly below canvas bottom = orb center

    function rand(a: number, b: number) {
      return a + Math.random() * (b - a);
    }

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    type Line = {
      startX: number;
      startY: number;
      cx: number;
      cy: number;
      dist: number;
      len: number;
      speed: number;
      opacity: number;
      progress: number;
    };

    function spawnLine(cx: number, cy: number): Line {
      const angle = rand(0, Math.PI * 2);
      const dist = rand(
        120,
        Math.min(canvasEl.offsetWidth, canvasEl.offsetHeight) * 0.85,
      );
      return {
        startX: cx + Math.cos(angle) * dist,
        startY: cy + Math.sin(angle) * dist,
        cx,
        cy,
        dist,
        len: rand(20, 55),
        speed: rand(0.6, 1.8),
        opacity: rand(0.15, 0.5),
        progress: Math.random(),
      };
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvasEl.width = canvasEl.offsetWidth * dpr;
      canvasEl.height = canvasEl.offsetHeight * dpr;
      canvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    const lines: Line[] = Array.from({ length: LINE_COUNT }, () => {
      const cx = canvasEl.offsetWidth * CENTER_X_FRAC;
      const cy = canvasEl.offsetHeight * CENTER_Y_FRAC;
      return spawnLine(cx, cy);
    });

    function tick() {
      canvasCtx.clearRect(0, 0, canvasEl.offsetWidth, canvasEl.offsetHeight);

      const cx = canvasEl.offsetWidth * CENTER_X_FRAC;
      const cy = canvasEl.offsetHeight * CENTER_Y_FRAC;

      for (const l of lines) {
        l.progress += l.speed * 0.004;

        if (l.progress >= 1) {
          Object.assign(l, spawnLine(cx, cy));
          l.progress = 0;
        }

        const ease = l.progress * l.progress * (3 - 2 * l.progress);
        const tailT = Math.max(0, ease - l.len / l.dist);

        const hx = lerp(l.startX, cx, ease);
        const hy = lerp(l.startY, cy, ease);
        const tx = lerp(l.startX, cx, tailT);
        const ty = lerp(l.startY, cy, tailT);

        const fade = Math.sin(ease * Math.PI);

        canvasCtx.beginPath();
        canvasCtx.moveTo(tx, ty);
        canvasCtx.lineTo(hx, hy);
        canvasCtx.strokeStyle = `rgba(200, 210, 230, ${l.opacity * fade})`;
        canvasCtx.lineWidth = rand(0.5, 1.1);
        canvasCtx.stroke();
      }

      raf = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}

export function Hero() {
  return (
    <section className="sticky top-0 h-screen overflow-hidden bg-[#1a1a1a] px-4 pb-0 pt-14 sm:pt-18">
      <OrbLines />
      <div className="relative z-10 mx-auto flex max-w-300 flex-col items-center text-center">
        <h1 className="font-kaisei font-bold">
          <motion.span
            className="block text-[42px] leading-10 tracking-normal text-[#aaaaaa] sm:text-[64px] sm:leading-15 md:text-[80px] md:leading-19 lg:text-[96px] lg:leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Medical
          </motion.span>
          <motion.span
            className="block text-[42px] leading-10 tracking-normal text-white sm:text-[64px] sm:leading-15 md:text-[80px] md:leading-19 lg:text-[96px] lg:leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.15,
            }}
          >
            Technologies
          </motion.span>
        </h1>

        <motion.p
          className="mt-3 max-w-xl font-sans text-[14px] leading-[100%] font-semibold tracking-normal text-[#666666] sm:text-[16px] md:text-[20px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
        >
          At Ferozsons Laboratories Limited, we bring global medical
          technologies to Pakistan&apos;s healthcare system.
        </motion.p>

        <motion.div
          className="relative z-0 mt-8 h-[clamp(320px,84vw,1000px)] w-[clamp(320px,84vw,1000px)] sm:-mt-24 md:-mt-36 lg:-mt-44"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <Image
            src="/medical-technologies/hero-sphere.png"
            alt="Ferozsons sphere"
            fill
            className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
