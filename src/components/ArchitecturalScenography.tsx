import React from 'react';

export const ArchitecturalScenography: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
      {/* Header matching Image 1 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-[11px] font-mono-tag tracking-[0.22em] uppercase text-[#715A3E] block mb-2">
            ARCHITECTURAL SCENOGRAPHY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1F2625] font-heading">
            공간의 침묵과 기물의 대화
          </h2>
        </div>
        <div className="text-xs font-serif italic text-[#6B7775]">
          &ldquo;차를 대하는 몸의 감각, 콘크리트와 빛의 여백&rdquo;
        </div>
      </div>

      {/* 2 Scenography Showcase Cards matching Image 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Card 01 */}
        <div className="flex flex-col group">
          <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-[#E2E6E5] border border-[#1F2625]/10">
            <img
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80"
              alt="Raw Slate & Handcrafted Teaware"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            {/* Overlay Tag inside bottom left */}
            <div className="absolute bottom-5 left-5 bg-[#1F2625]/85 backdrop-blur-md text-[#F2F4F3] px-3 py-1.5 rounded-sm text-[10px] font-mono-tag tracking-wider uppercase border border-white/10">
              01 / RAW SLATE &amp; HANDCRAFTED TEAWARE
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 text-[11px] font-mono-tag tracking-[0.14em] uppercase text-[#6B7775]">
            <span>VESSEL &amp; VOID</span>
            <span>SEOUL BUKCHON</span>
          </div>
        </div>

        {/* Card 02 */}
        <div className="flex flex-col group">
          <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-[#E2E6E5] border border-[#1F2625]/10">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Linear Shadows & Oak Bench"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            {/* Overlay Tag inside bottom left */}
            <div className="absolute bottom-5 left-5 bg-[#1F2625]/85 backdrop-blur-md text-[#F2F4F3] px-3 py-1.5 rounded-sm text-[10px] font-mono-tag tracking-wider uppercase border border-white/10">
              02 / LINEAR SHADOWS &amp; OAK BENCH
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 text-[11px] font-mono-tag tracking-[0.14em] uppercase text-[#6B7775]">
            <span>NATURAL ILLUMINATION</span>
            <span>MA (間) SPATIAL RESEARCH</span>
          </div>
        </div>
      </div>
    </section>
  );
};
