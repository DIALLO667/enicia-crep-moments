const PHONE = "221767600898";
const defaultMsg = "Bonjour Eniciacrep ! J'aimerais en savoir plus sur vos créations.";

export function Contact() {
  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center space-y-10">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Contact</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Offrons ensemble une <em className="text-gradient-gold not-italic">émotion</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Une occasion à célébrer ? Écrivez-nous directement sur WhatsApp ou Instagram —
            nous composons la surprise idéale, sur-mesure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-xl mx-auto">
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent(defaultMsg)}`}
            target="_blank"
            rel="noopener"
            className="group flex items-center gap-4 p-5 rounded-2xl bg-cream hover:bg-rose transition-colors text-left"
          >
            <span className="h-12 w-12 shrink-0 rounded-full gradient-gold flex items-center justify-center text-background font-bold">W</span>
            <div>
              <div className="font-medium text-foreground">WhatsApp</div>
              <div className="text-sm text-muted-foreground">+221 76 760 08 98</div>
            </div>
          </a>
          <a
            href="https://instagram.com/eniciacrep"
            target="_blank"
            rel="noopener"
            className="group flex items-center gap-4 p-5 rounded-2xl bg-cream hover:bg-rose transition-colors text-left"
          >
            <span className="h-12 w-12 shrink-0 rounded-full gradient-gold flex items-center justify-center text-background font-bold">@</span>
            <div>
              <div className="font-medium text-foreground">Instagram</div>
              <div className="text-sm text-muted-foreground">@eniciacrep</div>
            </div>
          </a>
        </div>

        <a
          href={`https://wa.me/${PHONE}?text=${encodeURIComponent(defaultMsg)}`}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-foreground text-background hover:bg-rose-deep transition-colors hover:shadow-luxe"
        >
          Écrire sur WhatsApp
        </a>
      </div>
    </section>
  );
}
