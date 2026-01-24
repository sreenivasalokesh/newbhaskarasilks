"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
          <span className="brand-title">BHASKARA</span>
          <span className="brand-subtitle">
            <span>Silks</span>
          </span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
          onClick={() => setIsOpen(true)}
        >
          <span className="sr-only">Open navigation</span>
          <span className="nav-icon" aria-hidden="true" />
        </button>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <div className={`nav-drawer ${isOpen ? "open" : ""}`}>
          <div className="nav-panel" role="dialog" aria-modal="true">
            <Link
              className="brand drawer-brand"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <span className="brand-title">BHASKARA</span>
              <span className="brand-subtitle">
                <span>Silks</span>
              </span>
            </Link>
            <button
              className="nav-close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              ×
            </button>
            <nav id="mobile-drawer" className="nav-links mobile">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/gallery" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </nav>
          </div>
          <button
            className="nav-backdrop"
            type="button"
            aria-label="Close navigation backdrop"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
