export default function AboutPage() {
  return (
    <section className="stack">
      <div>
        <p className="eyebrow">About</p>
        <h1>We build focused experiences.</h1>
        <p className="lead">
          This site is a lightweight SPA-style Next.js project designed for
          fast navigation and easy deployment on Vercel.
        </p>
      </div>
      <div className="grid two">
        <div className="card">
          <h3>Mission</h3>
          <p>
            Deliver simple, responsive pages that are easy to extend with your
            own content.
          </p>
        </div>
        <div className="card">
          <h3>Values</h3>
          <p>
            Clarity, speed, and approachable design that works across devices.
          </p>
        </div>
      </div>
    </section>
  );
}
