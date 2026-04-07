import magnusPortrait from "@/assets/magnus-portrait.png";
import erikNiva from "@/assets/erik-niva.png";
import hakanRockBjorn from "@/assets/hakan-rock-bjorn.jpeg";
import icaStig from "@/assets/ica-stig.png";
import hakanOrangeJacket from "@/assets/hakan-orange-jacket.png";
import oliveOilProduction from "@/assets/olive-oil-production.png";
import haxdansenBild from "@/assets/Häxdansen_bild.png";

const filmStripImages = [
  { src: erikNiva, alt: "Erik Niva, When We Were Kings" },
  { src: hakanRockBjorn, alt: "Håkan Hellström with Rock-Björn" },
  { src: icaStig, alt: "ICA-Stig" },
  { src: hakanOrangeJacket, alt: "Håkan Hellström music video" },
  { src: haxdansenBild, alt: "Häxdansen" },
  { src: oliveOilProduction, alt: "Collinadolce olive oil production" },
];

const sections = [
  {
    label: "Documentary",
    text: "During 2025, Magnus produced and directed the 4-part documentary series, \"When We Were Kings - Avskedet\", chronicling the end of the beloved football podcast hosted by Erik Niva and Håkan Andreason. The documentary premiered on Viaplay in May 2025 to widespread appreciation. His recent work also includes short stories capturing Italian football culture during Champions League 2024–25.",
  },
  {
    label: "Music Videos",
    text: "Strong visual storytelling became Magnus' trademark in his early career, winning numerous international awards for music videos and commercials. Artists include Håkan Hellström, The Ark, Turbonegro, Jay-Jay Johansson, Andreas Johnson, Hardcore Superstar, Brainstorm, Lambretta, Moneybrother, Lisa Miskovsky, Liberator, and Weeping Willows.",
  },
  {
    label: "ICA Commercials",
    text: "From 2005 to 2010, Magnus was the writer and director behind more than 100 films in the ICA commercials series — the world's longest-running advertising campaign with over 1,000 films to date. His work earned multiple Swedish and international advertising awards and opened doors to drama for Swedish Television.",
  },
  {
    label: "TV Drama",
    text: "With the dark comedy series Häxdansen, Magnus worked with the absolute elite of Swedish actors — Julia Dufvenius, Melinda Kinnaman, Sofia Ledarp, Livia Millhagen, Shanti Roney, Magnus Krepper, and Thomas Hanzon. The 6-episode drama was nominated for Kristallen for Best Drama of the Year. Aftenposten awarded it 5 out of 6 stars, comparing it to Lars von Trier's Riket.",
  },
  {
    label: "Collaborations",
    text: "Magnus enjoys working closely with clients, and many become long-term creative partners. ICA, McDonald's, EDEKA, and artists Håkan Hellström, The Ark, and Hardcore Superstar have all collaborated with him for many years.",
  },
  {
    label: "Background",
    text: "Magnus Rösman holds a Master's degree in Industrial Engineering and Economics from Chalmers University of Technology and UC Berkeley. He is currently studying AI and Machine Learning, exploring how generative AI can amplify creativity and make film production more efficient. Since 2013 he produces olive oil at his estate Collinadolce on the Italian east coast.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-background">

      <div className="container mx-auto px-8 md:px-14 py-16 md:py-24">

        {/* Zone 1 — Portrait + Name */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start border-b border-white/10 pb-12 md:pb-16 mb-12 md:mb-16">
          <div className="w-48 md:w-64 shrink-0 overflow-hidden">
            <img
              src={magnusPortrait}
              alt="Magnus Rösman"
              className="w-full aspect-[2/3] object-cover"
            />
          </div>
          <div className="flex flex-col justify-end h-full pt-4">
            <h2 className="font-display text-[6vw] md:text-[4vw] font-normal leading-none text-white mb-4">
              Magnus Rösman
            </h2>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-6">
              Writer &amp; Director
            </p>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed max-w-xl">
              A Swedish film director and writer whose work since 1999 spans award-winning commercials, music videos, television drama and documentary. His signature style combines emotional warmth with an ability to find the comedy in life's small disasters. His music videos for artists like Håkan Hellström and The Ark defined the visuals for Swedish popular culture in the 2000s and his 100+ commercials for supermarket chain ICA have been a fixture of everyday Swedish life. Internationally, he has directed global launch campaigns for brands including Mercedes, Honda and McDonald's. His television drama "Häxdansen" was nominated Best Drama of the Year at the Swedish Television Awards and the documentary "When We Were Kings" premiered on Viaplay in May 2025.
            </p>
          </div>
        </div>

        {/* Zone 2 — Bio in two columns */}
        <div className="columns-1 md:columns-2 gap-14">
          {sections.map((section) => (
            <div key={section.label} className="break-inside-avoid mb-10">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[9px] tracking-[0.3em] uppercase text-white/30">
                  {section.label}
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <p className="text-sm text-white/55 font-light leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Zone 3 — Film strip of remaining 5 images */}
      <div className="flex w-full overflow-hidden">
        {filmStripImages.map((img) => (
          <div key={img.alt} className="flex-1 aspect-[2/3] overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default About;
