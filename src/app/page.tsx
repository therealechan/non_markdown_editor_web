import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { AppPreview } from "@/components/app-preview";
import { Features } from "@/components/features";
import { OpenSource } from "@/components/open-source";
import { Footer } from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Markdown Now",
  url: "https://md.nowornever.work",
  description:
    "A fast, GPU-accelerated macOS markdown editor with live side-by-side preview, syntax highlighting, and rich text copy. Built with Rust and GPUI.",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS",
  license: "https://opensource.org/licenses/MIT",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: {
    "@type": "Person",
    name: "therealechan",
    url: "https://0xechan.xyz",
  },
  downloadUrl:
    "https://github.com/therealechan/non_markdown_editor_web/releases",
  softwareVersion: "0.1.0",
  programmingLanguage: "Rust",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Markdown Now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markdown Now is a free, open-source, native macOS markdown editor built with Rust and GPUI. It features GPU-accelerated rendering, live side-by-side preview, syntax highlighting, and rich text copy.",
      },
    },
    {
      "@type": "Question",
      name: "Is Markdown Now free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Markdown Now is completely free and open source under the MIT license.",
      },
    },
    {
      "@type": "Question",
      name: "Does Markdown Now use Electron?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Markdown Now is a fully native macOS application built with Rust and GPUI. It uses GPU-accelerated rendering with no web views or Electron.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <AppPreview />
        <Features />
        <OpenSource />
      </main>
      <Footer />
    </div>
  );
}
