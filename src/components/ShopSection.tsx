import React, { useState } from 'react';
import { appStore } from '../store/appStore';
import { ShopItem } from '../types';
import { ShoppingBag, FileText, Check, ShieldCheck, BookOpen, Package, Send } from 'lucide-react';

const FEATURED_SET: ShopItem = {
  id: 'gift-signature-4-6-vip',
  name: '시그니처 다과 오동나무 목합 세트 (VIP Gift)',
  subtitle: 'PREMIUM ARTISANAL CONFECTIONERY GIFT',
  category: 'GIFT SETS',
  price: 52000,
  badge: 'VIP GIFT EDITION',
  image: '/shop_featured_vip_gift_1791268692307.jpg',
  description: '매장에서 직접 제조하는 다과 중 보관성이 검증된 큐브 팥양갱, 흑임자 다크 브라우니, 호두 곶감말이, 쑥 글라세 마들렌 등을 엄선하여 오동나무 합판 슬라이딩 박스와 먹색 린넨 보자기로 정성껏 포장했습니다.',
  packagingOptions: [
    { name: '시그니처 다과 4구 세트', priceAdd: -14000 },
    { name: '시그니처 다과 6구 세트 (마들렌 추가)', priceAdd: 0 }
  ],
  inStock: true
};

const SHOP_CATALOG: ShopItem[] = [
  {
    id: 'product-tea-tins',
    name: '매트 블랙 틴케이스 잎차',
    subtitle: 'SINGLE ORIGIN & BLEND',
    category: 'SPECIAL',
    price: 38000,
    badge: '티 컬렉션',
    image: '/shop_tea_tin_cans_1791268703937.jpg',
    description: '집에서도 티하우스의 수색과 향을 구현할 수 있는 잎차 라인입니다. 이중 밀폐 캡과 무광 엠보싱 타이포그래피가 돋보이는 모던한 틴캔에 담겨 있습니다. (대홍포, 백호은침 등 선택)',
    inStock: true
  },
  {
    id: 'product-pyramid-teabags',
    name: '피라미드 생분해 티백 어소트 (8개입)',
    subtitle: 'BOUTIQUE BOX ASSORTMENT',
    category: 'GIFT SETS',
    price: 22000,
    badge: '선물용 차 세트',
    image: '/shop_teabag_box_1791268714520.jpg',
    description: '옥수수 전분 유래 PLA 생분해 삼각 티백. 회백색 한지 지함 박스에 호지차, 백차, 루이보스, 대홍포가 각각 2입씩 알루미늄 포일 파우치로 개별 포장되어 있습니다.',
    inStock: true
  },
  {
    id: 'product-teaware-craft',
    name: '시그니처 흙 질감 찻잔 세트',
    subtitle: 'ARTISANAL TEAWARE SET',
    category: 'TEACUPS & OBJECTS',
    price: 48000,
    badge: '공예 찻잔',
    image: '/shop_teaware_craft_1791268726651.jpg',
    description: '백자토와 철분 점토를 섞어 빚어낸 무광 분청 찻잔(2인 조)입니다. 겉면은 회벽처럼 까슬한 질감을, 내면은 투명 매트유를 시유하여 아름다운 탕색을 온전히 관찰할 수 있습니다.',
    inStock: true
  },
  {
    id: 'product-zen-incense',
    name: '젠 인센스 스틱 & 자연석 홀더 키트',
    subtitle: 'SCENT & RITUAL OBJECT',
    category: 'TEACUPS & OBJECTS',
    price: 35000,
    badge: '라이프스타일',
    image: '/shop_incense_kit_1791268738976.jpg',
    description: '죽심이 없는 순수 분말 압출 방식 인센스 스틱 40개와, 실제 현무암 원석을 수작업으로 가공한 1:1 핸드크래프트 홀더 세트입니다. 정적인 후각적 경험을 공간에 채워보세요.',
    inStock: true
  }
];


