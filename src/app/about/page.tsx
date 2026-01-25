import Image from "next/image";
import eye from "@/assets/eye.png";
import target from "@/assets/target.png";
import rangoli from "@/assets/rangoli.png";
import worker from "@/assets/worker.png";

export default function AboutPage() {
  return (
    <section className="stack">
<div>
        <p className="eyebrow">About</p>
        <h1>We build focused experiences.</h1>
        <p className="lead">
        Our association is built to deliver lasting value to our customers.
        </p>
      </div>      
      <div className="card about-card">
        <Image
          src={worker}
          alt="Traditional weavers"
          className="about-card-image"
        />
        <div className="about-card-content">
          <h3>Who We Are</h3>
          <p>
            We are <strong>traditional weavers</strong> with over
            <strong> six decades of experience</strong>, passed down through
            generations. Our roots lie in <strong>time‑honoured weaving
            practices</strong>, where <strong>skill, discipline, and
            patience</strong> define the craft. This heritage is not just our
            history—it is the foundation of how we work today.
          </p>
          <p>
            Every saree we produce reflects <strong>pride in workmanship</strong>,
            <strong>precision in execution</strong>, and <strong>consistency in
            quality</strong>. From <strong>yarn selection</strong> to
            <strong> loom settings</strong> and <strong>finishing</strong>, each
            stage is carefully controlled to ensure <strong>dependable output
            at scale</strong>. Our deep understanding of weaving allows us to
            balance <strong>tradition</strong> with <strong>modern production
            needs</strong>.
          </p>
          <p>
            As <strong>manufacturers</strong>, we work closely with retailers
            and buyers who value <strong>reliability</strong> and
            <strong> long‑term partnerships</strong>. We focus on producing
            <strong>well‑crafted sarees</strong> that meet market expectations
            in <strong>design</strong>, <strong>quality</strong>, and
            <strong> timelines</strong>. With experience guiding every
            decision, we aim to be a <strong>trusted source</strong> for sarees
            that carry both <strong>heritage</strong> and
            <strong> professionalism</strong>.
          </p>
        </div>
      </div>
      <div className="card about-card">
        <Image
          src={rangoli}
          alt="Saree design craftsmanship"
          className="about-card-image"
        />
        <div className="about-card-content">
          <h3>What We Do</h3>
          <ul className="about-list">
            <li>
              <strong>Best‑in‑class quality</strong> with consistent weaving
              standards, durable fabric, and reliable finishing.
            </li>
            <li>
              <strong>Thoughtful designs</strong> spanning both heritage styles
              and modern market trends.
            </li>
            <li>
              <strong>Proven colour combinations</strong> selected for
              long‑term appeal and repeat demand.
            </li>
            <li>
              <strong>Custom order manufacturing</strong>, tailored to specific
              design, colour, and volume requirements.
            </li>
            <li>
              <strong>Consistent batch quality</strong>, ensuring trust and
              repeatability for retailers.
            </li>
            <li>
              <strong>Timely production</strong> and dependable delivery to all
              major cities.
            </li>
            <li>
              <strong>Customer‑oriented approach</strong>, with clear
              communication and responsive support.
            </li>
            <li>
              <strong>Long‑term partnerships</strong>, built on integrity,
              reliability, and value delivery.
            </li>
          </ul>
        </div>
      </div>
      <div className="grid two">
        <div className="card about-card">
          <Image
            src={target}
            alt="Quality promise"
            className="about-card-image"
          />
          <div className="about-card-content">
            <h3>Our Mission</h3>
            <p>
              Deliver premium sarees with timeless design, reliable supply, and
              consistent workmanship for every retail partner we serve.
            </p>
          </div>
        </div>
        <div className="card about-card">
          <Image
            src={eye}
            alt="Vision for excellence"
            className="about-card-image"
          />
          <div className="about-card-content">
            <h3>Our Vision</h3>
            <p>
              Be a trusted name for best‑in‑class saree collections that lead
              trends while honoring our weaving heritage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
