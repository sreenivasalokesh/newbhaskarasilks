"use client";

import { useEffect, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!success) {
      return;
    }
    const timer = window.setTimeout(() => {
      setSuccess("");
    }, 6000);
    return () => window.clearTimeout(timer);
  }, [success]);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = "Name is expected.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Email is expected.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Email is not valid.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Message is expected.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess("");
    if (!validate()) {
      return;
    }

    const subject = encodeURIComponent("New inquiry from Bhaskara Silks site");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:contact@bhaskarasilks.in?subject=${subject}&body=${body}`;
    setSuccess("Message is formatted to send. Please send the email.");
    setForm(initialForm);
  };

  return (
    <section className="stack">
      <div>
        <p className="eyebrow">Contact Us</p>
        <h1>Let’s start a conversation.</h1>
        <p className="lead">
          Share your goals and we will follow up with the right next steps.
        </p>
      </div>

      <div className="contact-grid">
        <div className="card contact-card">
          <h3>Call Us</h3>
          <div className="contact-list spacious">
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                ☎
              </span>
              <a href="tel:+918088727273">+91 8088 7272 73</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                ☎
              </span>
              <a href="tel:+919988040491">+91 9988 0404 91</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                ☎
              </span>
              <a href="tel:+919242316468">+91 9242 3164 68</a>
            </div>
          </div>
        </div>
        <div className="contact-stack">
          <div className="card contact-card">
            <h3>Email</h3>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  ✉
                </span>
                <a href="mailto:contact@bhaskarasilks.in">
                  contact@bhaskarasilks.in
                </a>
              </div>
            </div>
          </div>
          <div className="card contact-card">
            <h3>Follow Us</h3>
            <div className="contact-socials">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhaskara Silks on YouTube"
                className="social-icon"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.5 7.1a3 3 0 0 0-2.1-2.1C19.7 4.5 12 4.5 12 4.5s-7.7 0-9.4.5A3 3 0 0 0 .5 7.1 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.7.5 9.4.5 9.4.5s7.7 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-4.9ZM9.6 15.3V8.7l6.1 3.3-6.1 3.3Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhaskara Silks on Instagram"
                className="social-icon"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 12 16a4.5 4.5 0 0 0 0-9Zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Zm6.2-3.3a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhaskara Silks on Facebook"
                className="social-icon"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 9H15V6.5h-1.8c-2.1 0-3.5 1.4-3.5 3.6V12H7v2.5h2.7V21h2.8v-6.5h2.2L15 12h-2.5v-1.9c0-.6.4-1.1 1-1.1Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <form className="card form" onSubmit={handleSubmit} noValidate>
        <h3>Get in touch</h3>
        <div className="form-row">
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            {errors.email && (
              <span className="form-error">{errors.email}</span>
            )}
          </label>
        </div>
        <label>
          Message
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your idea"
            value={form.message}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, message: event.target.value }))
            }
          />
          {errors.message && (
            <span className="form-error">{errors.message}</span>
          )}
        </label>
        <button className="button primary" type="submit">
          Send Message
        </button>
        {success && <p className="form-success">{success}</p>}
      </form>
    </section>
  );
}
