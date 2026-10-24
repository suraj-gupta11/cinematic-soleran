'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: 'power2.out',
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        scale: 0.96,
        duration: 1.3,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative min-h-[90svh] lg:min-h-screen flex items-center justify-center py-24 lg:py-32 bg-[#11100E] border-t border-[#C8A96B]/15 overflow-hidden"
      aria-label="Our Story and Philosophy"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #C8A96B 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-20">
        {/* Left Column: Asymmetric Editorial Narrative */}
        <div ref={textRef} className="lg:col-span-5 flex flex-col justify-center space-y-8">
          <div className="flex items-center space-x-4">
            <span className="text-[11px] font-mono tracking-cinematic text-[#C8A96B]">04 / PHILOSOPHY</span>
            <span className="w-10 h-[1px] bg-[#C8A96B]/30" />
            <span className="text-[10px] uppercase tracking-cinematic text-[#B8B0A3]">
              THE SOLERAN PHILOSOPHY
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F0E7] leading-[1.12] tracking-tight">
            <span className="font-editorial block">Made for the</span>
            <span className="font-editorial italic block text-[#C8A96B]">moments in between.</span>
          </h2>

          <div className="space-y-6 text-[#B8B0A3] font-light leading-relaxed text-base sm:text-lg max-w-lg">
            <p>
              At Soleran, we believe the best moments are rarely hurried. From the first pour of espresso to
              the last bite of something sweet, every detail is an invitation to slow down, settle in, and
              savour the ordinary extraordinary.
            </p>
            <p className="text-sm text-[#777168] border-l border-[#C8A96B]/30 pl-4 italic font-editorial text-base">
              &ldquo;Craft is not merely technique. It is the patience to honor time, ingredients, and the
              people who walk through our doors.&rdquo;
            </p>
          </div>

          <div className="pt-4 flex items-center space-x-6 text-[11px] font-mono tracking-cinematic text-[#C8A96B]">
            <span>SLOW EXTRACTION</span>
            <span>·</span>
            <span>SINGLE ESTATE</span>
            <span>·</span>
            <span>HAND-CRAFTED</span>
          </div>
        </div>

        {/* Right Column: Editorial Visual */}
        <div ref={imageRef} className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[580px] aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-[#C8A96B]/20 bg-[#181612] group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#080807]/80 via-transparent to-transparent z-10" />

            <Image
              src="/images/story-cafe.jpg"
              alt="Artisan barista carefully pouring water during a slow V60 coffee ritual"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 580px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            <div className="absolute bottom-5 left-6 right-6 z-20 flex items-center justify-between border-t border-[#C8A96B]/20 pt-3">
              <span className="text-[10px] uppercase tracking-cinematic text-[#C8A96B]">THE RITUAL OF POUR</span>
              <span className="text-[10px] uppercase tracking-cinematic text-[#B8B0A3]/70">BENGALURU, INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
