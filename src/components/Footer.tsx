'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

function getYear() {
  return new Date().getFullYear();
}
function getServerYear() {
  return 2026;
}
function subscribeYear() {
  return () => {};
}

export default function Footer() {
  const currentYear = useSyncExternalStore(subscribeYear, getYear, getServerYear);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#080807] border-t border-[#C8A96B]/20 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#C8A96B]/15">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="#experience"
              className="inline-flex items-center gap-2 group"
              aria-label="Soleran Home"
            >
              <span className="font-editorial text-3xl tracking-[0.24em] font-semibold text-[#F5F0E7] group-hover:text-[#C8A96B] transition-colors">
                SOLERAN
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
            </Link>
            <p className="font-editorial italic text-lg text-[#B8B0A3]/90">
              A quieter kind of extraordinary.
            </p>
            <p className="text-xs text-[#777168] max-w-sm leading-relaxed">
              Curating slow mornings, artisan roasts, and tactile comfort in the heart of Bengaluru.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[10px] uppercase tracking-cinematic text-[#C8A96B]">NAVIGATION</p>
            <ul className="space-y-2 text-xs uppercase tracking-wide-editorial text-[#B8B0A3]">
              <li>
                <Link href="#experience" className="hover:text-[#C8A96B] transition-colors">
                  The Experience
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#C8A96B] transition-colors">
                  Featured Menu
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-[#C8A96B] transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="#visit" className="hover:text-[#C8A96B] transition-colors">
                  Visit Sanctuary
                </Link>
              </li>
            </ul>
          </div>

          {/* Sanctuary Hours & Journal */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-[10px] uppercase tracking-cinematic text-[#C8A96B]">CONNECT</p>
            <p className="text-xs text-[#B8B0A3] leading-relaxed">
              Inquiries:{' '}
              <a
                href="mailto:hello@soleran.example"
                className="text-[#F5F0E7] hover:text-[#C8A96B] transition-colors underline underline-offset-4 decoration-[#C8A96B]/40"
              >
                hello@soleran.example
              </a>
            </p>
            <div className="flex items-center space-x-4 pt-2 text-xs uppercase tracking-cinematic text-[#777168]">
              <span className="hover:text-[#C8A96B] cursor-pointer transition-colors">Instagram</span>
              <span>·</span>
              <span className="hover:text-[#C8A96B] cursor-pointer transition-colors">Journal</span>
              <span>·</span>
              <span className="hover:text-[#C8A96B] cursor-pointer transition-colors">Press</span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-[#777168]">
          <p>© {currentYear} Soleran Artisan Café. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <span className="text-[#B8B0A3]/50">Designed with Quiet Luxury</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-cinematic text-[#C8A96B] hover:text-[#F5F0E7] transition-colors group p-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B]"
              aria-label="Scroll back to top"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
