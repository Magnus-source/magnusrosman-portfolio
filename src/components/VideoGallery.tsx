import VideoCard from "./VideoCard";

const videos = [
  {
    vimeoId: "76979871",
    title: "Brand Story",
    description: "A compelling narrative for a luxury brand",
    category: "commercial"
  },
  {
    vimeoId: "268896653",
    title: "Product Launch",
    description: "Dynamic showcase of innovative technology",
    category: "commercial"
  },
  {
    vimeoId: "1081950900",
    title: "Ice Hockey World Championships 2025",
    description: "Television commercial",
    category: "commercial"
  },
  {
    vimeoId: "115783408",
    title: "Documentary Series",
    description: "Capturing authentic moments and emotions",
    category: "longform"
  },
  {
    vimeoId: "1092688022",
    title: "When We Were Kings - Avslutet",
    description: "Documentary, 4 episodes",
    category: "longform"
  },
  {
    vimeoId: "742323349",
    title: "Häxdansen",
    description: "TV-series, Omklädningsrummet",
    category: "longform"
  },
  {
    vimeoId: "742323479",
    title: "Häxdansen",
    description: "TV-series, Bussen",
    category: "longform"
  },
  {
    vimeoId: "742323562",
    title: "Häxdansen",
    description: "TV-series, Källaren",
    category: "longform"
  },
  {
    vimeoId: "148751763",
    title: "Fashion Film",
    description: "Cinematic exploration of style and elegance",
    category: "musicvideo"
  },
  {
    vimeoId: "955476760",
    title: "Touch me",
    description: "Weeping Willows",
    category: "musicvideo"
  },
  {
    vimeoId: "704546507",
    title: "Håkan Hellström",
    description: "Din tid kommer",
    category: "musicvideo"
  },
  {
    vimeoId: "179528528",
    title: "Automotive Excellence",
    description: "High-octane commercial for premium vehicles",
    category: "commercial"
  },
  {
    vimeoId: "336812660",
    title: "Food & Beverage",
    description: "Sensory journey through culinary artistry",
    category: "commercial"
  },
  {
    vimeoId: "707235622",
    title: "ICA",
    description: "Pasqual testimonial",
    category: "commercial"
  },
  {
    vimeoId: "707235736",
    title: "ICA",
    description: "Pasqual gör entré",
    category: "commercial"
  },
  {
    vimeoId: "707235058",
    title: "ICA",
    description: "Jamie Oliver",
    category: "commercial"
  },
  {
    vimeoId: "707234901",
    title: "ICA",
    description: "Trucken",
    category: "commercial"
  },
  {
    vimeoId: "704551039",
    title: "NetOnNet",
    description: "Så mycket bättre",
    category: "commercial"
  },
  {
    vimeoId: "704554813",
    title: "Spies",
    description: "Priest",
    category: "commercial"
  },
  {
    vimeoId: "704542881",
    title: "AMF",
    description: "KLF - Full song edit",
    category: "commercial"
  },
  {
    vimeoId: "704557975",
    title: "AMF",
    description: "KLF",
    category: "commercial"
  },
  {
    vimeoId: "704553615",
    title: "DHL",
    description: "Meeting",
    category: "commercial"
  },
  {
    vimeoId: "704553867",
    title: "DHL",
    description: "Water cooler",
    category: "commercial"
  },
];

interface VideoGalleryProps {
  activeCategory: string;
}

const VideoGallery = ({ activeCategory }: VideoGalleryProps) => {
  const sortedVideos = [...videos].sort((a, b) => {
    if (a.category === activeCategory && b.category !== activeCategory) return -1;
    if (a.category !== activeCategory && b.category === activeCategory) return 1;
    return 0;
  });

  return (
    <section className="py-12 px-6 min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedVideos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
