"use client";

import { motion } from "motion/react";
import { HeartIcon } from "@/components/ui/heart";

export function OpenSource() {
  return (
    <section className="mx-auto max-w-[640px] px-6 pb-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <div className="inline-flex items-center gap-2 text-fg-muted
                        text-[13px]">
          <HeartIcon size={16} />
          <span>Open Source</span>
        </div>

        <h2 className="text-[24px] font-semibold tracking-tight text-fg">
          Free and open source
        </h2>

        <p className="text-[14px] leading-relaxed text-fg-muted max-w-md">
          Markdown Now is MIT licensed. The source code is available on GitHub.
          Contributions are welcome.
        </p>

        <a
          href="https://github.com/therealechan/non_markdown_editor_web"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-[6px]
                     border border-surface-border bg-surface px-5 py-2.5
                     text-[14px] font-medium text-fg transition-transform
                     hover:-translate-y-[1px] active:scale-[0.98]"
        >
          View on GitHub
        </a>
      </motion.div>
    </section>
  );
}
