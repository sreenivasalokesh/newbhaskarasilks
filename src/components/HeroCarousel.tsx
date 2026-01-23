"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "We craft quality sarees.",
    message:
      "Trusted weaving expertise delivering premium sarees with timeless craftsmanship.",
    image: "https://images.pexels.com/photos/6634744/pexels-photo-6634744.jpeg",
  },
  {
    title: "Signature weaves, modern elegance.",
    message:
      "Discover vibrant patterns and luxurious textures curated for every occasion.",
    image: "https://images.pexels.com/photos/3794805/pexels-photo-3794805.jpeg",
  },
  {
    title: "Heritage-inspired collections.",
    message:
      "Blending tradition with contemporary styles to celebrate every celebration.",
    image: "https://images.pexels.com/photos/17061968/pexels-photo-17061968.jpeg",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="hero-full" aria-label="Bhaskara Silks highlights">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`hero-slide ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          role="img"
          aria-label={slide.title}
        />
      ))}
      <div className="hero-overlay-box right">
        <h1>{activeSlide.title}</h1>
        <p className="lead">{activeSlide.message}</p>
        <div className="actions">
          <a className="button primary" href="/gallery">
            View Gallery
          </a>
          <a className="button ghost" href="/contact">
            Contact Us
          </a>
        </div>
      </div>
      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`hero-dot ${index === activeIndex ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === activeIndex}
            role="tab"
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
