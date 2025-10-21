import VideoCard from "./VideoCard";

// Video order as specified
const featuredOrder = [
  "704553867", // DHL Watercooler
  "704553615", // DHL Meeting
  "1092688022", // When We Were Kings - Avslutet
  "704546507", // Håkan Hellström Din tid kommer
  "707235058", // ICA Jamie Oliver
  "704557975", // AMF KLF
  "742323349", // Häxdansen Omklädningsrummet
  "1081950900", // Viaplay Ice Hockey
  "704551039", // NetOnNet Så mycket bättre
  "704554813", // Spies Priest
  "955446551", // ICA Trucken
  "704542881", // AMF KLF - Full song edit
  "955476760", // Touch me Weeping Willows
  "742323479", // Häxdansen Bussen
  "707234831", // ICA Påsken när Stig var ung
  "707234991", // ICA 300:e filmen
  "707235178", // ICA Rosa bandet
  "707235111", // ICA EMD
  "742323562", // Häxdansen Källaren
  "707235736", // ICA Pasqual gör entré
  "707235622", // ICA Pasqual testimonial
  "707235412", // ICA Pasqual vs Sebastian
  "1092687400", // Don Tommaso FC Inter
  "707235271", // ICA Ulf träffar Ulf
  "1092687228", // Don Tommaso Atalanta BC
  "1092687322", // Don Tommaso AC Milan
];

const videos = [
  {
    vimeoId: "704553867",
    title: "DHL",
    description: "Water cooler",
    category: "commercial",
    size: "large"
  },
  {
    vimeoId: "704553615",
    title: "DHL",
    description: "Meeting",
    category: "commercial",
    size: "small"
  },
  {
    vimeoId: "704546507",
    title: "Håkan Hellström",
    description: "Din tid kommer",
    category: "musicvideo",
    size: "large"
  },
  {
    vimeoId: "1092688022",
    title: "When We Were Kings - Avslutet",
    description: "Documentary, 4 episodes",
    category: "longform",
    size: "small"
  },
  {
    vimeoId: "707235058",
    title: "ICA",
    description: "Jamie Oliver",
    category: "commercial",
    size: "small"
  },
  {
    vimeoId: "704557975",
    title: "AMF",
    description: "KLF",
    category: "commercial",
    size: "small"
  },
  {
    vimeoId: "704551039",
    title: "NetOnNet",
    description: "Så mycket bättre",
    category: "commercial",
    size: "large"
  },
  {
    vimeoId: "742323349",
    title: "Häxdansen",
    description: "TV-series, Omklädningsrummet",
    category: "longform",
    size: "small"
  },
  {
    vimeoId: "704554813",
    title: "Spies",
    description: "Priest",
    category: "commercial",
    size: "large"
  },
  {
    vimeoId: "1081950900",
    title: "Viaplay",
    description: "Ice Hockey World Championship 2025",
    category: "commercial",
    size: "small"
  },
  {
    vimeoId: "955476760",
    title: "Touch me",
    description: "Weeping Willows",
    category: "musicvideo",
    size: "large"
  },
  {
    vimeoId: "704542881",
    title: "AMF",
    description: "KLF - Full song edit",
    category: "commercial",
    size: "small"
  },
  {
    vimeoId: "707235622",
    title: "ICA",
    description: "Pasqual testimonial",
    category: "commercial",
    size: "small"
  },
  {
    vimeoId: "707235736",
    title: "ICA",
    description: "Pasqual gör entré",
    category: "commercial",
    size: "small"
  },
  {
    vimeoId: "707235412",
    title: "ICA",
    description: "Pasqual vs Sebastian",
    category: "commercial",
    size: "large"
  },
  {
    vimeoId: "707234991",
    title: "ICA",
    description: "300:e filmen",
    category: "commercial",
    size: "small"
  },
  {
    vimeoId: "707235111",
    title: "ICA",
    description: "EMD",
    category: "commercial",
    size: "small"
  },
  {
    vimeoId: "707235271",
    title: "ICA",
    description: "Ulf träffar Ulf",
    category: "commercial",
    size: "large"
  },
  {
    vimeoId: "707234831",
    title: "ICA",
    description: "Påsken när Stig var ung",
    category: "commercial",
    size: "small"
  },
  {
    vimeoId: "707235178",
    title: "ICA",
    description: "Rosa bandet",
    category: "commercial",
    size: "large"
  },
  {
    vimeoId: "955446551",
    title: "ICA",
    description: "Trucken",
    category: "commercial",
    size: "small"
  },
  {
    vimeoId: "742323479",
    title: "Häxdansen",
    description: "TV-series, Bussen",
    category: "longform",
    size: "small"
  },
  {
    vimeoId: "742323562",
    title: "Häxdansen",
    description: "TV-series, Källaren",
    category: "longform",
    size: "large"
  },
  {
    vimeoId: "1092687322",
    title: "Don Tommaso",
    description: "AC Milan - September 2024",
    category: "longform",
    size: "small"
  },
  {
    vimeoId: "1092687228",
    title: "Don Tommaso",
    description: "Atalanta BC - December 2024",
    category: "longform",
    size: "large"
  },
  {
    vimeoId: "1092687400",
    title: "Don Tommaso",
    description: "FC Inter - May 2025",
    category: "longform",
    size: "small"
  },
];

interface VideoGalleryProps {
  activeCategory: string;
}

const VideoGallery = ({ activeCategory }: VideoGalleryProps) => {
  // Sort videos: featured first in specific order, then the rest
  const orderedVideos = [...videos].sort((a, b) => {
    const aIndex = featuredOrder.indexOf(a.vimeoId);
    const bIndex = featuredOrder.indexOf(b.vimeoId);
    
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return 0;
  });

  return (
    <section className="py-12 px-6 min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[400px]">
          {orderedVideos.map((video, index) => (
            <VideoCard 
              key={index} 
              {...video}
              isHighlighted={video.category === activeCategory}
              className={video.size === "large" ? "md:col-span-2" : "md:col-span-1"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
