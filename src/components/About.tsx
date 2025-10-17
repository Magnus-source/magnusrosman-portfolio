const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          About
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Magnus is a writer/director with an ability to create catchy and entertaining commercials as well as longer formats with a warm human touch.
          </p>
          <p>
            Strong visual storytelling became Magnus' trade mark in his early career and he won numerous international awards for music videos and commercials for car brands like Mercedes and Honda.
          </p>
          <p>
            He later developed an unrivaled ability to create funny characters and efficient dialogue for Swedish supermarket chain ICA. More than 100 films over an 8 year period earned him an array of international awards for the ICA project and it moved him into writing and directing drama for Swedish Television.
          </p>
          <p>
            With the dark comedy, Häxdansen, Magnus worked with the absolute elite of Swedish actor's and the 6 episode drama was nominated for Kristallen for Best Drama of the Year. Norwegian newspaper, Aftenposten, compared it with Lars von Trier's, Riket, and gave Häxdansen 5 out of 6.
          </p>
          <p>
            Magnus has an open and collaborative approach to all projects and often establishes long term relationships with clients that keep coming back making their collaborations span over many years as with ICA, McDonald's, German retailer EDEKA and Swedish artists Håkan Hellström and The Ark.
          </p>
          <p>
            Magnus also hold a Master's degree in Industrial Engineering and Economics from Chalmers University of Technology and University of California, Berkeley.
          </p>
          <p>
            When he is not writing or shooting Magnus produce high end olive oil from his own estate, Collinadolce, on the Italian east coast.
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
