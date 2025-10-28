import magnusPortrait from "@/assets/magnus-portrait.png";
import erikNiva from "@/assets/erik-niva.png";
import hakanRockBjorn from "@/assets/hakan-rock-bjorn.jpeg";
import icaStig from "@/assets/ica-stig.png";
import oliveOilProduction from "@/assets/olive-oil-production.png";
const About = () => {
  return <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Magnus Rösman - Writer & Director
        </h1>
        
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-12 items-start">
          {/* Portrait and additional images */}
          <div className="flex flex-col gap-6 justify-center md:justify-start">
            {/* Magnus portrait */}
            <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden bg-card border-2 border-primary/20 shadow-[var(--shadow-glow)]">
              <img src={magnusPortrait} alt="Magnus Rösman - Director and Producer" className="w-full h-full object-cover" />
            </div>
            
            {/* Erik Niva */}
            <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden bg-card border-2 border-primary/20 shadow-[var(--shadow-glow)]">
              <img src={erikNiva} alt="Erik Niva from When We Were Kings documentary" className="w-full h-full object-cover" />
            </div>
            
            {/* Håkan Hellström with Rock-Björn */}
            <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden bg-card border-2 border-primary/20 shadow-[var(--shadow-glow)]">
              <img src={hakanRockBjorn} alt="Håkan Hellström with Rock-Björn award" className="w-full h-full object-cover" />
            </div>
            
            {/* ICA-Stig */}
            <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden bg-card border-2 border-primary/20 shadow-[var(--shadow-glow)]">
              <img src={icaStig} alt="ICA-Stig from the iconic ICA commercials" className="w-full h-full object-cover" />
            </div>
            
            {/* Olive oil production at Collinadolce */}
            <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden bg-card border-2 border-primary/20 shadow-[var(--shadow-glow)]">
              <img src={oliveOilProduction} alt="Olive oil production at Collinadolce estate" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>Since 1999, Swedish film director <strong>Magnus Rösman</strong> has created catchy commercials, music videos, TV drama series, and documentaries with a warm human touch—often finding the laugh in life's mishaps.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-4">Recent Work: Documentary Filmmaker</h2>
            <p>During 2025, Magnus produced and directed the critically acclaimed 4-part documentary series, <strong>"When We Were Kings - Avskedet"</strong>, chronicling the end of the beloved football podcast hosted by Erik Niva and Håkan Andreason. The documentary premiered on Viaplay in May 2025 to widespread appreciation.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-4">Music Videos & Visual Storytelling</h2>
            <p>Strong visual storytelling became Magnus' trademark in his early career, winning numerous international awards for music videos and commercials for premium car brands including Mercedes-Benz and Honda. The list of music video clients is long and include among others Swedish and international artists such as <strong>Håkan Hellström</strong>, <strong>The Ark</strong>, <strong>Turbonegro</strong>, <strong>Jay-Jay Johansson</strong>, <strong>Andreas Johnson</strong>, <strong>Hardcore Superstar</strong>, <strong>Brainstorm</strong>, <strong>Lambretta</strong>, <strong>Moneybrother</strong>, <strong>Lisa Miskovsky</strong>, <strong>Liberator</strong>, and <strong>Weeping Willows</strong>, creating memorable visual narratives that complement their music.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-4">ICA Commercials: Sweden's Most Beloved Ad Campaign</h2>
            <p>Magnus later developed an unrivaled ability to create funny characters and efficient dialogue as the director behind the iconic <strong>ICA commercials</strong> featuring ICA-Stig and his colleagues. Over a 5-year period, he wrote and directed more than 100 films for the Swedish supermarket chain ICA, earning international advertising awards and establishing one of Sweden's most recognized commercial campaigns. This success moved him into writing and directing drama for Swedish Television.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-4">TV Drama: Häxdansen</h2>
            <p>With the dark comedy series <strong>Häxdansen</strong>, Magnus worked with the absolute elite of Swedish actors, including <strong>Julia Dufvenius</strong>, <strong>Melinda Kinnaman</strong>, <strong>Sofia Ledarp</strong>, <strong>Livia Millhagen</strong>, <strong>Shanti Roney</strong>, <strong>Magnus Krepper</strong>, and <strong>Thomas Hanzon</strong>. The 6-episode drama was nominated for <strong>Kristallen</strong> for Best Drama of the Year. Norwegian newspaper Aftenposten compared it with Lars von Trier's "Riket" and awarded Häxdansen 5 out of 6 stars.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-4">Long-Term Creative Collaborations</h2>
            <p>Magnus enjoys working closely with clients, and many become long-term creative partners. <strong>ICA</strong>, <strong>McDonald's</strong>, German retailer <strong>EDEKA</strong>, and Swedish artists <strong>Håkan Hellström</strong>, <strong>The Ark</strong>, and <strong>Hardcore Superstar</strong> have all collaborated with him for many years, trusting his creative vision and storytelling expertise.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-4">Technical Background Meets Creative Innovation</h2>
            <p>Magnus Rösman holds a <strong>Master's degree in Industrial Engineering and Economics</strong> from Chalmers University of Technology and University of California, Berkeley. Today, he's combining that technical background with his creative expertise by studying <strong>AI and Machine Learning</strong>—exploring how generative AI can amplify creativity and make film production more efficient.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-4">Life Beyond Filmmaking</h2>
            <p>Since 2013 Magnus produces olive oil at his small estate, <strong>Collinadolce</strong>, on the Italian east coast. He also gives talks on creativity, including his recent presentation <strong>"The Power of Constraints: How To Unleash Creativity."</strong></p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;