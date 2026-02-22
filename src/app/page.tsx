import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { AppPreview } from "@/components/app-preview";
import { Features } from "@/components/features";
import { OpenSource } from "@/components/open-source";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
