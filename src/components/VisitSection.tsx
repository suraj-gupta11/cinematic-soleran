'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Mail, Phone, ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VisitSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="visit"
      ref={containerRef}
      className="relative min-h-[80svh] flex items-center justify-center py-24 lg:py-32 bg-[#080807] border-t border-[#C8A96B]/15 overflow-hidden"
      aria-label="Visit Soleran"
    >
      {/* Background Spotlight Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-10 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, #C8A96B 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
        <div
          ref={cardRef}
          className="rounded-3xl border border-[#C8A96B]/25 bg-[#11100E]/90 backdrop-blur-xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Header */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-[11px] font-mono tracking-cinematic text-[#C8A96B]">05 / VISIT US</span>
                <span className="w-8 h-[1px] bg-[#C8A96B]/30" />
                <span className="text-[10px] uppercase tracking-cinematic text-[#B8B0A3]">A WARM WELCOME</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F0E7] leading-[1.1] tracking-tight">
                <span className="font-editorial block">Your table is</span>
                <span className="font-editorial italic block text-[#C8A96B]">waiting.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#B8B0A3] font-light leading-relaxed max-w-md">
                Make a little room for something extraordinary. Walk-ins are always welcomed with a warm
                pour, or reach out to reserve your morning corner.
              </p>

              <div className="pt-4">
                <a
                  href="mailto:hello@soleran.example?subject=Table%20Inquiry%20-%20Soleran%20Artisan%20Café"
                  className="inline-flex items-center justify-center text-xs uppercase tracking-cinematic px-8 py-4 rounded-full bg-[#C8A96B] text-[#080807] font-medium hover:bg-[#d8bd82] hover:shadow-[0_0_25px_rgba(200,169,107,0.3)] transition-all duration-300 group"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Details Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 border-t lg:border-t-0 lg:border-l border-[#C8A96B]/15 pt-8 lg:pt-0 lg:pl-12">
              {/* Location */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#C8A96B]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[11px] font-mono tracking-cinematic">SANCTUARY</span>
                </div>
                <p className="text-sm sm:text-base text-[#F5F0E7] font-light leading-relaxed">
                  12 Olive Lane,
                  <br />
                  Bengaluru, India
                </p>
                <p className="text-xs text-[#777168]">Near the heritage gardens</p>
              </div>

              {/* Hours */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#C8A96B]">
                  <Clock className="w-4 h-4" />
                  <span className="text-[11px] font-mono tracking-cinematic">HOURS</span>
                </div>
                <p className="text-sm sm:text-base text-[#F5F0E7] font-light leading-relaxed">
                  Every day
                  <br />
                  9:00 AM – 10:00 PM
                </p>
                <p className="text-xs text-[#777168]">Kitchen open until 9:30 PM</p>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#C8A96B]">
                  <Mail className="w-4 h-4" />
                  <span className="text-[11px] font-mono tracking-cinematic">DIRECT</span>
                </div>
                <a
                  href="mailto:hello@soleran.example"
                  className="block text-sm sm:text-base text-[#F5F0E7] hover:text-[#C8A96B] transition-colors font-light"
                >
                  hello@soleran.example
                </a>
                <p className="text-xs text-[#777168]">Inquiries & table notes</p>
              </div>

              {/* Telephone */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#C8A96B]">
                  <Phone className="w-4 h-4" />
                  <span className="text-[11px] font-mono tracking-cinematic">CONCIERGE</span>
                </div>
                <a
                  href="tel:+919000000000"
                  className="block text-sm sm:text-base text-[#F5F0E7] hover:text-[#C8A96B] transition-colors font-light font-mono"
                >
                  +91 90000 00000
                </a>
                <p className="text-xs text-[#777168]">10:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
