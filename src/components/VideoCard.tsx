import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from "lucide-react";
import Player from "@vimeo/player";
import { useVimeoThumbnail } from "@/hooks/useVimeoThumbnail";

interface VideoCardProps {
  vimeoId: string;
  title: string;
  description: string;
  className?: string;
  isHighlighted?: boolean;
}

const VideoCard = ({ vimeoId, title, description, className = "", isHighlighted = true }: VideoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const { thumbnailUrl, isLoading, containerRef } = useVimeoThumbnail(vimeoId);

  useEffect(() => {
    if (isOpen && iframeRef.current && !playerRef.current) {
      playerRef.current = new Player(iframeRef.current);
      playerRef.current.on("ended", () => {
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
      <div
        ref={containerRef}
        className={`group relative overflow-hidden h-full cursor-pointer transition-opacity duration-500 ${
          !isHighlighted ? "opacity-20" : "opacity-100"
        } ${className}`}
        onClick={handlePlay}
      >
        {/* Thumbnail */}
        {isLoading && <div className="absolute inset-0 bg-zinc-900 animate-pulse" />}
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
        )}

        {/* Permanent gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        {/* Hover darkening */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />

        {/* Text — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-1.5">{description}</p>
          <h3 className="text-sm md:text-base font-light text-white tracking-wide leading-snug">{title}</h3>
        </div>

        {/* Play icon — centre, fades in on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-black border-none">
          <div className="relative w-full h-full">
            <iframe
              ref={iframeRef}
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0&vimeo_logo=0&dnt=1`}
              className={`w-full h-full transition-opacity duration-200 ${hasEnded ? "opacity-0" : "opacity-100"}`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
            {hasEnded && (
              <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]">
                <h3 className="text-xl font-light tracking-widest uppercase text-white mb-8">{title}</h3>
                <div className="flex gap-4">
                  <Button onClick={handleReplay} size="lg" className="gap-2 tracking-widest uppercase text-xs">
                    <RotateCcw className="w-4 h-4" />
                    Play again
                  </Button>
                  <Button onClick={handleClose} variant="outline" size="lg" className="tracking-widest uppercase text-xs">
                    Close
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
