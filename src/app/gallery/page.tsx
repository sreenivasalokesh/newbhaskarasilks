"use client";

import { useEffect, useMemo, useState } from "react";

type GalleryItem = {
  id: number;
  type: "image" | "video";
  title: string;
  src: string;
  poster?: string;
};

const baseItems: Omit<GalleryItem, "id">[] = [
  {
    type: "image",
    title: "Handloom Heritage",
    src: "https://images.pexels.com/photos/17061968/pexels-photo-17061968.jpeg",
  },
  {
    type: "image",
    title: "Loom Craft",
    src: "https://images.pexels.com/photos/6634744/pexels-photo-6634744.jpeg",
  },
  {
    type: "image",
    title: "Silk Threads",
    src: "https://images.pexels.com/photos/3794805/pexels-photo-3794805.jpeg",
  },
  {
    type: "image",
    title: "Classic Weaves",
    src: "https://images.pexels.com/photos/1470878/pexels-photo-1470878.jpeg",
  },
  {
    type: "image",
    title: "Golden Motifs",
    src: "https://images.pexels.com/photos/261418/pexels-photo-261418.jpeg",
  },
  {
    type: "image",
    title: "Festive Tones",
    src: "https://images.pexels.com/photos/15327079/pexels-photo-15327079.jpeg",
  },
  {
    type: "image",
    title: "Modern Drapes",
    src: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg",
  },
  {
    type: "image",
    title: "Heritage Border",
    src: "https://images.pexels.com/photos/205657/pexels-photo-205657.jpeg",
  },
  {
    type: "video",
    title: "Weaving In Motion",
    src: "https://videos.pexels.com/video-files/855653/855653-hd_1280_720_30fps.mp4",
    poster: "https://images.pexels.com/photos/6634744/pexels-photo-6634744.jpeg",
  },
  {
    type: "video",
    title: "Craft Studio",
    src: "https://videos.pexels.com/video-files/1592498/1592498-hd_1280_720_25fps.mp4",
    poster: "https://images.pexels.com/photos/3794805/pexels-photo-3794805.jpeg",
  },
  {
    type: "video",
    title: "Loom Detail",
    src: "https://videos.pexels.com/video-files/3036540/3036540-hd_1280_720_30fps.mp4",
    poster: "https://images.pexels.com/photos/17061968/pexels-photo-17061968.jpeg",
  },
  {
    type: "video",
    title: "Silk Patterns",
    src: "https://videos.pexels.com/video-files/4990240/4990240-hd_1280_720_24fps.mp4",
    poster: "https://images.pexels.com/photos/1470878/pexels-photo-1470878.jpeg",
  },
];

export default function GalleryPage() {
  const items = useMemo(
    () =>
      Array.from({ length: 60 }, (_, index) => ({
        id: index + 1,
        ...baseItems[index % baseItems.length],
      })),
    []
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);


  const goPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section className="stack">
      <div>
        <p className="eyebrow">Gallery</p>
        <h1>Explore our saree collections.</h1>
        <p className="lead">
          A curated mix of photos and videos in a Pinterest‑style gallery.
        </p>
      </div>
      <div className="gallery-masonry">
        {items.map((item, index) => (
          <button
            className="gallery-tile"
            key={`${item.title}-${item.id}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${item.title}`}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.title} loading="lazy" />
            ) : (
              <video
                src={item.src}
                poster={item.poster}
                muted
                playsInline
                preload="metadata"
              />
            )}
            <div className="gallery-caption">
              <h3>{item.title}</h3>
              <span>{item.type === "video" ? "Video" : "Photo"}</span>
            </div>
          </button>
        ))}
      </div>
      {activeItem && (
        <div className="gallery-modal" role="dialog" aria-modal="true">
          <button
            className="gallery-close"
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close gallery"
          >
            ×
          </button>
          <button
            className="gallery-nav prev"
            type="button"
            onClick={goPrev}
            aria-label="Previous item"
          >
            ‹
          </button>
          <div className="gallery-viewer">
            {activeItem.type === "image" ? (
              <img src={activeItem.src} alt={activeItem.title} />
            ) : (
              <video src={activeItem.src} controls autoPlay />
            )}
          </div>
          <button
            className="gallery-nav next"
            type="button"
            onClick={goNext}
            aria-label="Next item"
          >
            ›
          </button>
          <div className="gallery-toolbar">
            <span>{activeItem.title}</span>
          </div>
        </div>
      )}
    </section>
  );
}
