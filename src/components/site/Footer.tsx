export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-serif text-xl">
          Enicia<span className="text-gradient-gold">crep</span>
        </div>
        <p className="font-script text-2xl text-gold">L'élégance au service de vos émotions</p>
        <p className="text-xs text-background/60">© {new Date().getFullYear()} Eniciacrep — Box. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
