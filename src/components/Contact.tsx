const Contact = () => {
  return <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Contact
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Project inquiries e-mail to <a href="mailto:info@collinadolce.com" className="text-foreground hover:underline">info@collinadolce.com</a> or call <a href="tel:+46708400081" className="text-foreground hover:underline">+46 708 400081</a>.
        </p>
      </div>
    </section>;
};
export default Contact;