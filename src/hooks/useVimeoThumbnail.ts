import { useState, useEffect, useRef } from "react";

export const useVimeoThumbnail = (vimeoId: string) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchThumbnail = async () => {
      try {
        const response = await fetch(
          `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`
        );
        const data = await response.json();
        if (!cancelled && data.thumbnail_url) {
          const highQualityUrl = data.thumbnail_url.replace(/_\d+x\d+/, "_1280");
          setThumbnailUrl(highQualityUrl);
        }
      } catch {
        if (!cancelled) {
          setThumbnailUrl(`https://vumbnail.com/${vimeoId}_large.jpg`);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchThumbnail();
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [vimeoId]);

  return { thumbnailUrl, isLoading, containerRef };
};
