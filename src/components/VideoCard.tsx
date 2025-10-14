import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface VideoCardProps {
  vimeoId: string;
  title: string;
  description: string;
}

const VideoCard = ({ vimeoId, title, description }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://vumbnail.com/${vimeoId}_large.jpg`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden bg-black">
        {!isPlaying ? (
          <>
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent cursor-pointer transition-all duration-300 group-hover:bg-black/50"
              onClick={handlePlay}
            >
              <div className="mb-4 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/30">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4 drop-shadow-lg">
                {title}
              </h3>
              <p className="text-white/90 text-sm md:text-base text-center px-4 mt-2 drop-shadow-lg max-w-md">
                {description}
              </p>
            </div>
          </>
        ) : (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </Card>
  );
};

export default VideoCard;
