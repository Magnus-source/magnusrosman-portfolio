import { useState } from "react";
import { Card } from "@/components/ui/card";

interface VideoCardProps {
  vimeoId: string;
  title: string;
  description: string;
}

const VideoCard = ({ vimeoId, title, description }: VideoCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-secondary animate-pulse" />
        )}
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4 drop-shadow-lg">
            {title}
          </h3>
          <p className="text-white/90 text-sm md:text-base text-center px-4 mt-2 drop-shadow-lg">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
