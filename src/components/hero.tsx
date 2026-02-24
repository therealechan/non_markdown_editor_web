"use client";

import { motion } from "motion/react";
import { ZapIcon } from "@/components/ui/zap";
import { DownloadIcon } from "@/components/ui/download";

const fadeSlideIn = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="mx-auto max-w-[1080px] px-6 pt-16 sm:pt-24 pb-16
                        flex flex-col items-center text-center">
      <motion.div
        className="mb-6 inline-flex items-center gap-2 rounded-full
                   border border-surface-border bg-surface px-4 py-1.5
                   text-[13px] text-fg-muted"
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeSlideIn}
      >
        <ZapIcon size={14} />
        <span>GPU-accelerated · 6 MB · macOS only</span>
      </motion.div>

      <motion.h1
        className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.03em] text-fg"
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeSlideIn}
      >
        Markdown Now
      </motion.h1>

      <motion.p
        className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-fg-muted"
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeSlideIn}
      >
        A fast, native macOS markdown editor with live preview.
        Built with Rust and GPUI.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeSlideIn}
      >
        <a
          href="/download/Markdown-Now.dmg"
          className="inline-flex items-center gap-2 rounded-[6px]
                     bg-accent-bg text-accent-fg px-5 py-2.5 text-[14px]
                     font-medium transition-transform
                     hover:-translate-y-[1px] active:scale-[0.98]"
        >
          <DownloadIcon size={16} />
          Download for macOS
        </a>
      </motion.div>
    </section>
  );
}
