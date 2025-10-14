const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          About
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            With over a decade of experience crafting visual narratives, I specialize in creating
            compelling commercial films that connect brands with their audiences on an emotional level.
          </p>
          <p>
            My approach combines cinematic storytelling with strategic brand messaging, resulting in
            content that not only looks beautiful but drives real business results.
          </p>
          <p>
            From concept development to final delivery, I work closely with brands and agencies to
            bring their vision to life through the power of film.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-4xl font-bold text-primary mb-2">10+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">200+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Films Directed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">50+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Global Brands</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">15+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
