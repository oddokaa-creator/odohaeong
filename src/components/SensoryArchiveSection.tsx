import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

const CREATION_ITEMS = [
  {
    no: 'NO. 01',
    name: '스모키 우롱 피즈',
    en: 'Smoky Oolong Fizz',
    price: '18,000',
    notes: '무이암차 · 클래리파이드 유자 · 훈연 소금',
    desc: '무이암차의 숯불 훈연향과 유자의 맑은 산미가 교차하는 논알콜 티 하이볼',
    image: '/smoky_oolong_fizz.jpg',
    flavorNotes: {
      top: '훈연 소금과 생 타임의 스파이시하고 산뜻한 아로마',
      middle: '맑게 정제된 고흥 유자의 상큼함과 아가베의 은은한 단맛',
      base: '대홍포 특유의 묵직한 숯불 배전향(Rock Bone), 미네랄 타닌'
    },
    ingredients: '대홍포 농축액 60ml, 유자 코디얼 20ml, 탄산수 90ml, 훈연 소금, 프레시 타임',
    serving: '맑은 호박색(Amber) 액체 사이로 섬세한 기포가 끊임없이 피어오르며 정갈한 위스키 바의 하이볼을 연상시킵니다.'
  },
  {
    no: 'NO. 02',
    name: '솔티드 피스타치오 호지차 라떼',
    en: 'Salted Pistachio Hojicha Latte',
    price: '19,000',
    notes: '피스타치오 오트 밀크 · 극배전 호지차 · 솔티드 폼',
    desc: '구운 찻잎의 구수함과 묵직한 피스타치오, 짭조름한 벨벳 크림의 레이어드 라떼',
    image: '/salted_pistachio_hojicha.jpg',
    flavorNotes: {
      top: '짭짤한 감칠맛의 벨벳 생크림, 바삭하게 씹히는 구운 피스타치오',
      middle: '피스타치오 페이스트와 오트 밀크의 밀도 높은 고소함',
      base: '극배전 교토 호지차의 몰티한 덖음 향과 잔잔한 쌉싸름함'
    },
    ingredients: '호지차 베이스 50ml, 피스타치오 오트 밀크 120ml, 솔티드 폼 40ml, 구운 피스타치오 분태',
    serving: '피스타치오 그린, 짙은 카라멜 브라운, 새하얀 폼으로 이어지는 완벽한 3단 층분리.'
  },
  {
    no: 'NO. 03',
    name: '히비스커스 자몽 스파클',
    en: 'Hibiscus Grapefruit Sparkle',
    price: '18,500',
    notes: '히비스커스 로즈힙 냉침 · 루비 자몽 · 엘더플라워',
    desc: '루비빛 투명한 수색에 자몽의 쌉싸름함과 엘더플라워의 우아한 꽃향이 터지는 탄산 티',
    image: '/hibiscus_grapefruit_sparkle.jpg',
    flavorNotes: {
      top: '화사한 엘더플라워 아로마와 핑크 페퍼의 알싸한 향미',
      middle: '생자몽 특유의 쌉싸름하고 쥬시한 시트러스 과즙감',
      base: '히비스커스와 로즈힙의 날렵하고 청량한 천연 유기산 피니시'
    },
    ingredients: '히비스커스 로즈힙 냉침액 60ml, 루비 자몽 주스 40ml, 엘더플라워 시럽 15ml, 토닉워터',
    serving: '붉은 루비빛과 자몽 핑크빛의 자연스러운 그라데이션, 화려하고 감각적인 비주얼.'
  },
  {
    no: 'NO. 04',
    name: '탠저린 백차 브리즈',
    en: 'Tangerine White Tea Breeze',
    price: '18,000',
    notes: '백호은침 냉침 · 진피 꿀 코디얼 · 감귤 칩',
    desc: '은빛 솜털의 백호은침과 말린 귤피의 청초한 향미가 주는 섬세한 입가심 티',
    image: '/tangerine_white_tea.jpg',
    flavorNotes: {
      top: '갓 딴 귤꽃과 싱그러운 애플민트의 맑은 향',
      middle: '백호은침 특유의 달큰한 아미노산 감칠맛과 풋풋한 찻잎 향',
      base: '제주 감귤 껍질(진피)의 잔잔한 비터 스위트 여운'
    },
    ingredients: '백호은침 냉침액 90ml, 진피 꿀 코디얼 15ml, 약탄산수 60ml, 귤 칩, 애플민트',
    serving: '연한 볏짚색 맑은 수색 위에 노란 귤 칩과 초록 민트 잎이 단아하게 떠 있어 정갈함을 극대화합니다.'
  },
  {
    no: 'NO. 05',
    name: '크런치 현미 말차 아인슈페너',
    en: 'Crunchy Brown Rice Matcha Einspänner',
    price: '19,500',
    notes: '격불 말차 에스프레소 · 구운 현미 크림 · 팝 현미',
    desc: '격불한 말차의 쌉쌀함과 구수한 볶은 현미 크림, 바삭한 퍼프가 만드는 식감의 변주',
    image: '/crunchy_brown_rice_matcha.jpg',
    flavorNotes: {
      top: '바삭한 볶은 팝 현미의 경쾌한 식감, 고소하고 묵직한 곡물 크림',
      middle: '가볍고 담백한 귀리 우유의 바디감',
      base: '유기농 첫물 말차의 짙은 풀향, 선명한 쌉싸름함과 감칠맛'
    },
    ingredients: '격불 말차 에스프레소 50ml, 언스위트 오트 밀크 70ml, 구운 현미 크림 40ml, 볶은 팝 현미',
    serving: '짙은 에메랄드 그린과 베이지 크림의 대비, 표면의 황금빛 크런치가 독특한 텍스처를 암시합니다.'
  },
  {
    no: 'NO. 06',
    name: '탄배 호지 아메리카노',
    en: 'Hojicha Dark \'Tea-no\'',
    price: '16,000',
    notes: '극배전 호지차 샷 · 하드 셰이킹 · 무설탕',
    desc: '다크 로스팅 원두의 바디감과 에스프레소 크레마를 무설탕 찻잎으로 구현한 데일리 티',
    image: '/hojicha_dark_teano.jpg',
    flavorNotes: {
      top: '미세한 거품에서 피어나는 볶은 곡물과 카카오 닙스의 아로마',
      middle: '씁쓸하면서도 목넘김이 묵직한 몰트 풍미',
      base: '잔당감이 전혀 없는 완벽한 무설탕 맑고 드라이한 피니시'
    },
    ingredients: '극배전 호지차 농축 샷 80ml, 냉정수 120ml',
    serving: '흑맥주처럼 상단에 짙은 골드-브라운 컬러의 미세한 티 크레마가 형성되는 스페셜티 롱블랙.'
  }
];

