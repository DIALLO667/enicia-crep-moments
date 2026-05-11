const items = [
  {
    name: "Aïssatou D.",
    role: "Anniversaire surprise",
    text: "Une attention bouleversante. Le bouquet était sublime et la présentation digne d'un magazine.",
  },
  {
    name: "Moussa K.",
    role: "Demande en mariage",
    text: "Eniciacrep a transformé un simple soir en un moment hors du temps. Merci infiniment.",
  },
  {
    name: "Fatou S.",
    role: "Box St-Valentin",
    text: "Chaque détail était pensé. Mon copain a fondu en ouvrant la box. Je recommande les yeux fermés.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 gradient-luxe">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Témoignages</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Ce qu'ils ont <em className="text-gradient-gold not-italic">ressenti</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {items.map((t) => (
            <figure key={t.name} className="bg-background rounded-3xl p-8 shadow-soft hover:shadow-luxe transition-shadow">
              <div className="text-gold text-2xl tracking-widest">★★★★★</div>
              <blockquote className="mt-4 text-foreground/85 leading-relaxed font-serif italic">
                « {t.text} »
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
