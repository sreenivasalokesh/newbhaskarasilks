import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <>
      <HeroCarousel />
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
