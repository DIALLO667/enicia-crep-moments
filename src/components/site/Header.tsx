import { useState, useEffect } from "react";
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      </div>
    </header>
  );
}
