import { User } from "lucide-react";

const About = () => {
  return <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          About
        </h2>
        
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-12 items-start">
          {/* Portrait */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden bg-card border-2 border-primary/20 shadow-[var(--shadow-glow)]">
              {/* Placeholder - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-card">
                <User className="w-24 h-24 text-primary/40" />
              </div>
              {/* Uncomment and use this when you have your photo:
              <img 
                src="/path-to-your-photo.jpg" 
                alt="Magnus Rösman"
                className="w-full h-full object-cover"
              />
              */}
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>Since 1999 Magnus has created catchy high-end commercials, music videos, tv-series and documentaries with a warm human touch often finding the laugh in life's mishaps.</p>
            <p>During 2025 Magnus produced the much appreciated 4-part documentary, "When we were kings - Avslutet", about the end of the much loved football podcast with Erik Niva and Håkan Andreason. The documentary premiered on Viaplay in May, 2025.</p>
            <p>
              Strong visual storytelling became Magnus' trade mark in his early career as he won numerous international awards for music videos and commercials for car brands like Mercedes and Honda. Artists include the likes of Turbonegro, The Ark, Håkan Hellström, Jay Jay Johansson and many more.
            </p>
            <p>
              Magnus later developed an unrivaled ability to create funny characters and efficient dialogue for Swedish supermarket chain ICA. More than 100 films over an 8 year period earned him an array of international awards for the ICA project and it moved him into writing and directing drama for Swedish Television.
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
        </div>
      </div>
    </section>;
};
export default About;