import { useState, useEffect } from "react";

interface HeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Header = ({ activeCategory, onCategoryChange }: HeaderProps) => {
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
        scrolled ? "bg-background/95 backdrop-blur-lg" : "bg-background"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <ul className="flex gap-8">
          <li>
            <button
              onClick={() => onCategoryChange("commercial")}
              className={`text-sm tracking-widest transition-colors ${
                activeCategory === "commercial" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Commercial
            </button>
          </li>
          <li>
            <button
              onClick={() => onCategoryChange("longform")}
              className={`text-sm tracking-widest transition-colors ${
                activeCategory === "longform" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Long form
            </button>
          </li>
          <li>
            <button
              onClick={() => onCategoryChange("musicvideo")}
              className={`text-sm tracking-widest transition-colors ${
                activeCategory === "musicvideo" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Music video
            </button>
          </li>
        </ul>
        <ul className="flex gap-8">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm tracking-widest hover:text-primary transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm tracking-widest hover:text-primary transition-colors"
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
