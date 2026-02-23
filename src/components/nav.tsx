"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { GithubIcon } from "@/components/ui/github";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-surface-border
                    bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center
                      justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-fg">
          <Logo size={26} />
          <span className="text-[14px] font-semibold tracking-tight">
            Markdown Now
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href="https://github.com/therealechan/nowornever_markdown_editor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-md
                       text-fg-muted hover:text-fg transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}
