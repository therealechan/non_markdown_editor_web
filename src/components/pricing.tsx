"use client";

import { motion } from "motion/react";
import { DownloadIcon } from "@/components/ui/download";

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "",
    description: "Try Markdown Now with full functionality. No time limit on the trial.",
    buttonLabel: "Download Trial",
    accent: false,
  },
  {
    name: "Lifetime",
    price: "$9.99",
    period: "one-time",
    description: "One purchase, yours forever. All current and future updates included.",
    buttonLabel: "Buy Now",
    accent: true,
  },
];

export function Pricing() {
  return (
    <section className="mx-auto max-w-[640px] px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h2 className="text-[24px] font-semibold tracking-tight text-fg">
          Simple pricing
        </h2>
        <p className="mt-3 text-[14px] leading-relaxed text-fg-muted max-w-md mx-auto">
          Start with a free trial. When you&apos;re ready, unlock Markdown Now
          forever with a single purchase.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`rounded-[6px] border p-7 flex flex-col gap-4 ${
              plan.accent
                ? "border-accent-bg bg-surface"
                : "border-surface-border bg-surface"
            }`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariant}
          >
            <div className="flex items-center gap-2">
              <h3 className="text-[14px] font-semibold text-fg">{plan.name}</h3>
              {plan.accent && (
                <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-medium text-accent-fg">
                  Best value
                </span>
              )}
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-[28px] font-semibold tracking-tight text-fg">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-[13px] text-fg-muted">{plan.period}</span>
              )}
            </div>

            <p className="text-[13px] leading-relaxed text-fg-muted">
              {plan.description}
            </p>

            <a
              href="/download/Markdown-Now.dmg"
              className={`mt-auto inline-flex items-center justify-center gap-2 rounded-[6px]
                         px-5 py-2.5 text-[14px] font-medium transition-transform
                         hover:-translate-y-[1px] active:scale-[0.98] ${
                           plan.accent
                             ? "bg-accent-bg text-accent-fg"
                             : "border border-surface-border bg-surface text-fg"
                         }`}
            >
              <DownloadIcon size={16} />
              {plan.buttonLabel}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
