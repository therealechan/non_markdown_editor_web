"use client";

import { motion } from "motion/react";

export function AppPreview() {
  return (
    <section className="mx-auto max-w-[960px] px-6 pb-20">
      <motion.div
        className="overflow-hidden rounded-xl border border-surface-border
                   bg-surface shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-surface-border
                        px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 text-[12px] text-fg-muted font-mono">
            README.md — Markdown Now
          </span>
        </div>

        {/* Split pane */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[340px]">
          {/* Editor pane */}
          <div className="border-b md:border-b-0 md:border-r
                          border-surface-border p-5 font-mono text-[13px]
                          leading-[1.7] text-fg-muted">
            <EditorContent />
          </div>

          {/* Preview pane */}
          <div className="p-5 text-[14px] leading-[1.7] text-fg">
            <PreviewContent />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function EditorContent() {
  return (
    <pre className="whitespace-pre-wrap">
      <Line n={1} text="# Markdown Now" accent />
      <Line n={2} text="" />
      <Line n={3} text="A **fast**, native macOS markdown editor." />
      <Line n={4} text="" />
      <Line n={5} text="## Features" accent />
      <Line n={6} text="" />
      <Line n={7} text="- Live side-by-side preview" />
      <Line n={8} text="- Syntax highlighting" />
      <Line n={9} text="- GPU-accelerated rendering" />
      <Line n={10} text="" />
      <Line n={11} text="```rust" accent />
      <Line n={12} text='fn main() {' />
      <Line n={13} text='    println!("Hello!");' />
      <Line n={14} text="}" />
      <Line n={15} text="```" accent />
    </pre>
  );
}

function Line({ n, text, accent }: { n: number; text: string; accent?: boolean }) {
  return (
    <div className="flex">
      <span className="w-7 shrink-0 text-right mr-4 select-none opacity-30">
        {n}
      </span>
      <span className={accent ? "text-fg" : ""}>{text}</span>
    </div>
  );
}

function PreviewContent() {
  return (
    <div className="space-y-3">
      <h1 className="text-[22px] font-semibold tracking-tight text-fg">
        Markdown Now
      </h1>
      <p className="text-fg-muted">
        A <strong className="text-fg font-medium">fast</strong>, native macOS
        markdown editor.
      </p>
      <h2 className="text-[17px] font-semibold text-fg pt-1">Features</h2>
      <ul className="list-disc list-inside space-y-1 text-fg-muted">
        <li>Live side-by-side preview</li>
        <li>Syntax highlighting</li>
        <li>GPU-accelerated rendering</li>
      </ul>
      <div className="rounded-md bg-background border border-surface-border
                      p-3 font-mono text-[13px] text-fg-muted">
        <div>
          <span className="text-blue-400">fn</span>{" "}
          <span className="text-green-400">main</span>
          {"() {"}
        </div>
        <div className="pl-4">
          <span className="text-blue-400">println!</span>
          {"("}
          <span className="text-amber-400">{'"Hello!"'}</span>
          {");"}
        </div>
        <div>{"}"}</div>
      </div>
    </div>
  );
}
