import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold tracking-wider hover:text-primary transition-colors"
        >
          DIRECTOR
        </button>
        <ul className="flex gap-8">
          <li>
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm tracking-widest hover:text-primary transition-colors uppercase"
            >
              Work
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm tracking-widest hover:text-primary transition-colors uppercase"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm tracking-widest hover:text-primary transition-colors uppercase"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
