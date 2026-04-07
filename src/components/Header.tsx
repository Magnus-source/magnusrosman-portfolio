import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-8 md:px-14 py-5 flex items-center justify-end">
        <div className="flex items-center gap-10">
          <button
            onClick={() => scrollToSection("about")}
            className="text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
