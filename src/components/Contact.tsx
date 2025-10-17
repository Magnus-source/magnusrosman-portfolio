import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Let's Create Together
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life. Email to Collinadolce: info@collinadolce.com and describe your request.</p>
        <div className="flex gap-6 justify-center">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>;
};
export default Contact;