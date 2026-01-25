import type { Metadata } from "next";
import {
  Amita,
  Cinzel,
  Geist,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amita = Amita({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amita",
});

const playfair = Playfair_Display({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cinzel = Cinzel({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Bhaskara Silks",
  description: "Bhaskara Saree Manufacturers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amita.variable} ${playfair.variable} ${cinzel.variable}`}
      >
        <Navbar />
        <main className="container page">{children}</main>
        <footer className="site-footer">
          <div className="container footer-content">
            <p>© 2026 Bhaskara Silks. All rights reserved.</p>
            <div className="footer-links" aria-label="Social links">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhaskara Silks on YouTube"
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
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 9H15V6.5h-1.8c-2.1 0-3.5 1.4-3.5 3.6V12H7v2.5h2.7V21h2.8v-6.5h2.2L15 12h-2.5v-1.9c0-.6.4-1.1 1-1.1Z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
        <a
          className="whatsapp-fab"
          href="https://wa.me/918088727273"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Bhaskara Silks on WhatsApp"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16.06 4.01c-6.6 0-11.97 5.36-11.97 11.96 0 2.11.55 4.17 1.6 5.98L4 28l6.19-1.62a11.93 11.93 0 0 0 5.87 1.52h.01c6.6 0 11.96-5.36 11.96-11.96S22.66 4.01 16.06 4.01Zm0 21.86h-.01c-1.77 0-3.5-.48-5.01-1.39l-.36-.21-3.67.96.98-3.57-.23-.37a9.86 9.86 0 0 1-1.52-5.28c0-5.44 4.43-9.86 9.87-9.86 5.44 0 9.86 4.42 9.86 9.86s-4.42 9.86-9.86 9.86Zm5.77-7.35c-.31-.16-1.85-.91-2.14-1.02-.29-.11-.5-.16-.71.16-.2.31-.82 1.02-1.01 1.23-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.16-.71-1.7-.97-2.33-.26-.63-.52-.54-.71-.55-.18-.01-.38-.02-.59-.02-.2 0-.54.08-.82.38-.28.31-1.07 1.04-1.07 2.54 0 1.5 1.09 2.95 1.24 3.16.16.2 2.14 3.27 5.19 4.59.73.31 1.3.49 1.75.63.74.23 1.42.2 1.95.12.6-.09 1.85-.75 2.11-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.2-.59-.36Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
