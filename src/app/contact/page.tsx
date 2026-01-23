export default function ContactPage() {
  return (
    <section className="stack">
      <div>
        <p className="eyebrow">Contact Us</p>
        <h1>Let’s start a conversation.</h1>
        <p className="lead">
          Share your goals and we will follow up with the right next steps.
        </p>
      </div>
      <form className="card form">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows={5} placeholder="Tell us about your idea" />
        </label>
        <button className="button primary" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}
