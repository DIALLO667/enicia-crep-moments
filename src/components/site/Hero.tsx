import hero from "@/assets/gallery/hero-bouquet.jpeg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden gradient-luxe">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--rose-deep) 0, transparent 45%)"
      }} />
      <div className="container mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="font-script text-3xl text-gradient-gold">Eniciacrep — Box</span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Créateur de <em className="text-gradient-gold not-italic">moments</em>
            <br />inoubliables.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            L'élégance au service de vos émotions. Bouquets, box surprises et
            petits-déjeuners gourmands livrés avec délicatesse.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-7 py-3.5 rounded-full bg-foreground text-background hover:bg-rose-deep transition-all hover:shadow-luxe">
              Réserver une surprise
            </a>
            <a href="#services" className="px-7 py-3.5 rounded-full border border-foreground/20 text-foreground hover:border-gold hover:bg-gold/10 transition-all">
              Découvrir nos box
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>Sur-mesure</span>
            <span className="h-px w-8 bg-gold" />
            <span>Livraison soignée</span>
            <span className="h-px w-8 bg-gold" />
            <span>Émotion garantie</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-10 -right-6 w-56 h-56 rounded-full bg-rose-deep/20 blur-3xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-luxe ring-1 ring-gold/30">
            <img src={hero} alt="Bouquet de roses rouges signature Eniciacrep" className="w-full h-[560px] object-cover" />
          </div>
          <div className="absolute -bottom-6 left-6 bg-background/95 backdrop-blur px-5 py-3 rounded-2xl shadow-soft">
            <p className="font-script text-2xl text-rose-deep leading-none">Avec amour</p>
            <p className="text-xs text-muted-foreground mt-1">Composé à la main</p>
          </div>
        </div>
      </div>
    </section>
  );
}
