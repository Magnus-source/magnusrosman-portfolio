import VideoCard from "./VideoCard";

const videos = [
  {
    vimeoId: "76979871",
    title: "Brand Story",
    description: "A compelling narrative for a luxury brand",
  },
  {
    vimeoId: "268896653",
    title: "Product Launch",
    description: "Dynamic showcase of innovative technology",
  },
  {
    vimeoId: "115783408",
    title: "Lifestyle Campaign",
    description: "Capturing authentic moments and emotions",
  },
  {
    vimeoId: "148751763",
    title: "Fashion Film",
    description: "Cinematic exploration of style and elegance",
  },
  {
    vimeoId: "179528528",
    title: "Automotive Excellence",
    description: "High-octane commercial for premium vehicles",
  },
  {
    vimeoId: "336812660",
    title: "Food & Beverage",
    description: "Sensory journey through culinary artistry",
  },
];

const VideoGallery = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of commercial films spanning various industries and storytelling approaches
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
