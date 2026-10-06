import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const IMAGES = [
  '/hero_teahouse_interior.jpg',
  '/hero_teahouse_archive.jpg',
  '/hero_teahouse_lounge.jpg'
];

export const HeroSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-12 pt-4 pb-16">
      {/* Editorial Hero Frame */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between p-6 sm:p-12 lg:p-16 border border-[#1F2625]/15 shadow-sm">
        {/* Background Images with Fade Transition */}
        <div className="absolute inset-0 z-0 bg-[#161B1A]">
          {IMAGES.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="O.DO.HAENG Teahouse Architecture"
              className={`absolute inset-0 w-full h-full object-cover object-center scale-102 transition-opacity duration-[2000ms] ease-in-out ${
                idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
          {/* Subtle architectural gradient scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40 z-20"></div>
          <div className="absolute inset-0 bg-[#1F2625]/20 mix-blend-multiply z-20"></div>
        </div>

        {/* Top Scrim Coordinates */}
        <div className="relative z-30 flex justify-between items-start text-[#F2F4F3]/80 text-[10px] sm:text-xs font-mono-tag tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#86EFAC]/80"></span>
            <span>BUKCHON SANCTUARY · 37°35&apos;N 126°59&apos;E</span>
          </div>
          <div className="tracking-[0.25em]">
            SILENCE · STONE · VESSEL
          </div>
        </div>

        {/* Hero Bottom Narrative & CTAs matching Image 1 */}
        <div className="relative z-30 max-w-3xl pt-24 sm:pt-32">
          <span className="block text-xs sm:text-sm font-light italic tracking-widest text-[#C2A685] mb-3 font-serif">
            The Architectural Teahouse
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#F2F4F3] leading-[1.25] sm:leading-[1.2] tracking-tight mb-8 font-heading">
            정적 속에서 우려낸<br />
            한 모금의 사유.
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => scrollTo('reserve')}
              className="px-7 py-3.5 bg-[#F2F4F3] text-[#1F2625] hover:bg-white text-xs sm:text-sm font-mono-tag tracking-[0.16em] uppercase rounded-full transition-all shadow-md font-medium"
            >
              RESERVE SEAT
            </button>
            <button
              onClick={() => scrollTo('creations')}
              className="group flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-mono-tag tracking-[0.16em] uppercase text-[#F2F4F3] hover:text-[#C2A685] transition-colors"
            >
              <span>EXPLORE CREATIONS</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
