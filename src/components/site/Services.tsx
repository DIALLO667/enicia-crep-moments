import bouquet from "@/assets/gallery/bouquet-butterfly.jpeg";
import box from "@/assets/gallery/box-jetaime.jpeg";
import birthday from "@/assets/gallery/breakfast-box.jpeg";
import event from "@/assets/gallery/marry-me.jpeg";

const PHONE = "221767600898";

const services = [
  {
    img: bouquet,
    title: "Bouquets Signature",
    desc: "Des compositions florales fraîches et raffinées pour exprimer l'inexprimable.",
    msg: "Bonjour Eniciacrep ! Je suis intéressé(e) par vos Bouquets Signature. Pouvez-vous me donner plus d'informations ?",
  },
  {
    img: box,
    title: "Box Surprises",
    desc: "Plus qu'un cadeau, une véritable intention. Un condensé de bonheur dans un coffret personnalisé.",
    msg: "Bonjour Eniciacrep ! Je souhaite commander une Box Surprise. Pouvez-vous me guider ?",
  },
  {
    img: birthday,
    title: "Petits-Déjeuners",
    desc: "Réveillez vos proches avec une attention gourmande et chic, dressée comme un tableau.",
    msg: "Bonjour Eniciacrep ! Je souhaite réserver un Petit-Déjeuner surprise. Pouvez-vous m'aider ?",
  },
  {
    img: event,
    title: "Décoration & Événementiel",
    desc: "Nous transformons vos espaces pour des célébrations mémorables et cousues main.",
    msg: "Bonjour Eniciacrep ! J'aimerais en savoir plus sur votre service Décoration & Événementiel.",
  },
];

const waLink = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export function Services() {
  return (
    <section id="services" className="py-28 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Nos services</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Le cœur de notre <em className="text-gradient-gold not-italic">savoir-faire</em>
          </h2>
          <p className="text-sm text-muted-foreground">Cliquez sur une offre pour commander directement sur WhatsApp.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((s) => (
            <a
              key={s.title}
              href={waLink(s.msg)}
              target="_blank"
              rel="noopener"
              className="group bg-background rounded-3xl overflow-hidden shadow-soft hover:shadow-luxe transition-all duration-500 hover:-translate-y-2 block"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center text-sm text-rose-deep group-hover:text-gold transition-colors pt-2">
                  Commander sur WhatsApp <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
