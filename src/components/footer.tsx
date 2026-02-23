import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="mx-auto flex flex-col sm:flex-row max-w-[1080px] items-center
                      sm:justify-between gap-4 sm:gap-0 px-6 py-6 text-[13px] text-fg-muted">
        <div className="flex items-center gap-2.5">
          <Logo size={22} />
          <span>Markdown Now</span>
        </div>

        <span>
          &copy; 2026{" "}
          <a
            href="https://0xechan.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors"
          >
            echanxyz
          </a>
        </span>
      </div>
    </footer>
  );
}
