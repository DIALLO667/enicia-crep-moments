import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Galerie" },
  { href: "#testimonials", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const textColor = scrolled ? "text-foreground" : "text-white";
  const linkHover = scrolled ? "hover:text-rose-deep" : "hover:text-gold";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-soft py-3"
          : "bg-gradient-to-b from-black/40 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="EniciaCrep" className="h-11 w-11 rounded-full object-cover ring-2 ring-gold" />
          <span className={`font-serif text-xl tracking-wide ${textColor} drop-shadow`}>
            Enicia<span className="text-gradient-gold">crep</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`${textColor} ${linkHover} transition-colors drop-shadow`}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm transition-colors ${
            scrolled
              ? "bg-foreground text-background hover:bg-rose-deep"
              : "bg-white text-foreground hover:bg-gold hover:text-white"
          }`}
        >
          Réserver
        </a>

        {/* Burger - mobile */}
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className={`md:hidden p-2 -mr-2 ${textColor}`}
        >
          <Menu className="h-7 w-7 drop-shadow" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        <aside
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-background shadow-2xl p-8 flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-xl text-foreground">
              Enicia<span className="text-gradient-gold">crep</span>
            </span>
            <button aria-label="Fermer" onClick={() => setOpen(false)} className="p-2 -mr-2 text-foreground">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 border-b border-border text-foreground hover:text-rose-deep transition-colors text-lg font-serif"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground text-background hover:bg-rose-deep transition-colors"
          >
            Réserver une surprise
          </a>
        </aside>
      </div>
    </header>
  );
}
