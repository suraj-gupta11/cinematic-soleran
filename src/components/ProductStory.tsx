'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS } from '@/lib/products';
import ProductScene from './ProductScene';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Responsive matchMedia for GSAP
      const mm = gsap.matchMedia();

      // Desktop Pinning and Transitions
      mm.add('(min-width: 1024px)', () => {
        const scenes = gsap.utils.toArray<HTMLElement>('.desktop-product-scene');
        if (!scenes || scenes.length < 3) return;

        // Ensure scenes stack on top of each other
        gsap.set(scenes[0], { opacity: 1, yPercent: 0, zIndex: 10 });
        gsap.set(scenes[1], { opacity: 0, yPercent: 30, zIndex: 20 });
        gsap.set(scenes[2], { opacity: 0, yPercent: 30, zIndex: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinWrapperRef.current,
            start: 'top top',
            end: '+=240%',
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              if (progress < 0.33) {
                setActiveIndex(0);
              } else if (progress < 0.67) {
                setActiveIndex(1);
              } else {
                setActiveIndex(2);
              }
            },
          },
        });

        // Scene 1 -> Scene 2
        tl.to(
          scenes[0].querySelector('.product-text-col'),
          { opacity: 0, y: -40, duration: 1, ease: 'power2.inOut' },
          'step1'
        )
          .to(
            scenes[0].querySelector('.product-image-col'),
            { opacity: 0, scale: 0.94, duration: 1, ease: 'power2.inOut' },
            'step1'
          )
          .to(
            scenes[1],
            { opacity: 1, yPercent: 0, duration: 1.2, ease: 'power2.out' },
            'step1+=0.3'
          )
          .fromTo(
            scenes[1].querySelector('.product-text-col'),
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
            'step1+=0.5'
          )
          .fromTo(
            scenes[1].querySelector('.product-image-col'),
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
            'step1+=0.5'
          )

          // Scene 2 -> Scene 3
          .to(
            scenes[1].querySelector('.product-text-col'),
            { opacity: 0, y: -40, duration: 1, ease: 'power2.inOut' },
            'step2'
          )
          .to(
            scenes[1].querySelector('.product-image-col'),
            { opacity: 0, scale: 0.94, duration: 1, ease: 'power2.inOut' },
            'step2'
          )
          .to(
            scenes[2],
            { opacity: 1, yPercent: 0, duration: 1.2, ease: 'power2.out' },
            'step2+=0.3'
          )
          .fromTo(
            scenes[2].querySelector('.product-text-col'),
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
            'step2+=0.5'
          )
          .fromTo(
            scenes[2].querySelector('.product-image-col'),
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
            'step2+=0.5'
          );
      });

      // Mobile/Tablet: Sequential scroll reveal without locking the screen
      mm.add('(max-width: 1023px)', () => {
        const mobileScenes = gsap.utils.toArray<HTMLElement>('.mobile-product-scene');
        mobileScenes.forEach((scene, index) => {
          ScrollTrigger.create({
            trigger: scene,
            start: 'top 60%',
            end: 'bottom 40%',
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });

          gsap.from(scene.querySelector('.product-text-col'), {
            scrollTrigger: {
              trigger: scene,
              start: 'top 75%',
            },
            opacity: 0,
            y: 35,
            duration: 0.9,
            ease: 'power2.out',
          });

          gsap.from(scene.querySelector('.product-image-col'), {
            scrollTrigger: {
              trigger: scene,
              start: 'top 70%',
            },
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: 'power2.out',
          });
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="menu" ref={containerRef} className="relative bg-[#080807] overflow-hidden">
      {/* Floating Section Progress Indicator for Desktop */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center space-y-4 pointer-events-none">
        <div className="text-[10px] font-mono tracking-cinematic text-[#C8A96B] font-medium bg-[#080807]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#C8A96B]/20">
          0{activeIndex + 1} / 03
        </div>
        <div className="flex flex-col space-y-2">
          {PRODUCTS.map((_, idx) => (
            <div
              key={idx}
              className={`w-1 transition-all duration-500 rounded-full ${
                activeIndex === idx ? 'h-8 bg-[#C8A96B]' : 'h-2 bg-[#C8A96B]/25'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Pinned Container */}
      <div className="hidden lg:block">
        <div ref={pinWrapperRef} className="relative w-full h-screen overflow-hidden">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={`desktop-product-scene absolute inset-0 w-full h-full flex items-center justify-center transition-all ${
                index === 0 ? 'pointer-events-auto' : 'pointer-events-auto'
              }`}
            >
              <ProductScene product={product} totalProducts={PRODUCTS.length} isActive={activeIndex === index} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Natural Scrolling Scenes */}
      <div className="lg:hidden flex flex-col divide-y divide-[#C8A96B]/10">
        {PRODUCTS.map((product, index) => (
          <div key={product.id} className="mobile-product-scene">
            <ProductScene product={product} totalProducts={PRODUCTS.length} isActive={activeIndex === index} />
          </div>
        ))}
      </div>
    </section>
  );
}
