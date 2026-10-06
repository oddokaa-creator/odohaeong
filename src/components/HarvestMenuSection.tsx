import React, { useState } from 'react';
import { Thermometer, Timer, Sparkles } from 'lucide-react';

const TEA_HARVESTS = [
  {
    id: 'tea-1',
    name: '하동 옥로 우전',
    en: 'HADONG UJEON',
    terroir: '경남 하동 화개면 / 은은한 난초향과 첫물차의 달콤한 감칠맛',
    temp: '80°C',
    steepCount: '3 Infusions',
    duration: '90s',
    price: '16,000',
    notes: ['감칠맛 (Umami)', '난초 꽃향', '맑은 연둣빛']
  },
  {
    id: 'tea-2',
    name: '백호은침 춘채',
    en: 'SILVER NEEDLE SPRING BUD',
    terroir: '복건성 정화현 해발 800m / 백련꽃 향과 어린 싹의 맑은 꿀맛',
    temp: '85°C',
    steepCount: '4 Infusions',
    duration: '120s',
    price: '20,000',
    notes: ['청초한 백합', '은빛 솜털', '감미로운 여운']
  },
  {
    id: 'tea-3',
    name: '보이차',
    en: 'PUERH TEA',
    terroir: '중국 운남성 / 세월이 빚어낸 깊고 부드러운 단맛과 우디한 풍미',
    temp: '95°C',
    steepCount: '5 Infusions',
    duration: '45s',
    price: '18,000',
    notes: ['부드러운 단맛', '우디함', '묵직한 바디감']
  }
];

export const HarvestMenuSection: React.FC = () => {
  const [activeTea, setActiveTea] = useState<string | null>(null);

  return (
    <section id="menu" className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-[11px] font-mono-tag tracking-[0.22em] uppercase text-[#715A3E] block mb-2">
          CURATED HARVESTS
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1F2625] font-heading mb-4">
          계절 단일 다원 차 목록
        </h2>
        <p className="text-xs sm:text-sm text-[#6B7775] font-light max-w-xl mx-auto leading-relaxed">
          엄선된 단일 수령 품종과 정밀 브루잉 가이드로 완성되는 온전한 다도 리추얼
        </p>
      </div>

      {/* Serving Style Info */}
      <div className="max-w-4xl mx-auto mb-16 bg-[#F9FAFA] border border-[#1F2625]/5 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-heading text-[#1F2625] mb-3">TEA SERVING GUIDE</h3>
          <p className="text-sm text-[#6B7775] font-light leading-relaxed">
            모든 단일 다원 차 메뉴는 <span className="font-medium text-[#1F2625]">HOT</span> 또는 <span className="font-medium text-[#1F2625]">ICE</span>로 주문 가능합니다.<br className="hidden md:block" />
            온도에 따라 차의 풍미를 온전히 즐기실 수 있도록, 각기 다른 전용 다기 세트로 정성스럽게 제공됩니다.
          </p>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#1F2625]/10 shadow-sm relative group">
              <img src="/hot.jpg" alt="Hot Tea Serving" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="text-[11px] font-mono-tag tracking-wider text-[#715A3E] bg-[#715A3E]/10 px-2.5 py-1 rounded-full">HOT SERVING</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#1F2625]/10 shadow-sm relative group">
              <img src="/ice.jpg" alt="Ice Tea Serving" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="text-[11px] font-mono-tag tracking-wider text-[#715A3E] bg-[#715A3E]/10 px-2.5 py-1 rounded-full">ICE SERVING</span>
          </div>
        </div>
      </div>

      {/* Tea Menu List matching Image 1 layout */}
      <div className="max-w-4xl mx-auto divide-y divide-[#1F2625]/10">
        {TEA_HARVESTS.map((tea) => {
          const isSelected = activeTea === tea.id;
          return (
            <div
              key={tea.id}
              onClick={() => setActiveTea(isSelected ? null : tea.id)}
              className={`py-7 transition-all duration-200 cursor-pointer ${
                isSelected ? 'bg-white/70 px-4 rounded-xl shadow-xs' : 'hover:bg-white/40'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-heading text-[#1F2625]">
                      {tea.name}
                    </h3>
                    <span className="text-[10px] sm:text-xs font-mono-tag tracking-wider text-[#715A3E]">
                      {tea.en}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7775] font-light">
                    {tea.terroir}
                  </p>
                </div>

                <div className="flex items-center gap-4 self-end md:self-auto shrink-0 pt-2 md:pt-0">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="text-[10px] font-mono-tag bg-[#1F2625] text-white px-1.5 py-0.5 rounded-sm">HOT</span>
                    <span className="text-[10px] font-mono-tag bg-[#E2E6E5] text-[#1F2625] px-1.5 py-0.5 rounded-sm">ICE</span>
                  </div>
                  <span className="text-[11px] font-mono-tag text-[#6B7775] tracking-wider flex items-center gap-1 bg-[#E2E6E5]/70 px-2.5 py-1 rounded">
                    <Thermometer className="w-3 h-3 text-[#3F5B4F]" />
                    {tea.temp} · {tea.steepCount}
                  </span>
                  <span className="text-base font-display font-light text-[#1F2625] min-w-[70px] text-right">
                    ₩ {tea.price}
                  </span>
                </div>
              </div>

              {/* Collapsible Sensory Note Gauge */}
              {isSelected && (
                <div className="mt-5 pt-4 border-t border-[#1F2625]/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-[#3F5B4F]">
                    <Timer className="w-4 h-4" />
                    <span>추출 권장 시간: <strong>{tea.duration}</strong></span>
                  </div>
                  <div className="sm:col-span-2 flex flex-wrap gap-2 items-center">
                    <span className="text-[#6B7775] text-[11px] font-mono-tag">주요 아로마 노트:</span>
                    {tea.notes.map((n, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full bg-[#3F5B4F]/10 text-[#3F5B4F] text-[11px]"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
