import bg from "@/assets/gallery/hero-bg.jpeg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Box surprise Eniciacrep avec ours, champagne et chocolats"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Subtle overlays — keep image crisp, just enough contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--rose-deep) 0, transparent 45%)"
      }} />

      <div className="container mx-auto px-6 pt-32 pb-20 relative">
        <div className="max-w-2xl space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="font-script text-3xl text-gradient-gold drop-shadow-sm">Eniciacrep — Box</span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white drop-shadow-lg">
            Créateur de <em className="text-gradient-gold not-italic">moments</em>
            <br />inoubliables.
          </h1>
          <p className="text-lg text-white/90 max-w-md leading-relaxed drop-shadow">
            L'élégance au service de vos émotions. Bouquets, box surprises et
            petits-déjeuners gourmands livrés avec délicatesse.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-7 py-3.5 rounded-full bg-white text-foreground hover:bg-rose-deep hover:text-white transition-all hover:shadow-luxe">
              Réserver une surprise
            </a>
            <a href="#services" className="px-7 py-3.5 rounded-full border border-white/50 text-white bg-white/10 backdrop-blur-sm hover:border-gold hover:bg-gold/20 transition-all">
              Découvrir nos box
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-xs uppercase tracking-[0.2em] text-white/80">
            <span>Sur-mesure</span>
            <span className="h-px w-8 bg-gold" />
            <span>Livraison soignée</span>
            <span className="h-px w-8 bg-gold" />
            <span>Émotion garantie</span>
          </div>
        </div>
      </div>
    </section>
  );
}
