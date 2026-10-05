import React from 'react';
import { Sparkles } from 'lucide-react';

const CREATION_ITEMS = [
  {
    no: 'NO. 01',
    name: '로즈마리 블러드오렌지 스파클링',
    en: 'Rosemary Blood Orange Cold Brew',
    price: '18,000',
    notes: '보태니컬 저온 침출 · 천연 탄산 레이어',
    desc: '하동 야생 찻잎을 18시간 동안 저온 추출하여 블러드 오렌지의 산미와 신선한 로즈마리 아로마를 층상으로 레이어링한 시그니처.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    no: 'NO. 02',
    name: '세레모니얼 벨벳 말차 클라우드',
    en: 'Ceremonial Velvet Matcha Cloud',
    price: '19,000',
    notes: '교토 우지 사미도리 · 실키 오트 크림 폼',
    desc: '교토 우지 단일 수령 사미도리 찻잎을 맷돌로 미세하게 갈아낸 세레모니얼 말차 위에 고소하고 부드러운 오트 밀크 폼을 얹은 음료.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    no: 'NO. 03',
    name: '크리스털 보태니컬 콜드브루',
    en: 'Crystal Botanical Tea Cocktail',
    price: '18,500',
    notes: '타임 허브 인퓨전 · 천연 암반수 빙하석',
    desc: '청정 백호은침 찻잎에 야생 타임 허브를 인퓨징하고 수제 투명 얼음과 함께 페어링하여 맑고 청량한 텍스처를 구현한 무알콜 티 칵테일.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
  }
];

export const SensoryArchiveSection: React.FC = () => {
  return (
    <section id="creations" className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
      {/* Header matching Image 1 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-[11px] font-mono-tag tracking-[0.22em] uppercase text-[#715A3E] block mb-2">
            SENSORY ARCHIVE · NO. 01 — 03
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1F2625] font-heading">
            시그니처 티 베리에이션 &amp; 크리에이션
          </h2>
        </div>
        <div className="text-xs font-serif italic text-[#6B7775]">
          Visual First Botanical Creations
        </div>
      </div>

      {/* 3 Creation Cards matching Image 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {CREATION_ITEMS.map((item) => (
          <div
            key={item.no}
            className="group flex flex-col bg-[#E2E6E5]/50 border border-[#1F2625]/10 rounded-2xl overflow-hidden hover:border-[#3F5B4F]/40 transition-all duration-300"
          >
            {/* Card Image Container with Inset Tag */}
            <div className="relative w-full aspect-4/5 overflow-hidden bg-[#F2F4F3]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              {/* Badge Tag */}
              <div className="absolute top-4 left-4 bg-[#1F2625]/80 backdrop-blur-sm text-[#F2F4F3] px-2.5 py-1 rounded-sm text-[10px] font-mono-tag tracking-widest uppercase">
                {item.no}
              </div>
            </div>

            {/* Content & Pricing */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white/60">
              <div>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-base sm:text-lg font-heading text-[#1F2625] group-hover:text-[#3F5B4F] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-sm font-display text-[#1F2625] font-light">
                    ₩ {item.price}
                  </span>
                </div>
                <div className="text-[11px] font-mono-tag text-[#715A3E] mb-3">
                  {item.en}
                </div>
                <p className="text-xs text-[#6B7775] leading-relaxed mb-4 font-light">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1F2625]/10 text-[11px] text-[#6B7775] font-light flex items-center justify-between">
                <span>{item.notes}</span>
                <Sparkles className="w-3 h-3 text-[#3F5B4F]/60" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
