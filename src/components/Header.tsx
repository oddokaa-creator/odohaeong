import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { appStore } from '../store/appStore';
import { ShoppingBag, Sun, Moon, Code2, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenExportModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenExportModal }) => {
  const isDarkMode = useAppStore(state => state.isDarkMode);
  const cart = useAppStore(state => state.cart);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((acc, c) => acc + c.quantity, 0);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Coordinate & Identity Banner */}
      <div className="w-full bg-[#1F2625] text-[#97A3A1] text-[10px] tracking-[0.2em] uppercase py-2 px-6 sm:px-12 flex justify-between items-center border-b border-white/5 font-mono-tag">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#86EFAC] animate-pulse"></span>
          <span>BUKCHON SANCTUARY · 37°35&apos;N 126°59&apos;E</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>SILENCE · STONE · VESSEL</span>
          <span className="text-[#C2A685]">CURATED SEASONS · SPRING &amp; PRE-SUMMER</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#F2F4F3]/90 backdrop-blur-md border-b border-[#1F2625]/10 transition-colors">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
            className="flex flex-col group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-light tracking-[0.22em] text-[#1F2625] group-hover:text-[#3F5B4F] transition-colors font-display">
                O.DO.HAENG
              </span>
              <span className="text-xs text-[#715A3E] font-heading font-light">오도행</span>
            </div>
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#6B7775] font-mono-tag">
              The Architectural Teahouse
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9 text-[12px] font-medium tracking-[0.05em] text-[#1F2625]/85">
            <button
              onClick={() => scrollTo('space')}
              className="hover:text-[#3F5B4F] transition-colors py-2"
            >
              브랜드 스토리
            </button>
            <button
              onClick={() => scrollTo('menu')}
              className="hover:text-[#3F5B4F] transition-colors py-2"
            >
              메뉴
            </button>
            <button
              onClick={() => scrollTo('sommelier')}
              className="hover:text-[#3F5B4F] transition-colors py-2 text-[#3F5B4F] font-semibold flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#3F5B4F]" />
              <span>AI 소믈리에</span>
            </button>
            <button
              onClick={() => scrollTo('shop')}
              className="hover:text-[#3F5B4F] transition-colors py-2 text-[#715A3E] font-medium"
            >
              기프트샵
            </button>
            <button
              onClick={() => scrollTo('reserve')}
              className="hover:text-[#3F5B4F] transition-colors py-2"
            >
              예약
            </button>
          </nav>

          {/* Quick Action Icons & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Standalone HTML Copy Button */}
            <button
              onClick={onOpenExportModal}
              title="완성형 단일 HTML 코드 복사 및 내보내기"
              className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono-tag tracking-wider bg-white/80 hover:bg-white text-[#1F2625] border border-[#1F2625]/20 rounded-md transition-all shadow-xs"
            >
              <Code2 className="w-3.5 h-3.5 text-[#715A3E]" />
              <span className="hidden sm:inline">단일 HTML</span>
            </button>

            {/* Dark / Light Aesthetic Mode Toggle */}
            <button
              onClick={() => appStore.toggleDarkMode()}
              title="조도 무드 전환"
              className="p-2 rounded-md border border-[#1F2625]/20 text-[#6B7775] hover:text-[#1F2625] transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-[#C2A685]" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Cart Drawer Toggle */}
            <button
              onClick={() => appStore.toggleCart(true)}
              className="relative p-2 rounded-md border border-[#1F2625]/20 text-[#1F2625] hover:border-[#3F5B4F] transition-colors"
              aria-label="장바구니"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#3F5B4F] text-[#F2F4F3] text-[9px] font-mono-tag flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Booking Primary CTA Button */}
            <button
              onClick={() => scrollTo('reserve')}
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#3F5B4F] hover:bg-[#344B41] text-[#F2F4F3] text-[11px] font-mono-tag tracking-[0.14em] uppercase rounded-md transition-colors"
            >
              BOOKING
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1F2625]"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F2F4F3] border-b border-[#1F2625]/10 px-6 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-3 text-[13px] font-medium tracking-wider text-[#1F2625]">
              <button
                onClick={() => scrollTo('space')}
                className="text-left py-2 border-b border-black/5"
              >
                브랜드 스토리
              </button>
              <button
                onClick={() => scrollTo('menu')}
                className="text-left py-2 border-b border-black/5"
              >
                메뉴
              </button>
              <button
                onClick={() => scrollTo('sommelier')}
                className="text-left py-2 border-b border-black/5 text-[#3F5B4F] font-semibold flex items-center gap-1.5 col-span-2 sm:col-span-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#3F5B4F]" />
                <span>AI 소믈리에</span>
              </button>
              <button
                onClick={() => scrollTo('shop')}
                className="text-left py-2 border-b border-black/5 text-[#715A3E] font-medium"
              >
                기프트샵
              </button>
              <button
                onClick={() => scrollTo('reserve')}
                className="text-left py-2 border-b border-black/5 col-span-2 sm:col-span-1"
              >
                예약
              </button>
            </div>
            <button
              onClick={() => scrollTo('reserve')}
              className="w-full py-3 bg-[#3F5B4F] text-[#F2F4F3] text-xs font-mono-tag tracking-widest uppercase rounded-lg text-center font-medium"
            >
              BOOKING 다석 예약
            </button>
          </div>
        )}
      </header>
    </>
  );
};
