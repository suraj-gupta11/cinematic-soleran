'use client';

import Image from 'next/image';
import { Product } from '@/types';

interface ProductSceneProps {
  product: Product;
  totalProducts?: number;
  className?: string;
  isActive?: boolean;
}

export default function ProductScene({
  product,
  totalProducts = 3,
  className = '',
}: ProductSceneProps) {
  const isImageLeft = product.composition === 'image-left';

  return (
    <article
      className={`relative w-full min-h-[90svh] lg:min-h-screen flex items-center justify-center py-16 lg:py-24 ${className}`}
      aria-label={`${product.nameItalic} ${product.name}`}
    >
      {/* Product-specific Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15 blur-[140px]"
        style={{
          background: `radial-gradient(circle, ${product.accent} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-20">
        {/* Text Content Block */}
        <div
          className={`product-text-col flex flex-col justify-center space-y-7 z-10 ${
            isImageLeft ? 'lg:col-span-5 lg:order-2' : 'lg:col-span-5 lg:order-1'
          }`}
        >
          {/* Header metadata: Index and Category */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-mono tracking-cinematic text-[#C8A96B] font-semibold">
              {product.number} / 0{totalProducts}
            </span>
            <span className="w-8 h-[1px] bg-[#C8A96B]/30" />
            <span className="text-[10px] uppercase tracking-cinematic text-[#B8B0A3]">
              {product.category}
            </span>
          </div>

          {/* Product Heading with oversized italic serif */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#F5F0E7] leading-[1.08] tracking-tight">
            <span className="font-editorial italic block text-[#C8A96B] font-normal">
              {product.nameItalic}
            </span>
            <span className="font-editorial block">{product.name}</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#B8B0A3] font-light leading-relaxed max-w-md">
            {product.description}
          </p>

          {/* Price and Note Divider */}
          <div className="pt-2 border-t border-[#C8A96B]/20 flex items-center justify-between max-w-md">
            <div className="flex items-baseline space-x-2">
              <span className="text-xs uppercase tracking-cinematic text-[#B8B0A3]/70">PRICE</span>
              <span className="text-2xl sm:text-3xl font-editorial font-medium text-[#F5F0E7]">
                {product.price}
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase tracking-cinematic text-[#C8A96B]">
                {product.note}
              </span>
            </div>
          </div>
        </div>

        {/* Image Visual Block */}
        <div
          className={`product-image-col relative flex items-center justify-center ${
            isImageLeft ? 'lg:col-span-7 lg:order-1' : 'lg:col-span-7 lg:order-2'
          }`}
        >
          <div className="relative w-full max-w-[500px] sm:max-w-[540px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#C8A96B]/20 bg-[#11100E] group">
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080807]/90 via-transparent to-transparent z-10 opacity-60" />
            
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 540px"
              className="product-img object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Corner Badge */}
            <div className="absolute top-5 right-5 z-20 px-3.5 py-1.5 rounded-full bg-[#080807]/80 backdrop-blur-md border border-[#C8A96B]/30">
              <span className="text-[10px] font-mono tracking-cinematic text-[#C8A96B]">
                SOLERAN SELECT
              </span>
            </div>

            {/* Bottom Accent Line */}
            <div
              className="absolute bottom-0 inset-x-0 h-1 z-20"
              style={{ backgroundColor: product.accent }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
