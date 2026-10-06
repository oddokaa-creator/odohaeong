import React from 'react';
import { Sparkles } from 'lucide-react';

const DESSERT_ITEMS = [
  {
    no: 'DS. 01',
    name: '큐브 팥양갱',
    en: 'Cube Red Bean Yōkan',
    flavor: '팥 본연의 은은한 단맛과 구수함, 천일염이 이끌어내는 정갈한 감칠맛, 매끄럽고 탄력 있는 텍스처',
    image: '/dessert_red_bean.jpg'
  },
  {
    no: 'DS. 02',
    name: '시나몬 호두정과',
    en: 'Cinnamon Walnut Croquant',
    flavor: '호두의 깊은 고소함, 얇은 시럽 코팅의 경쾌한 바삭함, 끝에 스치는 은은한 시나몬의 잔향',
    image: '/dessert_walnut.jpg'
  },
  {
    no: 'DS. 03',
    name: '쑥 글라세 마들렌',
    en: 'Artemisia Glazed Madeleine',
    flavor: '거문도 쑥의 짙고 싱그러운 풀향, 태운 버터(헤이즐넛 버터)의 풍부한 깊이감, 바삭한 설탕 글라세와 촉촉한 시트',
    image: '/dessert_madeleine.jpg'
  },
  {
    no: 'DS. 04',
    name: '흑임자 다크 브라우니',
    en: 'Black Sesame Dark Brownie',
    flavor: '볶은 검은깨 페이스트의 묵직한 고소함, 다크 초콜릿의 쌉싸름함, 테린느처럼 쫀득하고 꾸덕한 밀도감',
    image: '/dessert_brownie.jpg'
  },
  {
    no: 'DS. 05',
    name: '유자 현미 강정',
    en: 'Yuzu Brown Rice Crisp',
    flavor: '볶은 현미와 호박씨의 오독오독하고 가벼운 크런치, 쌀조청의 자극적이지 않은 달콤함, 산뜻하게 터지는 유자 제스트',
    image: '/dessert_rice_crisp.jpg'
  },
  {
    no: 'DS. 06',
    name: '호두 곶감말이',
    en: 'Persimmon Walnut Roll',
    flavor: '상주 곶감 과육의 쫀득하고 농밀한 자연 단맛, 통호두의 오독오독한 식감과 지방질이 주는 완벽한 밸런스',
    image: '/dessert_persimmon_roll.jpg'
  }
];

export const DessertMenuSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-[11px] font-mono-tag tracking-[0.22em] uppercase text-[#715A3E] block mb-2">
            TEA CONFECTIONS · DS. 01 — 06
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1F2625] font-heading">
            오도행 다과 (茶菓)
          </h2>
        </div>
        <div className="text-xs font-serif italic text-[#6B7775]">
          Pairing beautifully with our curated teas
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESSERT_ITEMS.map((item) => (
          <div
            key={item.no}
            className="group flex flex-col bg-[#F9FAFA] border border-[#1F2625]/10 rounded-2xl overflow-hidden hover:border-[#3F5B4F]/40 transition-all duration-300"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F2F4F3]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-[#1F2625]/80 backdrop-blur-sm text-[#F2F4F3] px-2.5 py-1 rounded-sm text-[10px] font-mono-tag tracking-widest uppercase">
                {item.no}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-lg font-heading text-[#1F2625]">
                  {item.name}
                </h3>
              </div>
              <div className="text-[11px] font-mono-tag text-[#715A3E] mb-4">
                {item.en}
              </div>
              
              <div className="mt-auto pt-4 border-t border-[#1F2625]/10">
                <div className="flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#3F5B4F]" />
                  <strong className="text-xs font-medium text-[#1F2625]">Flavor Note</strong>
                </div>
                <p className="text-xs text-[#6B7775] leading-relaxed font-light">
                  {item.flavor}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
