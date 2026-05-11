export function About() {
  return (
    <section id="about" className="py-28 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">À propos</span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground">
          L'art de transformer une <em className="text-gradient-gold not-italic">intention</em> en émotion
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Chez <strong className="text-foreground">Eniciacrep</strong>, chaque création raconte une histoire.
            Née d'une passion pour le détail et la beauté du geste, notre maison
            compose des surprises sur-mesure pour célébrer ceux que vous aimez.
          </p>
          <p>
            Du choix des fleurs fraîches à la sélection minutieuse de chaque
            douceur, nous mettons l'élégance au service de vos émotions —
            pour des moments suspendus, doux et inoubliables.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl mx-auto">
          {[
            { n: "500+", l: "Surprises livrées" },
            { n: "100%", l: "Sur-mesure" },
            { n: "5★", l: "Avis clients" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-serif text-3xl text-gradient-gold">{s.n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
