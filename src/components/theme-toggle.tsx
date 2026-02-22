"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunMoonIcon } from "@/components/ui/sun-moon";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-8 h-8 rounded-md
                 text-fg-muted hover:text-fg transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      <SunMoonIcon size={18} />
    </button>
  );
}
