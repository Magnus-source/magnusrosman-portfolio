import { useState, useEffect } from "react";

export const useVimeoThumbnail = (vimeoId: string) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const response = await fetch(
          `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`
        );
        const data = await response.json();
        
        // Get the thumbnail URL and replace with higher quality version
        if (data.thumbnail_url) {
          // Replace the default size with _1280 for better quality
          const highQualityUrl = data.thumbnail_url.replace(/_\d+x\d+/, '_1280');
          setThumbnailUrl(highQualityUrl);
        }
      } catch (error) {
        console.error(`Failed to fetch thumbnail for video ${vimeoId}:`, error);
        // Fallback to vumbnail service
        setThumbnailUrl(`https://vumbnail.com/${vimeoId}_large.jpg`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchThumbnail();
  }, [vimeoId]);

  return { thumbnailUrl, isLoading };
};
