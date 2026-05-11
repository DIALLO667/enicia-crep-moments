import { MessageCircle, Instagram, Phone, Sparkles, Music2 } from "lucide-react";
import bg from "@/assets/gallery/box-jetaime.jpeg";

const PHONE = "221767600898";
const defaultMsg = "Bonjour Eniciacrep ! J'aimerais en savoir plus sur vos créations.";
const waLink = `https://wa.me/${PHONE}?text=${encodeURIComponent(defaultMsg)}`;

export function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <img src={bg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-background/95 to-rose/40" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
            <Sparkles className="h-3.5 w-3.5" /> Contact
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Offrons ensemble une <em className="text-gradient-gold not-italic">émotion</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Une occasion à célébrer ? Écrivez-nous — nous composons la surprise idéale, sur-mesure.
          </p>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden bg-background/80 backdrop-blur-md shadow-luxe border border-gold/20">
          <div className="grid md:grid-cols-2">
            {/* Left: highlight */}
            <div className="relative p-10 md:p-12 gradient-gold text-background flex flex-col justify-between min-h-[340px]">
              <div className="space-y-3">
                <h3 className="font-serif text-3xl">Réservez votre surprise</h3>
                <p className="text-background/90 text-sm leading-relaxed max-w-sm">
                  Réponse rapide sur WhatsApp. Nous discutons de votre intention,
                  du destinataire et composons une création unique.
                </p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener"
                className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-background text-foreground font-medium hover:bg-foreground hover:text-background transition-colors w-fit"
              >
                <MessageCircle className="h-5 w-5" />
                Discuter sur WhatsApp
              </a>

              {/* Decorative dots */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            </div>

            {/* Right: channels */}
            <div className="p-8 md:p-10 space-y-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-cream hover:bg-rose transition-colors"
              >
                <span className="h-12 w-12 shrink-0 rounded-full bg-foreground text-background flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="font-medium text-foreground">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">+221 76 760 08 98</div>
                </div>
                <span className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>

              <a
                href="https://instagram.com/eniciacrep"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-cream hover:bg-rose transition-colors"
              >
                <span className="h-12 w-12 shrink-0 rounded-full bg-foreground text-background flex items-center justify-center">
                  <Instagram className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="font-medium text-foreground">Instagram</div>
                  <div className="text-sm text-muted-foreground">@eniciacrep</div>
                </div>
                <span className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>

              <a
                href="https://www.tiktok.com/@enicia1crep?_r=1&_t=ZS-962QU5APBXc"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-cream hover:bg-rose transition-colors"
              >
                <span className="h-12 w-12 shrink-0 rounded-full bg-foreground text-background flex items-center justify-center">
                  <Music2 className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="font-medium text-foreground">TikTok</div>
                  <div className="text-sm text-muted-foreground">@enicia1crep</div>
                </div>
                <span className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>

              <a
                href={`tel:+${PHONE}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-cream hover:bg-rose transition-colors"
              >
                <span className="h-12 w-12 shrink-0 rounded-full bg-foreground text-background flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="font-medium text-foreground">Appel direct</div>
                  <div className="text-sm text-muted-foreground">+221 76 760 08 98</div>
                </div>
                <span className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>

              <p className="text-xs text-muted-foreground text-center pt-2">
                Disponible du lundi au samedi · Livraison à Dakar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
