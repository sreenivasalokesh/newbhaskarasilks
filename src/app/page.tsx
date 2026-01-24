import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import premiumBadge from "@/assets/premium-badge.png";
import rangoli from "@/assets/rangoli.png";
import worker from "@/assets/worker.png";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section className="expertise-row" aria-label="Expertise">
        <div className="expertise-item">
          <Image
            src={premiumBadge}
            alt="Premium Quality"
            className="expertise-image"
          />
          <div className="expertise-text">
            <h3>Premium Quality</h3>
            <p>
              Meticulous loom control for consistent texture, sheen, and
              durability.
            </p>
          </div>
        </div>
        <div className="expertise-item">
          <Image
            src={rangoli}
            alt="Design Excellence"
            className="expertise-image"
          />
          <div className="expertise-text">
            <h3>Design Excellence</h3>
            <p>
              Elegant motifs and borders inspired by heritage patterns and
              modern tastes.
            </p>
          </div>
        </div>
        <div className="expertise-item">
          <Image
            src={worker}
            alt="Manufacturer direct"
            className="expertise-image"
          />
          <div className="expertise-text">
            <h3>Manufacturer Direct</h3>
            <p>
              Careful finishing and inspection to ensure premium drape and
              comfort.
            </p>
          </div>
        </div>
      </section>
      <section className="home-sections">
        <article className="section-card">
          <div
            className="section-media gallery"
            role="img"
            aria-label="Gallery highlights"
          />
          <div className="section-content">
            <p className="eyebrow">Gallery</p>
            <h2>Signature designs and modern patterns.</h2>
            <p className="lead">
              Explore curated collections showcasing zari borders, soft
              pastels, and rich festive palettes crafted for every occasion.
            </p>
            <a className="button ghost" href="/gallery">
              View Gallery
            </a>
          </div>
        </article>
        <article className="section-card reverse">
          <div
            className="section-media about"
            role="img"
            aria-label="About Bhaskara Silks"
          />
          <div className="section-content">
            <p className="eyebrow">About</p>
            <h2>Rooted in tradition, focused on quality.</h2>
            <p className="lead">
              Learn about our heritage, quality standards, and the skilled
              artisans who bring each weave to life.
            </p>
            <a className="button ghost" href="/about">
              Read About Us
            </a>
          </div>
        </article>
        <article className="section-card">
          <div
            className="section-media contact"
            role="img"
            aria-label="Contact Bhaskara Silks"
          />
          <div className="section-content">
            <p className="eyebrow">Contact</p>
            <h2>Let’s create something timeless.</h2>
            <p className="lead">
              Reach out for orders, bulk inquiries, or custom saree
              requirements tailored to your needs.
            </p>
            <a className="button ghost" href="/contact">
              Contact Us
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
