import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eniciacrep — Bouquets, Box surprises & Événementiel de luxe" },
      { name: "description", content: "Eniciacrep crée des moments inoubliables : bouquets signature, box surprises personnalisées, petits-déjeuners gourmands et décoration d'événements." },
      { property: "og:title", content: "Eniciacrep — Créateur de moments inoubliables" },
      { property: "og:description", content: "L'élégance au service de vos émotions. Bouquets, box, événementiel sur-mesure." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