export const ShopSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'GIFT SETS' | 'TEACUPS & OBJECTS' | 'SPECIAL'>('ALL');
  const [selectedPackaging, setSelectedPackaging] = useState<number>(0);
  const [messageCardOpen, setMessageCardOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const filteredItems = activeTab === 'ALL'
    ? SHOP_CATALOG
    : SHOP_CATALOG.filter(item => item.category === activeTab);

  const handleAddFeaturedToCart = () => {
    const option = FEATURED_SET.packagingOptions![selectedPackaging];
    appStore.addToCart(FEATURED_SET, option.name, option.priceAdd);
  };

  const handleOpenVipInquiry = () => {
    const el = document.getElementById('inquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      appStore.addToast('info', '대량 기프트 상담', '하단 의뢰서 양식에서 상담 내용을 작성해 주세요.');
    }
  };

  return (
    <section id="shop" className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
      {/* Header matching Image 7 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <span className="text-[11px] font-mono-tag tracking-[0.22em] uppercase text-[#715A3E] block mb-2">
            ARCHIVAL EDITIONS &amp; OBJECTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-[#1F2625] font-heading mb-3">
            정적의 시간을 선물하다.
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7775] font-light max-w-xl leading-relaxed">
            오도행이 엄선한 단일 다원의 계절 찻잎과 현대 도예가의 손길로 빚어낸 미니멀 찻잔·다기 에디션. 일상 속 정밀한 쉼을 위한 아키텍처럴 셀렉션입니다.
          </p>
        </div>

        {/* Tab Filters matching Image 7 */}
        <div className="flex flex-wrap gap-2 text-[11px] font-mono-tag tracking-wider uppercase">
          {(['ALL', 'GIFT SETS', 'TEACUPS & OBJECTS', 'SPECIAL'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === tab
                  ? 'bg-[#1F2625] text-[#F2F4F3]'
                  : 'bg-[#E2E6E5]/60 text-[#6B7775] hover:text-[#1F2625]'
              }`}
            >
              {tab === 'ALL' && '전체 컬렉션 (ALL)'}
              {tab === 'GIFT SETS' && '선물용 차 세트 (GIFT SETS)'}
              {tab === 'TEACUPS & OBJECTS' && '공예 찻잔 & 기물 (TEACUPS & OBJECTS)'}
              {tab === 'SPECIAL' && '스페셜 에디션 (SPECIAL)'}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Big Showcase Card matching Image 7 */}
      <div className="bg-[#E2E6E5]/40 border border-[#1F2625]/12 rounded-3xl p-6 sm:p-10 lg:p-12 mb-16 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image Showcase Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-[#F2F4F3] border border-[#1F2625]/10">
              <img
                src={FEATURED_SET.image}
                alt={FEATURED_SET.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-[#1F2625]/85 backdrop-blur-md text-[#F2F4F3] px-3 py-1 rounded text-[10px] font-mono-tag tracking-wider uppercase">
                {FEATURED_SET.badge}
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] font-mono-tag tracking-[0.2em] text-[#715A3E] uppercase block mb-1">
                {FEATURED_SET.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#1F2625] font-heading mb-2">
                {FEATURED_SET.name}
              </h3>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-light font-display text-[#1F2625]">
                  ₩ {FEATURED_SET.price.toLocaleString()}
                </span>
                <span className="text-xs text-[#715A3E] font-light">
                  무료 배송 · 고급 쇼핑백 증정
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#6B7775] leading-relaxed font-light">
              {FEATURED_SET.description}
            </p>

            {/* Spec List */}
            <div className="space-y-2 py-3 border-y border-[#1F2625]/10 text-xs text-[#1F2625]/90 font-light">
              <div className="flex items-start gap-2">
                <Package className="w-4 h-4 text-[#715A3E] shrink-0 mt-0.5" />
                <span>용량: 각 40g (총 120g, 약 36회 추출 분량)</span>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-[#715A3E] shrink-0 mt-0.5" />
                <span>찻줄 가이드북 &amp; 다도 페어링 노트 동봉</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#715A3E] shrink-0 mt-0.5" />
                <span>지속 가능한 비목재 친환경 페이퍼 박스 &amp; 패브릭 리본</span>
              </div>
            </div>

            {/* Packaging Option Radio Selector matching Image 7 */}
            <div>
              <label className="block text-[11px] font-mono-tag tracking-wider uppercase text-[#1F2625] mb-2.5">
                PACKAGE FINISHING OPTION
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURED_SET.packagingOptions!.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedPackaging(idx)}
                    className={`p-3 text-left rounded-xl border transition-all text-xs flex items-center justify-between ${
                      selectedPackaging === idx
                        ? 'border-[#3F5B4F] bg-[#3F5B4F]/10 text-[#1F2625]'
                        : 'border-[#1F2625]/15 bg-white/70 text-[#6B7775] hover:border-[#1F2625]/40'
                    }`}
                  >
                    <span>{opt.name}</span>
                    {selectedPackaging === idx && (
                      <Check className="w-4 h-4 text-[#3F5B4F] shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleAddFeaturedToCart}
                className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3.5 px-6 bg-[#3F5B4F] hover:bg-[#344B41] text-[#F2F4F3] text-xs font-mono-tag tracking-wider uppercase rounded-xl transition-colors font-medium shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>선물 세트 담기 (ADD TO CART)</span>
              </button>

              <button
                onClick={() => setMessageCardOpen(!messageCardOpen)}
                className="flex items-center justify-center gap-2 py-3.5 px-5 bg-white border border-[#1F2625]/20 hover:border-[#1F2625] text-[#1F2625] text-xs font-mono-tag tracking-wider uppercase rounded-xl transition-colors"
              >
                <FileText className="w-4 h-4 text-[#715A3E]" />
                <span>선물 메시지 카드 작성</span>
              </button>
            </div>

            {/* Collapsible Message Card Form */}
            {messageCardOpen && (
              <div className="mt-3 p-4 bg-white border border-[#1F2625]/15 rounded-xl space-y-2 animate-in fade-in duration-200">
                <span className="text-[11px] font-mono-tag tracking-wider uppercase text-[#715A3E] block">
                  수제 한지 인장 카드 동봉 문구
                </span>
                <textarea
                  value={customMessage}
                  onChange={e => setCustomMessage(e.target.value)}
                  placeholder="보내시는 분의 따뜻한 사유와 축하의 마음을 적어주세요. 캘리그래피 인쇄로 카드에 담아드립니다."
                  rows={3}
                  className="w-full text-xs p-3 bg-[#F2F4F3] border border-[#1F2625]/10 rounded-lg focus:outline-none focus:border-[#3F5B4F]"
                />
                <button
                  type="button"
                  onClick={() => {
                    setMessageCardOpen(false);
                    appStore.addToast('success', '메시지 카드 저장', '입력하신 문구가 선물 패키지에 동봉됩니다.');
                  }}
                  className="px-3 py-1.5 bg-[#3F5B4F] text-[#F2F4F3] text-[11px] rounded-md font-mono-tag"
                >
                  카드 문구 적용
                </button>
              </div>
            )}

            <div className="text-[11px] text-[#6B7775] text-center sm:text-left">
              원하는 발송 일자 지정 가능 · 기업 대량 주문 별도 문의
            </div>
          </div>
        </div>
      </div>

      {/* Product Catalog Grid matching Image 7 */}
      <div className="mb-20">
        <div className="flex justify-between items-baseline mb-8">
          <div>
            <span className="text-[11px] font-mono-tag tracking-[0.22em] text-[#715A3E] uppercase block mb-1">
              EDITIONS &amp; ARTIFACTS
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-[#1F2625] font-heading">
              사유의 도구와 찻잎 에디션
            </h3>
          </div>
          <div className="text-xs text-[#6B7775] font-serif italic hidden sm:block">
            매일의 차 생활을 하나의 정갈한 의식으로 변모시키는 작가 공예품과 계절 시그니처 키트.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-white/70 border border-[#1F2625]/10 rounded-2xl overflow-hidden hover:border-[#3F5B4F]/40 transition-all duration-300"
            >
              <div>
                <div className="relative aspect-square overflow-hidden bg-[#F2F4F3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  {item.badge && (
                    <div className="absolute top-3 left-3 bg-[#1F2625]/80 backdrop-blur-sm text-[#F2F4F3] px-2 py-0.5 rounded text-[9px] font-mono-tag tracking-wider uppercase">
                      {item.badge}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="text-[10px] font-mono-tag tracking-wider text-[#715A3E] uppercase mb-1">
                    {item.subtitle}
                  </div>
                  <h4 className="text-base font-heading text-[#1F2625] mb-2 leading-snug group-hover:text-[#3F5B4F] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#6B7775] leading-relaxed line-clamp-2 font-light mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#1F2625]/5 mt-auto">
                <span className="text-sm font-display font-light text-[#1F2625]">
                  ₩ {item.price.toLocaleString()}
                </span>
                <button
                  onClick={() => appStore.addToCart(item)}
                  className="px-3 py-1.5 text-[11px] font-mono-tag tracking-wider uppercase text-[#3F5B4F] hover:bg-[#3F5B4F]/10 rounded-md transition-colors"
                >
                  주문 가능 +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Gifting Philosophy matching Image 7 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-12 border-t border-[#1F2625]/10">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden aspect-4/5 bg-[#E2E6E5] border border-[#1F2625]/10">
            <img
              src="https://images.unsplash.com/photo-1545048702-7936070012e7?auto=format&fit=crop&w=800&q=80"
              alt="Ritual of Packaging"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-[#1F2625]/85 backdrop-blur-md text-[#F2F4F3] p-4 rounded-xl text-xs border border-white/10">
              <span className="text-[10px] font-mono-tag tracking-widest text-[#C2A685] block mb-1 uppercase">
                RITUAL OF PACKAGING
              </span>
              <p className="font-heading font-light leading-relaxed">
                기다림의 품격을 담는 섬세한 손길. 오도행의 모든 에디션은 티 마스터의 검수를 거쳐 완벽한 정갈함으로 봉인됩니다.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-[11px] font-mono-tag tracking-[0.2em] text-[#715A3E] uppercase block mb-1">
              THE GIFTING PHILOSOPHY
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#1F2625] font-heading mb-3">
              정성과 비움이 공존하는 포장의 미학
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7775] leading-relaxed font-light">
              단순한 물건을 건네는 것을 넘어, 보내는 이의 깊은 배려와 받는 이의 고요한 순간을 함께 포장합니다.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#3F5B4F]/10 flex items-center justify-center text-[#3F5B4F] shrink-0 mt-1">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-heading font-medium text-[#1F2625] mb-1">
                  맞춤 인장과 보자기 포장
                </h4>
                <p className="text-xs text-[#6B7775] leading-relaxed font-light">
                  자연 염색된 정갈한 린넨 패브릭 래핑과 오도행 고유의 흑녹색 왁스 실링 스탬프. 전통 매듭을 현대적으로 재해석하여 우아한 첫인상을 선사합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#3F5B4F]/10 flex items-center justify-center text-[#3F5B4F] shrink-0 mt-1">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-heading font-medium text-[#1F2625] mb-1">
                  다도 큐레이션 리플렛 동봉
                </h4>
                <p className="text-xs text-[#6B7775] leading-relaxed font-light">
                  처음 차를 접하는 분도 부담 없이 찻잎 고유의 향미를 누릴 수 있도록 물의 온도, 침출 시간, 다구 다루는 법을 친절하게 서술한 가이드북을 제공합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#3F5B4F]/10 flex items-center justify-center text-[#3F5B4F] shrink-0 mt-1">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-heading font-medium text-[#1F2625] mb-1">
                  안전한 완충재와 친환경 패키징
                </h4>
                <p className="text-xs text-[#6B7775] leading-relaxed font-light">
                  도예 기물의 형태를 정밀하게 보호하는 주문 제작 생분해성 펄프 몰드와 지속 가능한 종이 완충재를 사용하여 지구와 기물 모두를 안전하게 지킵니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate & VIP Gift Banner matching Image 7 */}
      <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#E2E6E5] to-[#F2F4F3] border border-[#1F2625]/15 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
        <div className="max-w-xl space-y-2">
          <span className="text-[10px] font-mono-tag tracking-widest text-[#715A3E] uppercase block">
            CORPORATE &amp; VIP GIFT SERVICES
          </span>
          <h4 className="text-xl sm:text-2xl font-light text-[#1F2625] font-heading">
            소중한 분들을 위한 맞춤형 대량 기프트 큐레이션
          </h4>
          <p className="text-xs text-[#6B7775] font-light leading-relaxed">
            기업 임직원, VIP 클라이언트, 웨딩 및 특별한 기념일을 위한 맞춤형 차 큐레이션 및 로고 각인·슬리브 맞춤 제작 서비스를 제공합니다. 전담 컨시어지가 예산과 일정에 최적화된 제안서를 전달해 드립니다.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-[11px] text-[#6B7775]">
            <span className="flex items-center gap-1">✓ 최소 10세트 이상 주문 가능</span>
            <span className="flex items-center gap-1">✓ 기업 로고 레터프레스 각인</span>
            <span className="flex items-center gap-1">✓ 다중 배송지 분할 출고 지원</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            onClick={handleOpenVipInquiry}
            className="px-6 py-3.5 bg-[#3F5B4F] hover:bg-[#344B41] text-[#F2F4F3] text-xs font-mono-tag tracking-wider uppercase rounded-xl transition-colors font-medium flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>대량 선물 상담 신청 (INQUIRE)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
