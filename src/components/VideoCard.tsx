import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X, RotateCcw } from "lucide-react";
import Player from "@vimeo/player";

interface VideoCardProps {
  vimeoId: string;
  title: string;
  description: string;
  className?: string;
}

const VideoCard = ({ vimeoId, title, description, className = "" }: VideoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const thumbnailUrl = `https://vumbnail.com/${vimeoId}_large.jpg`;

  useEffect(() => {
    if (isOpen && iframeRef.current && !playerRef.current) {
      playerRef.current = new Player(iframeRef.current);
      
      playerRef.current.on('ended', () => {
        setHasEnded(true);
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [isOpen]);

  const handlePlay = () => {
    setIsOpen(true);
    setHasEnded(false);
  };

  const handleReplay = async () => {
    setHasEnded(false);
    if (playerRef.current) {
      await playerRef.current.setCurrentTime(0);
      await playerRef.current.play();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setHasEnded(false);
  };

  return (
    <>
      <Card className={`group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 h-full ${className}`}>
        <div className="relative h-full overflow-hidden bg-black">
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
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center px-4 drop-shadow-lg">
              {title}
            </h3>
            <p className="text-white/90 text-xs md:text-sm text-center px-4 mt-2 drop-shadow-lg max-w-md">
              {description}
            </p>
          </div>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-black border-none">
          <div className="relative w-full h-full">
            <iframe
              ref={iframeRef}
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
            {hasEnded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>
                <div className="flex gap-4">
                  <Button
                    onClick={handleReplay}
                    size="lg"
                    className="gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Spela igen
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="outline"
                    size="lg"
                  >
                    Stäng
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoCard;
