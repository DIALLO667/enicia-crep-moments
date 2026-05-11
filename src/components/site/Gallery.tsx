import { useState } from "react";
import { MessageCircle } from "lucide-react";
import g1 from "@/assets/gallery/hero-bouquet.jpeg";
import g2 from "@/assets/gallery/birthday-arch.jpeg";
import g3 from "@/assets/gallery/marry-me.jpeg";
import g4 from "@/assets/gallery/bouquet-mixed.jpeg";
import g5 from "@/assets/gallery/bouquet-butterfly.jpeg";
import g6 from "@/assets/gallery/birthday-bouquet.jpeg";
import g7 from "@/assets/gallery/box-bear-amor.jpeg";
import g8 from "@/assets/gallery/box-white-bear.jpeg";
import g9 from "@/assets/gallery/breakfast-box.jpeg";
import g10 from "@/assets/gallery/breakfast-pastries.jpeg";
import g11 from "@/assets/gallery/box-jetaime.jpeg";

const PHONE = "221767600898";

type Category = "Tous" | "Bouquets" | "Box" | "Petits-déjeuners" | "Événementiel";

type Item = {
  src: string;
  title: string;
  category: Exclude<Category, "Tous">;
};

const items: Item[] = [
  { src: g1, title: "Bouquet Romance", category: "Bouquets" },
  { src: g4, title: "Bouquet Mixte", category: "Bouquets" },
  { src: g5, title: "Bouquet Papillon", category: "Bouquets" },
  { src: g6, title: "Bouquet Anniversaire", category: "Bouquets" },
  { src: g11, title: "Box Je t'aime", category: "Box" },
  { src: g7, title: "Box Ourson Amor", category: "Box" },
  { src: g8, title: "Box Ourson Blanc", category: "Box" },
  { src: g9, title: "Petit-déjeuner Surprise", category: "Petits-déjeuners" },
  { src: g10, title: "Petit-déjeuner Pâtisseries", category: "Petits-déjeuners" },
  { src: g2, title: "Arche d'anniversaire", category: "Événementiel" },
  { src: g3, title: "Décor Marry Me", category: "Événementiel" },
];

const categories: Category[] = ["Tous", "Bouquets", "Box", "Petits-déjeuners", "Événementiel"];

const waLink = (title: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Bonjour Eniciacrep ! Je suis intéressé(e) par "${title}". Pouvez-vous me donner plus d'informations ?`,
  )}`;

export function Gallery() {
  const [active, setActive] = useState<Category>("Tous");
  const filtered = active === "Tous" ? items : items.filter((i) => i.category === active);

  return (
    <section id="gallery" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Galerie</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Nos <em className="text-gradient-gold not-italic">créations</em>
          </h2>
          <p className="text-muted-foreground">
            Choisissez une catégorie, trouvez votre coup de cœur et commandez en un clic.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm transition-all border ${
                active === c
                  ? "bg-foreground text-background border-foreground shadow-soft"
                  : "bg-background text-foreground border-gold/30 hover:border-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {filtered.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="group relative overflow-hidden rounded-2xl shadow-soft aspect-[4/5] bg-cream"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Floating WhatsApp button */}
              <a
                href={waLink(item.title)}
                target="_blank"
                rel="noopener"
                aria-label={`Commander ${item.title} sur WhatsApp`}
                className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/90 backdrop-blur text-foreground flex items-center justify-center shadow-soft hover:bg-gold hover:text-background transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              {/* Title overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  {item.category}
                </div>
                <div className="font-serif text-sm md:text-base text-white leading-tight">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            Aucune création dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </section>
  );
}
