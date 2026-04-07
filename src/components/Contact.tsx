import { Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Contact
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Project inquiries e-mail to{" "}
          <a href="mailto:info@collinadolce.com" className="text-foreground hover:underline">
            info@collinadolce.com
          </a>.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://instagram.com/magnusrosman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-[10px] tracking-[0.2em] uppercase">Instagram</span>
          </a>
          <div className="w-px h-4 bg-white/15" />
          <a
            href="https://linkedin.com/in/magnusrosman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-[10px] tracking-[0.2em] uppercase">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
