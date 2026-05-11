import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import g1 from "@/assets/gallery/hero-bouquet.jpeg";
import g2 from "@/assets/gallery/birthday-arch.jpeg";
import g3 from "@/assets/gallery/marry-me.jpeg";
import g4 from "@/assets/gallery/bouquet-mixed.jpeg";
import g5 from "@/assets/gallery/bouquet-butterfly.jpeg";
import g6 from "@/assets/gallery/birthday-bouquet.jpeg";
import g7 from "@/assets/gallery/box-bear-amor.jpeg";
import g8 from "@/assets/gallery/box-white-bear.jpeg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8];

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

        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative"
        >
          <CarouselContent className="-ml-4">
            {images.map((src, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-[80%] sm:basis-[55%] md:basis-[40%] lg:basis-[30%]"
              >
                <div className="overflow-hidden rounded-2xl group relative shadow-soft aspect-[4/5]">
                  <img
                    src={src}
                    alt={`Création Eniciacrep ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-6 bg-background/90 border-gold/40" />
          <CarouselNext className="right-2 md:-right-6 bg-background/90 border-gold/40" />
        </Carousel>
      </div>
    </section>
  );
}
