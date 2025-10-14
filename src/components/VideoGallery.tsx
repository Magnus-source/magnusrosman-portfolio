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
    vimeoId: "1092688022",
    title: "Ice Hockey World Championships 2025",
    description: "Ice Hockey World Championships 2025",
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
    vimeoId: "148751763",
    title: "Fashion Film",
    description: "Cinematic exploration of style and elegance",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedVideos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
