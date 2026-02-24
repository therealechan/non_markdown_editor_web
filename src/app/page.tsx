import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { AppPreview } from "@/components/app-preview";
import { Pricing } from "@/components/pricing";
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
  offers: [
    { "@type": "Offer", name: "Free Trial", price: "0", priceCurrency: "USD" },
    { "@type": "Offer", name: "Lifetime", price: "9.99", priceCurrency: "USD" },
  ],
  author: {
    "@type": "Person",
    name: "therealechan",
    url: "https://0xechan.xyz",
  },
  downloadUrl: "/download/Markdown-Now.dmg",
  softwareVersion: "2.0",
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
        text: "Markdown Now is a fast, lightweight, native macOS markdown editor built with Rust and GPUI. It features GPU-accelerated rendering, live side-by-side preview, syntax highlighting, rich text copy, and full file management — all in a 6 MB download.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Markdown Now cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markdown Now offers a free trial with full functionality. When you're ready, a one-time $9.99 lifetime purchase unlocks the app forever, including all future updates.",
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
        {/* <Pricing /> */}
      </main>
      <Footer />
    </div>
  );
}
