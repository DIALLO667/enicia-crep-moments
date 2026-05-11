import g1 from "@/assets/gallery/hero-bouquet.jpeg";
import g2 from "@/assets/gallery/birthday-arch.jpeg";
import g3 from "@/assets/gallery/marry-me.jpeg";
import g4 from "@/assets/gallery/bouquet-mixed.jpeg";
import g5 from "@/assets/gallery/bouquet-butterfly.jpeg";
import g6 from "@/assets/gallery/birthday-bouquet.jpeg";
import g7 from "@/assets/gallery/box-bear-amor.jpeg";
import g8 from "@/assets/gallery/box-white-bear.jpeg";

const items = [
  { src: g1, span: "row-span-2" },
  { src: g2, span: "" },
  { src: g3, span: "row-span-2" },
  { src: g4, span: "" },
  { src: g5, span: "" },
  { src: g6, span: "" },
  { src: g7, span: "row-span-2" },
  { src: g8, span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Galerie</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Instants <em className="text-gradient-gold not-italic">magiques</em>
          </h2>
          <p className="text-muted-foreground">Quelques unes de nos plus belles créations.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <div key={i} className={`${it.span} overflow-hidden rounded-2xl group relative shadow-soft`}>
              <img src={it.src} alt={`Création Eniciacrep ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
