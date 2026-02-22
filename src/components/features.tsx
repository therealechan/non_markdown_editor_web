"use client";

import { motion } from "motion/react";
import { EyeIcon } from "@/components/ui/eye";
import { SparklesIcon } from "@/components/ui/sparkles";
import { SunMoonIcon } from "@/components/ui/sun-moon";
import { MonitorCheckIcon } from "@/components/ui/monitor-check";
import { CopyIcon } from "@/components/ui/copy";
import { KeyboardIcon } from "@/components/ui/keyboard";

const features = [
  {
    icon: EyeIcon,
    title: "Live Preview",
    desc: "Side-by-side editing with instant rendered output as you type.",
  },
  {
    icon: SparklesIcon,
    title: "Syntax Highlighting",
    desc: "Code blocks rendered in monospace with distinct styling.",
  },
  {
    icon: SunMoonIcon,
    title: "Dark & Light Mode",
    desc: "Toggle with Cmd+Shift+D. Dark by default, switch anytime.",
  },
  {
    icon: MonitorCheckIcon,
    title: "Native macOS",
    desc: "GPU-accelerated via GPUI. No Electron, no web views.",
  },
  {
    icon: CopyIcon,
    title: "Rich Text Copy",
    desc: "Cmd+Shift+C copies rendered HTML to your clipboard.",
  },
  {
    icon: KeyboardIcon,
    title: "Keyboard Shortcuts",
    desc: "Native macOS key bindings for a seamless editing flow.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

export function Features() {
  return (
    <section className="mx-auto max-w-[1080px] px-6 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="rounded-[6px] border border-surface-border bg-surface
                       p-7 flex flex-col gap-3"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariant}
          >
            <f.icon size={22} className="text-fg-muted" />
            <h3 className="text-[14px] font-semibold text-fg">{f.title}</h3>
            <p className="text-[13px] leading-relaxed text-fg-muted">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
