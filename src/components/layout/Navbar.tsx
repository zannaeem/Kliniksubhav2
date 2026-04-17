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
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#desktop-book-dropdown')) {
        setDesktopDropdownOpen(false);
      }
    };
    if (desktopDropdownOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [desktopDropdownOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:px-4 md:pt-4">
      <div
        className={`w-full max-w-5xl flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-md px-5 py-3 md:px-6"
            : "bg-gray-900/90 backdrop-blur-sm px-5 py-3 md:px-6"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Klinik Subha Logo"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-white/30"
          />
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
        <div className="hidden md:flex items-center relative" id="desktop-book-dropdown">
          <button
            onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primaryDark transition-colors shadow-sm"
          >
            Book Appointment
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${desktopDropdownOpen ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"/></svg>
          </button>
          
          {desktopDropdownOpen && (
            <div className="absolute top-full right-0 mt-3 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 min-w-[180px] flex flex-col gap-1 z-50">
              <a
                href="https://wa.me/60162235212"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setDesktopDropdownOpen(false)}
                className="px-4 py-2.5 hover:bg-gray-50 rounded-xl text-sm text-gray-800 font-semibold transition-colors w-full text-left flex items-center justify-between group"
              >
                Beaufort
                <svg className="text-gray-300 group-hover:text-[#46c8a1] transition-colors -mr-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </a>
              <a
                href="https://wa.me/60162985212"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setDesktopDropdownOpen(false)}
                className="px-4 py-2.5 hover:bg-gray-50 rounded-xl text-sm text-gray-800 font-semibold transition-colors w-full text-left flex items-center justify-between group"
              >
                Membakut
                <svg className="text-gray-300 group-hover:text-[#46c8a1] transition-colors -mr-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </a>
            </div>
          )}
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
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 px-4">Book Appointment</p>
              <div className="grid grid-cols-2 gap-3 px-4">
                <a
                  href="https://wa.me/60162235212"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="text-center bg-[#46c8a1]/10 text-[#46c8a1] border border-[#46c8a1]/20 hover:bg-[#46c8a1] hover:text-white transition-colors py-3 rounded-xl font-semibold text-sm"
                >
                  Beaufort
                </a>
                <a
                  href="https://wa.me/60162985212"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="text-center bg-[#46c8a1]/10 text-[#46c8a1] border border-[#46c8a1]/20 hover:bg-[#46c8a1] hover:text-white transition-colors py-3 rounded-xl font-semibold text-sm"
                >
                  Membakut
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
