"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
          <span className="brand-title">Bhaskara</span>
          <span className="brand-subtitle">
            <span>Silks</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
