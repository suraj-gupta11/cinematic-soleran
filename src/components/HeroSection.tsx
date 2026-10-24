'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.9,
        delay: 0.2,
      })
        .from(
          '.hero-title-line-1',
          {
            opacity: 0,
            y: 40,
            duration: 1.1,
          },
          '-=0.6'
        )
        .from(
          '.hero-title-line-2',
          {
            opacity: 0,
            y: 50,
            duration: 1.2,
          },
          '-=0.8'
        )
        .from(
          '.hero-description',
          {
            opacity: 0,
            y: 20,
            duration: 0.9,
          },
          '-=0.7'
        )
        .from(
          '.hero-cta-btn',
          {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.8,
          },
          '-=0.6'
        )
        .from(
          imageWrapperRef.current,
          {
            opacity: 0,
            scale: 0.96,
            duration: 1.4,
            ease: 'power2.out',
          },
          '-=1.2'
        )
        .from(
          '.hero-scroll-indicator',
          {
            opacity: 0,
            y: -10,
            duration: 0.8,
          },
          '-=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative min-h-[90svh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#080807]"
      aria-label="Hero Experience"
    >
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(200,169,107,0.35) 0%, rgba(142,117,74,0.1) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
        {/* Left Column: Editorial Typography */}
        <div ref={textRef} className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
          {/* Index & Badge */}
          <div className="hero-badge flex items-center space-x-4">
            <span className="text-[11px] font-mono tracking-cinematic text-[#C8A96B]">00 / THE EXPERIENCE</span>
            <span className="w-12 h-[1px] bg-[#C8A96B]/30" />
            <span className="text-[10px] uppercase tracking-cinematic text-[#B8B0A3]/80">AN ARTISAN CAFÉ EXPERIENCE</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-light leading-[1.05] tracking-tight text-[#F5F0E7]">
            <span className="hero-title-line-1 block font-editorial">A little</span>
            <span className="hero-title-line-2 block font-editorial italic text-[#C8A96B] font-normal mt-1 sm:mt-2">
              extraordinary.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-description text-base sm:text-lg text-[#B8B0A3] font-light max-w-xl leading-relaxed">
            Slow mornings. Thoughtful craft. Moments worth staying for.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#menu"
              className="hero-cta-btn inline-flex items-center justify-center text-xs uppercase tracking-cinematic px-8 py-4 rounded-full bg-[#C8A96B] text-[#080807] font-medium hover:bg-[#d8bd82] hover:shadow-[0_0_30px_rgba(200,169,107,0.3)] transition-all duration-300 group"
            >
              <span>Explore The Menu</span>
              <ArrowDown className="w-3.5 h-3.5 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="#story"
              className="hero-cta-btn inline-flex items-center justify-center text-xs uppercase tracking-cinematic px-8 py-4 rounded-full border border-[#C8A96B]/30 text-[#F5F0E7] bg-[#181612]/50 hover:bg-[#181612] hover:border-[#C8A96B]/70 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Visual Asset */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          <div
            ref={imageWrapperRef}
            className="relative w-full max-w-[460px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#C8A96B]/20 bg-[#11100E] group"
          >
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent z-10 opacity-70" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#080807]/50 z-10 pointer-events-none" />

            <Image
              src="/images/hero-cafe.jpg"
              alt="Artisan barista at vintage brass espresso bar in Soleran Café"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Editorial Caption Tag */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between border-t border-[#C8A96B]/20 pt-4 bg-gradient-to-t from-[#080807]/90 to-transparent">
              <div>
                <p className="text-[10px] uppercase tracking-cinematic text-[#C8A96B]">ARTISAN ROASTERY</p>
                <p className="font-editorial italic text-sm text-[#F5F0E7]">Curated Single Origins</p>
              </div>
              <span className="text-[11px] font-mono text-[#B8B0A3]/60">EST. 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hero-scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 pointer-events-none">
        <span className="text-[9px] uppercase tracking-cinematic text-[#B8B0A3]/60">SCROLL TO DISCOVER</span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-[#C8A96B] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
