import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductStory from '@/components/ProductStory';
import StorySection from '@/components/StorySection';
import VisitSection from '@/components/VisitSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#080807] selection:bg-[#C8A96B] selection:text-[#080807]">
      {/* Lenis Smooth Scrolling Engine synchronized with GSAP */}
      <SmoothScroll />

      {/* Top Subtle Scroll Progress */}
      <ScrollProgress />

      {/* Global Luxury Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main className="flex-1 w-full flex flex-col">
        {/* 00 / The Hero Experience */}
        <HeroSection />

        {/* 01-03 / Cinematic Featured Products Storytelling */}
        <ProductStory />

        {/* 04 / Brand Philosophy & Craft */}
        <StorySection />

        {/* 05 / Visit & Contact */}
        <VisitSection />
      </main>

      {/* Elegant Footer */}
      <Footer />
    </div>
  );
}
