'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'The Experience', href: '#experience' },
  { label: 'Featured Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Visit Us', href: '#visit' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#080807]/85 backdrop-blur-md border-b border-[#C8A96B]/15 py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="#experience"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B]"
          aria-label="Soleran Home"
        >
          <span className="font-editorial text-2xl sm:text-3xl tracking-[0.22em] font-semibold text-[#F5F0E7] transition-colors duration-300 group-hover:text-[#C8A96B]">
            SOLERAN
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]/80 group-hover:scale-125 transition-transform duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] uppercase tracking-cinematic text-[#B8B0A3] hover:text-[#C8A96B] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A96B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center">
          <Link
            href="#visit"
            className="inline-flex items-center justify-center text-[11px] uppercase tracking-cinematic px-5 py-2.5 rounded-full border border-[#C8A96B]/30 text-[#F5F0E7] bg-[#181612]/60 hover:bg-[#C8A96B] hover:text-[#080807] hover:border-[#C8A96B] transition-all duration-300 font-medium"
          >
            Reserve A Table
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F5F0E7] hover:text-[#C8A96B] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-full bg-[#080807]/95 backdrop-blur-xl border-b border-[#C8A96B]/20 transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[380px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-8 flex flex-col space-y-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="text-xs uppercase tracking-cinematic text-[#B8B0A3] hover:text-[#C8A96B] transition-colors py-2 border-b border-[#C8A96B]/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#visit"
            onClick={handleLinkClick}
            className="text-center text-xs uppercase tracking-cinematic py-3 rounded-full border border-[#C8A96B]/40 text-[#080807] bg-[#C8A96B] font-medium mt-2"
          >
            Reserve A Table
          </Link>
        </div>
      </div>
    </header>
  );
}
