import bg from "@/assets/gallery/hero-bg.jpeg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Box surprise Eniciacrep"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="container mx-auto px-6 pt-28 pb-20 relative">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="block text-gold uppercase tracking-[0.25em] text-sm md:text-base font-medium">
            Chaque box raconte une
          </span>
          <h1 className="font-serif font-bold text-white leading-[0.95] text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">
            HISTOIRE
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed pt-2">
            Bouquets, box surprises et petits-déjeuners gourmands —
            l'élégance au service de vos émotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              href="#services"
              className="px-8 py-4 rounded-sm bg-gold text-white text-center font-medium hover:bg-rose-deep transition-colors"
            >
              Découvrir nos offres
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-sm bg-white text-foreground text-center font-medium hover:bg-cream transition-colors"
            >
              Réserver une surprise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
