import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer id="visit" className="w-full bg-[#E2E6E5]/40 border-t border-[#1F2625]/10 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 space-y-16">
        {/* Top Cards Grid matching Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Location Card */}
          <div className="lg:col-span-6 bg-white border border-[#1F2625]/12 rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div className="flex justify-between items-start text-[10px] font-mono-tag tracking-widest text-[#715A3E] uppercase mb-8">
              <span>BUKCHON HANOK BORDERLINE</span>
              <span>37.5815° N, 126.9849° E</span>
            </div>

            <div className="my-6">
              <h3 className="text-2xl sm:text-3xl font-light font-display tracking-[0.2em] text-[#1F2625] mb-1">
                O.DO.HAENG <span className="font-heading text-lg">오도행</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7775] font-light">
                서울특별시 종로구 북촌로 42길 9, 2F
              </p>
            </div>

            <div className="pt-6 border-t border-[#1F2625]/10 flex items-center justify-between text-xs font-mono-tag text-[#1F2625]">
              <span className="flex items-center gap-1.5 text-[#6B7775]">
                <MapPin className="w-3.5 h-3.5 text-[#3F5B4F]" />
                Anguk Station Exit 2 (6 Min Walk)
              </span>
              <a
                href="https://map.kakao.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[#3F5B4F] hover:underline"
              >
                Open Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Visiting & Hours Card */}
          <div className="lg:col-span-6 bg-white border border-[#1F2625]/12 rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div className="text-[10px] font-mono-tag tracking-widest text-[#715A3E] uppercase mb-6">
              VISITING &amp; HOURS
            </div>

            <div className="space-y-4 my-2 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-2 border-b border-[#1F2625]/5">
                <span className="text-[#1F2625] font-medium">화요일 — 일요일 (Tue – Sun)</span>
                <span className="font-display font-light text-[#1F2625]">12:00 — 21:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#1F2625]/5">
                <span className="text-[#6B7775]">월요일 (Monday)</span>
                <span className="text-xs font-mono-tag text-[#715A3E] italic">Closed / 다기 정돈</span>
              </div>
            </div>

            <p className="pt-6 border-t border-[#1F2625]/10 text-xs text-[#6B7775] font-light leading-relaxed">
              인근 정독도서관 공영주차장 또는 계동 유료주차장 이용을 권장하며, 원활한 코스 진행을 위해 세션 10분 전 도착을 권장합니다.
            </p>
          </div>
        </div>

        {/* Bottom Bar matching Image 1 */}
        <div className="pt-8 border-t border-[#1F2625]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] font-mono-tag tracking-widest uppercase text-[#6B7775]">
          <div className="flex items-center gap-3">
            <span className="text-[#1F2625] font-semibold">O.DO.HAENG</span>
            <span>· ARCHITECTURAL TEAHOUSE</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#creations" className="hover:text-[#1F2625] transition-colors">CREATIONS</a>
            <a href="#space" className="hover:text-[#1F2625] transition-colors">SPACE</a>
            <a href="#menu" className="hover:text-[#1F2625] transition-colors">MENU</a>
            <a href="#shop" className="hover:text-[#1F2625] transition-colors">SHOP</a>
            <a href="#reserve" className="hover:text-[#1F2625] transition-colors">RESERVE</a>
            <a href="#visit" className="hover:text-[#1F2625] transition-colors">VISIT</a>
          </div>

          <div>
            © 2025 O.DO.HAENG. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};
