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
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </Card>
  );
};

export default VideoCard;
