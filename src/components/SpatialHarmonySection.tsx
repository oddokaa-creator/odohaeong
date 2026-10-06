import React from 'react';

export const SpatialHarmonySection: React.FC = () => {
  return (
    <section id="space" className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Architectural Manifesto & 4 Metrics */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-[11px] font-mono-tag tracking-[0.22em] uppercase text-[#715A3E] block mb-3">
              BRAND STORY · 吾道行
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#1F2625] leading-snug sm:leading-[1.3] font-heading">
              <span className="underline decoration-[#715A3E]/40 decoration-1 underline-offset-8">
                스스로를 마주하는
              </span><br />
              차의 여정
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#6B7775] leading-relaxed font-light">
            <p>
              우리는 저마다 다른 보폭으로 하루를 살아갑니다. 쉼 없이 흘러가는 시간과 복잡한 세상 속에서 때로는 나 자신의 호흡조차 잊은 채 걷곤 합니다. <strong>‘오도행(吾道行)’</strong>은 밖으로 향하던 시선을 거두어 비로소 스스로의 내면을 향하게 하는 공간입니다.
            </p>
            <p>
              차 한 잔을 마시는 시간은 단순한 목마름을 달래는 음용을 넘어섭니다. 찻잎이 물을 만나 천천히 피어나듯, 바쁜 일상에서 벗어나 흩어졌던 마음을 모으고 나만의 호흡을 되찾는 시간. 그것은 차와 함께 떠나는 작지만 온전한 일상의 여정입니다.
            </p>
            <p>
              수백 년 동안 깊은 땅의 기운을 머금은 정통 찻잎의 깊이부터, 오늘의 감각을 맑게 깨우는 다채로운 차의 변주까지. 잠시 속도를 늦추고 잔을 마주해 보세요. 찻잔 속에 담긴 맑은 고요 속에서, 당신만의 길을 다시 발견하게 될 것입니다.
            </p>
          </div>

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
