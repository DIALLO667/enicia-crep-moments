import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Eniciacrep ! Je m'appelle ${form.name} (${form.phone}). ${form.message}`;
    window.open(`https://wa.me/221767600898?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 max-w-6xl">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Contact</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Offrons ensemble une <em className="text-gradient-gold not-italic">émotion</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Dites-nous l'occasion, le destinataire, votre intention. Nous composons
            la surprise idéale.
          </p>
          <div className="space-y-4 pt-4">
            <a href="https://wa.me/221767600898" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-2xl bg-cream hover:bg-rose transition-colors group">
              <span className="h-11 w-11 rounded-full gradient-gold flex items-center justify-center text-background">W</span>
              <div>
                <div className="font-medium text-foreground">WhatsApp</div>
                <div className="text-sm text-muted-foreground">+221 76 760 08 98</div>
              </div>
            </a>
            <a href="https://instagram.com/eniciacrep" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-2xl bg-cream hover:bg-rose transition-colors">
              <span className="h-11 w-11 rounded-full gradient-gold flex items-center justify-center text-background">@</span>
              <div>
                <div className="font-medium text-foreground">Instagram</div>
                <div className="text-sm text-muted-foreground">@eniciacrep</div>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-cream rounded-3xl p-8 md:p-10 shadow-soft space-y-5">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Votre nom</label>
            <input
              required maxLength={80}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full bg-background border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Téléphone</label>
            <input
              required maxLength={30}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-2 w-full bg-background border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Votre projet</label>
            <textarea
              required maxLength={1000} rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full bg-background border border-border focus:border-gold rounded-xl outline-none p-3 text-foreground resize-none transition-colors"
            />
          </div>
          <button type="submit" className="w-full py-4 rounded-full bg-foreground text-background hover:bg-rose-deep transition-all hover:shadow-luxe">
            {sent ? "Envoyé ✓ — ouvrez WhatsApp" : "Envoyer ma demande"}
          </button>
        </form>
      </div>
    </section>
  );
}
