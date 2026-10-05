import React from 'react';

export const SpatialHarmonySection: React.FC = () => {
  return (
    <section id="space" className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Architectural Manifesto & 4 Metrics */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-[11px] font-mono-tag tracking-[0.22em] uppercase text-[#715A3E] block mb-3">
              SPATIAL HARMONY
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#1F2625] leading-snug sm:leading-[1.3] font-heading">
              불필요한 자극을 덜어내고,<br />
              <span className="underline decoration-[#715A3E]/40 decoration-1 underline-offset-8">
                찻물과 빛의 질감
              </span>에 머뭅니다.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#6B7775] leading-relaxed font-light">
            오도행(O.DO.HAENG)은 날것 그대로의 노출 콘크리트 회랑과 단일 다원의 깊은 향미가 교차하는 침묵의 안식처입니다. 화려한 장식을 배제하고 여백의 깊이와 기물의 물성을 통해 차의 본질에 다가섭니다.
          </p>

          {/* 4 Architectural Metrics Grid matching Image 1 */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 pt-4 border-t border-[#1F2625]/10">
            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1F2625] font-display tracking-tight mb-1">
                14
              </div>
              <div className="text-[10px] font-mono-tag tracking-wider uppercase text-[#1F2625] font-medium">
                PRIVATE COUNTER SEATS
              </div>
              <div className="text-xs text-[#6B7775] mt-1 font-light">
                동시 착석 한정
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1F2625] font-display tracking-tight mb-1">
                18
              </div>
              <div className="text-[10px] font-mono-tag tracking-wider uppercase text-[#1F2625] font-medium">
                SINGLE-ORIGIN TERROIRS
              </div>
              <div className="text-xs text-[#6B7775] mt-1 font-light">
                엄선된 계절 다원
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1F2625] font-display tracking-tight mb-1">
                85°-98°C
              </div>
              <div className="text-[10px] font-mono-tag tracking-wider uppercase text-[#1F2625] font-medium">
                THERMAL EXTRACTION
              </div>
              <div className="text-xs text-[#6B7775] mt-1 font-light">
                정밀 추출 온도
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1F2625] font-display tracking-tight mb-1">
                12:00-21:00
              </div>
              <div className="text-[10px] font-mono-tag tracking-wider uppercase text-[#1F2625] font-medium">
                MINDFUL RITUAL
              </div>
              <div className="text-xs text-[#6B7775] mt-1 font-light">
                일일 세션 운영
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Image Frame matching Image 1 */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border border-[#1F2625]/10 shadow-sm bg-[#E2E6E5]">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
              alt="Ash Wood Counter & Natural Light"
              className="w-full h-[420px] sm:h-[480px] object-cover object-center"
            />
            {/* Tag in bottom-right corner */}
            <div className="absolute bottom-5 right-5 bg-[#1F2625]/85 backdrop-blur-md text-[#F2F4F3] px-3.5 py-1.5 rounded-full text-[10px] font-mono-tag tracking-widest uppercase border border-white/10">
              ASH WOOD COUNTER &amp; NATURAL LIGHT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
