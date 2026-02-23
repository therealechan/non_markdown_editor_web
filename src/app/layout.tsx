import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://md.nowornever.work";
const title = "Markdown Now — Native macOS Markdown Editor";
const description =
  "A fast, GPU-accelerated macOS markdown editor with live side-by-side preview, syntax highlighting, and rich text copy. Built with Rust and GPUI.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  keywords: [
    "markdown editor",
    "macOS markdown editor",
    "native markdown editor",
    "rust markdown editor",
    "GPUI",
    "live preview markdown",
    "GPU accelerated editor",
    "markdown now",
  ],
  authors: [{ name: "therealechan", url: "https://0xechan.xyz" }],
  creator: "therealechan",
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Markdown Now",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