export const SensoryArchiveSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="creations" className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-[11px] font-mono-tag tracking-[0.22em] uppercase text-[#715A3E] block mb-2">
            SENSORY ARCHIVE · NO. 01 — 06
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1F2625] font-heading">
            시그니처 티 베리에이션 &amp; 크리에이션
          </h2>
        </div>
        <div className="text-xs font-serif italic text-[#6B7775]">
          Visual First Botanical Creations
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CREATION_ITEMS.map((item) => {
          const isExpanded = expandedId === item.no;
          return (
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
                  <span className="text-sm font-display text-[#1F2625] font-light shrink-0">
                    ₩ {item.price}
                  </span>
                </div>
                <div className="text-[11px] font-mono-tag text-[#715A3E] mb-3">
                  {item.en}
                </div>
                <p className="text-xs text-[#6B7775] leading-relaxed mb-4 font-light">
                  {item.desc}
                </p>

                <div className="mt-auto">
                  <button 
                    onClick={() => toggleExpand(item.no)}
                    className="w-full flex items-center justify-between py-3 border-t border-[#1F2625]/10 text-[11px] font-mono-tag text-[#3F5B4F] hover:bg-[#3F5B4F]/5 px-2 -mx-2 rounded transition-colors"
                  >
                    <span>{item.notes}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>

                  {isExpanded && (
                    <div className="pt-4 pb-2 text-xs border-t border-[#1F2625]/5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div>
                        <strong className="block text-[#1F2625] mb-1.5 font-medium">Flavor Notes</strong>
                        <ul className="space-y-1 text-[#6B7775] font-light">
                          <li><span className="text-[#715A3E] mr-1">T:</span> {item.flavorNotes.top}</li>
                          <li><span className="text-[#715A3E] mr-1">M:</span> {item.flavorNotes.middle}</li>
                          <li><span className="text-[#715A3E] mr-1">B:</span> {item.flavorNotes.base}</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="block text-[#1F2625] mb-1 font-medium">Ingredients</strong>
                        <p className="text-[#6B7775] font-light leading-relaxed">{item.ingredients}</p>
                      </div>
                      <div>
                        <strong className="block text-[#1F2625] mb-1 font-medium">Serving</strong>
                        <p className="text-[#6B7775] font-light leading-relaxed">{item.serving}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
