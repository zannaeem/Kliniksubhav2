"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/facilities", label: "Facilities" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`w-full max-w-5xl flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-gray-900/80 backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <svg
            width="28"
            height="28"
            viewBox="0 0 40 40"
            fill="none"
            className="text-white"
          >
            <path
              d="M20 34C20 34 5 25 5 15C5 10.6 8.6 7 13 7C16.1 7 18.8 8.8 20 11.4C21.2 8.8 23.9 7 27 7C31.4 7 35 10.6 35 15C35 25 20 34 20 34Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M8 20H14L16 16L18 24L20 14L22 22L24 18L26 20H32"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-semibold text-white text-base tracking-tight">
            Klinik Subha
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-white/70 hover:text-white transition-colors rounded-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/60162235212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primaryDark transition-colors shadow-sm"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40">
          <div className="px-6 py-8 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-foreground hover:bg-surface font-medium transition-colors text-lg"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/60162235212"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 text-center bg-primary hover:bg-primaryDark transition-colors text-white px-6 py-3.5 rounded-full font-semibold text-base"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
