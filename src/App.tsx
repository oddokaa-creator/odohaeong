import React, { useState } from 'react';
import { useAppStore } from './store/useAppStore';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SpatialHarmonySection } from './components/SpatialHarmonySection';
import { SensoryArchiveSection } from './components/SensoryArchiveSection';
import { HarvestMenuSection } from './components/HarvestMenuSection';
import { DessertMenuSection } from './components/DessertMenuSection';
import { AiTeaSommelierSection } from './components/AiTeaSommelierSection';
import { ShopSection } from './components/ShopSection';
import { ReservationInquirySection } from './components/ReservationInquirySection';
import { FooterSection } from './components/FooterSection';
import { CartDrawer } from './components/CartDrawer';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { ToastContainer } from './components/ToastContainer';

export default function App() {
  const isDarkMode = useAppStore(state => state.isDarkMode);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-[#161B1A] text-[#F2F4F3]' : 'bg-[#F2F4F3] text-[#1F2625]'
    }`}>
      {/* Teahouse Navigation Header */}
      <Header onOpenExportModal={() => setIsExportModalOpen(true)} />

      {/* Main Teahouse Experience matching Image 1 & Image 7 */}
      <main>
        {/* 1. Hero Sanctuary Banner */}
        <HeroSection />

        {/* 2. Spatial Harmony (Bukchon Sanctuary Philosophy & 4 Metrics) */}
        <SpatialHarmonySection />

        {/* 5. Curated Harvests (Single-Origin Terroirs with Infusion Temperature Guide) */}
        <HarvestMenuSection />

        {/* 3. Sensory Archive (3 Botanical Cold Brew Creations: NO. 01 - 03) */}
        <SensoryArchiveSection />
        
        {/* Dessert Menu */}
        <DessertMenuSection />

        {/* 6. AI Tea Sommelier (입맛 및 기분 맞춤 티 큐레이션) */}
        <AiTeaSommelierSection />

        {/* 7. Shop & Archival Editions (Gift Sets, Teacups & Gifting Philosophy) */}
        <ShopSection />

        {/* 8. Intimate Teahouse Reservation & VIP Gifting (#inquiry-form) */}
        <ReservationInquirySection />
      </main>

      {/* 8. Visiting & Hours Footer */}
      <FooterSection />

      {/* Drawers, Modals & Toast Overlays */}
      <CartDrawer />
      <ExportHtmlModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
      <ToastContainer />
    </div>
  );
}
