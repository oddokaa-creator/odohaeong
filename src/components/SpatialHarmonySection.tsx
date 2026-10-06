import React from 'react';

export const SpatialHarmonySection: React.FC = () => {
  return (
    <section id="space" className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Architectural Manifesto & 4 Metrics */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-[11px] font-mono-tag tracking-[0.22em] uppercase text-[#715A3E] block mb-3">
              BRAND STORY · STRATA OF SERENITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#1F2625] leading-snug sm:leading-[1.3] font-heading">
              단정하게 쌓아 올린 <span className="underline decoration-[#715A3E]/40 decoration-1 underline-offset-8">고요의 지층</span> 위에서,<br />
              당신만의 차가운 여백을 마주합니다.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#6B7775] leading-relaxed font-light">
            오도행(O.DO.HAENG)은 불필요한 자극을 덜어내고 여백의 팽창감을 선사하는 100평 규모의 모던 미니멀 티 라운지입니다. 무광의 그레이화이트 회벽과 먹색 괴석, 그리고 다크 월넛의 강렬한 대비가 만들어내는 '컨템포러리 젠(Contemporary Zen)'의 정수를 경험해 보세요. 전통 좌식이나 다다미를 배제하고, 넓은 간격의 100% 모던 입식 좌석을 통해 가장 쾌적하고 우아한 프라이버시를 제공합니다.
          </p>

          {/* 4 Architectural Metrics */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 pt-4 border-t border-[#1F2625]/10">
            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1F2625] font-display tracking-tight mb-1">
                100<span className="text-xl">py</span>
              </div>
              <div className="text-[10px] font-mono-tag tracking-wider uppercase text-[#1F2625] font-medium">
                SPATIAL EXPANSION
              </div>
              <div className="text-xs text-[#6B7775] mt-1 font-light">
                압도적 개방감의 회벽 라운지
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1F2625] font-display tracking-tight mb-1">
                2.0<span className="text-xl">m</span>
              </div>
              <div className="text-[10px] font-mono-tag tracking-wider uppercase text-[#1F2625] font-medium">
                PRIVACY DISTANCE
              </div>
              <div className="text-xs text-[#6B7775] mt-1 font-light">
                여유로운 테이블 간격
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1F2625] font-display tracking-tight mb-1">
                100<span className="text-xl">%</span>
              </div>
              <div className="text-[10px] font-mono-tag tracking-wider uppercase text-[#1F2625] font-medium">
                MODERN SEATING
              </div>
              <div className="text-xs text-[#6B7775] mt-1 font-light">
                전 좌석 입식 라운지 & 오마카세 바
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1F2625] font-display tracking-tight mb-1">
                2700<span className="text-xl">K</span>
              </div>
              <div className="text-[10px] font-mono-tag tracking-wider uppercase text-[#1F2625] font-medium">
                GLARELESS ILLUMINATION
              </div>
              <div className="text-xs text-[#6B7775] mt-1 font-light">
                시선을 온화하게 품는 간접 조명
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Image Frame */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border border-[#1F2625]/10 shadow-sm bg-[#E2E6E5]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Grey-White Plaster & Contemporary Zen Design"
              className="w-full h-[420px] sm:h-[480px] object-cover object-center grayscale-[0.2]"
            />
            {/* Tag in bottom-right corner */}
            <div className="absolute bottom-5 right-5 bg-[#1F2625]/85 backdrop-blur-md text-[#F2F4F3] px-3.5 py-1.5 rounded-full text-[10px] font-mono-tag tracking-widest uppercase border border-white/10">
              GREY-WHITE PLASTER & DARK WALNUT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
