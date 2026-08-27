import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mostafa Samir — Senior Full Stack Engineer | Banking & Fintech" },
      {
        name: "description",
        content:
          "Senior Full Stack Engineer with 4+ years building .NET 8 microservices, multi-tenant architectures and real-time platforms for banking and fintech systems.",
      },
      { property: "og:title", content: "Mostafa Samir — Banking & Fintech Full Stack Engineer" },
      {
        property: "og:description",
        content:
          "Scalable microservices, secure multi-tenant platforms and real-time SignalR backends built on .NET 8 for financial-grade reliability.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--surface-2)",
            color: "var(--foreground)",
            border: "1px solid var(--border)",
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
