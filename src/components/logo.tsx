"use client";

import { motion } from "motion/react";

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <motion.span
      className="font-mono font-bold text-fg select-none leading-none"
      style={{ fontSize: size * 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {"{M}"}
    </motion.span>
  );
}
