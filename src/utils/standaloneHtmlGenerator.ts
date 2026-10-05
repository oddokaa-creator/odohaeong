export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>O.DO.HAENG 오도행 - The Architectural Teahouse</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..600;1,9..40,300..600&family=Noto+Serif+KR:wght@300;400;500;600&family=Plus+Jakarta+Sans:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
  <style>
    :root {
      --font-dm: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-serif: 'Noto Serif KR', serif;
      --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    body {
      font-family: var(--font-sans);
      background-color: #F2F4F3;
      color: #1F2625;
      overflow-x: hidden;
    }
    h1, h2, h3, .font-heading { font-family: var(--font-serif); }
    .font-display { font-family: var(--font-dm); letter-spacing: 0.05em; }
    .font-mono-tag { font-family: var(--font-dm); letter-spacing: 0.14em; text-transform: uppercase; }

    .glass-toast {
      background: rgba(31, 38, 37, 0.92);
      backdrop-filter: blur(14px);
      border: 1px solid rgba(63, 91, 79, 0.4);
    }
  </style>
</head>
<body class="selection:bg-[#3F5B4F]/20 selection:text-[#1F2625]">

  <!-- Top Coordinates -->
  <div class="w-full bg-[#1F2625] text-[#97A3A1] text-[10px] tracking-[0.2em] uppercase py-2 px-6 sm:px-12 flex justify-between items-center border-b border-white/5 font-mono-tag">
    <div class="flex items-center gap-2">
      <span class="w-1.5 h-1.5 rounded-full bg-[#86EFAC] animate-pulse"></span>
      <span>BUKCHON SANCTUARY · 37°35'N 126°59'E</span>
    </div>
    <div class="hidden sm:flex items-center gap-6">
      <span>SILENCE · STONE · VESSEL</span>
      <span class="text-[#C2A685]">CURATED SEASONS · SPRING & PRE-SUMMER</span>
    </div>
  </div>

  <!-- Header -->
  <header class="sticky top-0 z-40 w-full bg-[#F2F4F3]/90 backdrop-blur-md border-b border-[#1F2625]/10">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
      <a href="#hero" class="flex flex-col">
        <div class="flex items-center gap-2">
          <span class="text-xl sm:text-2xl font-light tracking-[0.22em] text-[#1F2625] font-display">O.DO.HAENG</span>
          <span class="text-xs text-[#715A3E] font-heading font-light">오도행</span>
        </div>
        <span class="text-[9px] tracking-[0.3em] uppercase text-[#6B7775] font-mono-tag">The Architectural Teahouse</span>
      </a>

      <nav class="hidden lg:flex items-center gap-8 text-[11px] font-mono-tag tracking-[0.16em] uppercase text-[#1F2625]/80">
        <a href="#creations" class="hover:text-[#3F5B4F] transition-colors py-2">CREATIONS</a>
        <a href="#space" class="hover:text-[#3F5B4F] transition-colors py-2">SPACE</a>
        <a href="#menu" class="hover:text-[#3F5B4F] transition-colors py-2">MENU</a>
        <a href="#sommelier" class="hover:text-[#3F5B4F] transition-colors py-2 text-[#3F5B4F] font-semibold">AI SOMMELIER</a>
        <a href="#shop" class="hover:text-[#3F5B4F] transition-colors py-2 text-[#715A3E] font-medium">SHOP</a>
        <a href="#reserve" class="hover:text-[#3F5B4F] transition-colors py-2">RESERVE</a>
        <a href="#visit" class="hover:text-[#3F5B4F] transition-colors py-2">VISIT</a>
      </nav>

      <div class="flex items-center gap-4">
        <a href="#reserve" class="px-5 py-2.5 bg-[#3F5B4F] hover:bg-[#344B41] text-[#F2F4F3] text-[11px] font-mono-tag tracking-[0.14em] uppercase rounded-md transition-colors">
          BOOKING
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="max-w-[1440px] mx-auto px-4 sm:px-12 pt-4 pb-16">
    <div class="relative w-full rounded-3xl overflow-hidden min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-6 sm:p-14 border border-[#1F2625]/15">
      <img src="https://images.unsplash.com/photo-1545048702-7936070012e7?auto=format&fit=crop&w=1800&q=85" alt="O.DO.HAENG Hero" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/40"></div>

      <div class="relative z-10 text-[#F2F4F3]/80 text-[10px] sm:text-xs font-mono-tag tracking-[0.2em] flex justify-between">
        <span>BUKCHON SANCTUARY · 37°35'N 126°59'E</span>
        <span>SILENCE · STONE · VESSEL</span>
      </div>

      <div class="relative z-10 max-w-2xl pt-24 sm:pt-32">
        <span class="block text-xs sm:text-sm italic tracking-widest text-[#C2A685] mb-2 font-serif">The Architectural Teahouse</span>
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-light text-[#F2F4F3] leading-[1.2] mb-8 font-heading">
          정적 속에서 우려낸<br>한 모금의 사유.
        </h1>
        <div class="flex flex-wrap items-center gap-4">
          <a href="#reserve" class="px-7 py-3.5 bg-[#F2F4F3] text-[#1F2625] text-xs sm:text-sm font-mono-tag tracking-wider uppercase rounded-full font-medium shadow-md">RESERVE SEAT</a>
          <a href="#creations" class="px-6 py-3.5 text-[#F2F4F3] text-xs sm:text-sm font-mono-tag tracking-wider uppercase hover:text-[#C2A685]">EXPLORE CREATIONS &gt;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Spatial Harmony Section -->
  <section id="space" class="max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-6 space-y-6">
        <span class="text-[11px] font-mono-tag text-[#715A3E] uppercase block">SPATIAL HARMONY</span>
        <h2 class="text-2xl sm:text-4xl font-light font-heading text-[#1F2625]">
          불필요한 자극을 덜어내고,<br><span class="underline decoration-[#715A3E]/40 decoration-1 underline-offset-8">찻물과 빛의 질감</span>에 머뭅니다.
        </h2>
        <p class="text-sm text-[#6B7775] font-light leading-relaxed">
          오도행(O.DO.HAENG)은 날것 그대로의 노출 콘크리트 회랑과 단일 다원의 깊은 향미가 교차하는 침묵의 안식처입니다.
        </p>
        <div class="grid grid-cols-2 gap-6 pt-4 border-t border-[#1F2625]/10">
          <div><div class="text-3xl font-display font-light">14</div><div class="text-[10px] font-mono-tag font-semibold">PRIVATE COUNTER SEATS</div><div class="text-xs text-[#6B7775]">동시 착석 한정</div></div>
          <div><div class="text-3xl font-display font-light">18</div><div class="text-[10px] font-mono-tag font-semibold">SINGLE-ORIGIN TERROIRS</div><div class="text-xs text-[#6B7775]">엄선된 계절 다원</div></div>
          <div><div class="text-3xl font-display font-light">85°-98°C</div><div class="text-[10px] font-mono-tag font-semibold">THERMAL EXTRACTION</div><div class="text-xs text-[#6B7775]">정밀 추출 온도</div></div>
          <div><div class="text-3xl font-display font-light">12:00-21:00</div><div class="text-[10px] font-mono-tag font-semibold">MINDFUL RITUAL</div><div class="text-xs text-[#6B7775]">일일 세션 운영</div></div>
        </div>
      </div>
      <div class="lg:col-span-6">
        <div class="relative rounded-2xl overflow-hidden aspect-4/3 bg-[#E2E6E5] border border-[#1F2625]/10 shadow-xs">
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" alt="Counter" class="w-full h-full object-cover">
          <div class="absolute bottom-4 right-4 bg-[#1F2625]/85 backdrop-blur-sm text-[#F2F4F3] px-3.5 py-1.5 rounded-full text-[10px] font-mono-tag">ASH WOOD COUNTER &amp; NATURAL LIGHT</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sensory Archive (Creations) -->
  <section id="creations" class="max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
    <div class="flex justify-between items-end mb-12">
      <div>
        <span class="text-[11px] font-mono-tag text-[#715A3E] uppercase block mb-1">SENSORY ARCHIVE · NO. 01 — 03</span>
        <h2 class="text-2xl sm:text-3xl font-light font-heading text-[#1F2625]">시그니처 티 베리에이션 &amp; 크리에이션</h2>
      </div>
      <span class="text-xs font-serif italic text-[#6B7775] hidden sm:block">Visual First Botanical Creations</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white/70 border border-[#1F2625]/10 rounded-2xl overflow-hidden">
        <div class="aspect-4/5 relative overflow-hidden"><img src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover"><div class="absolute top-4 left-4 bg-black/80 text-white px-2.5 py-1 text-[10px] font-mono-tag">NO. 01</div></div>
        <div class="p-5"><div class="flex justify-between items-baseline mb-1"><h3 class="text-base font-heading">로즈마리 블러드오렌지 스파클링</h3><span class="text-sm font-display">₩ 18,000</span></div><div class="text-[11px] text-[#715A3E] font-mono-tag mb-2">Rosemary Blood Orange Cold Brew</div><div class="text-[11px] text-[#6B7775] pt-3 border-t border-black/5">보태니컬 저온 침출 · 천연 탄산 레이어</div></div>
      </div>
      <div class="bg-white/70 border border-[#1F2625]/10 rounded-2xl overflow-hidden">
        <div class="aspect-4/5 relative overflow-hidden"><img src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover"><div class="absolute top-4 left-4 bg-black/80 text-white px-2.5 py-1 text-[10px] font-mono-tag">NO. 02</div></div>
        <div class="p-5"><div class="flex justify-between items-baseline mb-1"><h3 class="text-base font-heading">세레모니얼 벨벳 말차 클라우드</h3><span class="text-sm font-display">₩ 19,000</span></div><div class="text-[11px] text-[#715A3E] font-mono-tag mb-2">Ceremonial Velvet Matcha Cloud</div><div class="text-[11px] text-[#6B7775] pt-3 border-t border-black/5">교토 우지 사미도리 · 실키 오트 크림 폼</div></div>
      </div>
      <div class="bg-white/70 border border-[#1F2625]/10 rounded-2xl overflow-hidden">
        <div class="aspect-4/5 relative overflow-hidden"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover"><div class="absolute top-4 left-4 bg-black/80 text-white px-2.5 py-1 text-[10px] font-mono-tag">NO. 03</div></div>
        <div class="p-5"><div class="flex justify-between items-baseline mb-1"><h3 class="text-base font-heading">크리스털 보태니컬 콜드브루</h3><span class="text-sm font-display">₩ 18,500</span></div><div class="text-[11px] text-[#715A3E] font-mono-tag mb-2">Crystal Botanical Tea Cocktail</div><div class="text-[11px] text-[#6B7775] pt-3 border-t border-black/5">타임 허브 인퓨전 · 천연 암반수 빙하석</div></div>
      </div>
    </div>
  </section>

  <!-- Architectural Scenography -->
  <section class="max-w-[1440px] mx-auto px-6 sm:px-12 py-16 border-b border-[#1F2625]/10">
    <div class="flex justify-between items-end mb-12">
      <div>
        <span class="text-[11px] font-mono-tag text-[#715A3E] uppercase block mb-1">ARCHITECTURAL SCENOGRAPHY</span>
        <h2 class="text-2xl sm:text-3xl font-light font-heading text-[#1F2625]">공간의 침묵과 기물의 대화</h2>
      </div>
      <span class="text-xs font-serif italic text-[#6B7775] hidden sm:block">&ldquo;차를 대하는 몸의 감각, 콘크리트와 빛의 여백&rdquo;</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="relative rounded-2xl overflow-hidden aspect-4/3 bg-[#E2E6E5]">
          <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80" class="w-full h-full object-cover">
          <div class="absolute bottom-4 left-4 bg-[#1F2625]/85 text-white px-3 py-1.5 rounded-sm text-[10px] font-mono-tag">01 / RAW SLATE &amp; HANDCRAFTED TEAWARE</div>
        </div>
        <div class="flex justify-between mt-3 text-[11px] font-mono-tag text-[#6B7775]">
          <span>VESSEL &amp; VOID</span><span>SEOUL BUKCHON</span>
        </div>
      </div>
      <div>
        <div class="relative rounded-2xl overflow-hidden aspect-4/3 bg-[#E2E6E5]">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" class="w-full h-full object-cover">
          <div class="absolute bottom-4 left-4 bg-[#1F2625]/85 text-white px-3 py-1.5 rounded-sm text-[10px] font-mono-tag">02 / LINEAR SHADOWS &amp; OAK BENCH</div>
        </div>
        <div class="flex justify-between mt-3 text-[11px] font-mono-tag text-[#6B7775]">
          <span>NATURAL ILLUMINATION</span><span>MA (間) SPATIAL RESEARCH</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Curated Harvests Menu -->
  <section id="menu" class="max-w-[1440px] mx-auto px-6 sm:px-12 py-16 border-b border-[#1F2625]/10">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <span class="text-[11px] font-mono-tag text-[#715A3E] uppercase block mb-1">CURATED HARVESTS</span>
      <h2 class="text-2xl sm:text-3xl font-light font-heading text-[#1F2625] mb-2">계절 단일 다원 차 목록</h2>
      <p class="text-xs text-[#6B7775]">엄선된 단일 수령 품종과 정밀 브루잉 가이드로 완성되는 온전한 다도 리추얼</p>
    </div>
    <div class="max-w-3xl mx-auto divide-y divide-black/10">
      <div class="py-5 flex justify-between items-baseline">
        <div><h3 class="text-base font-heading">하동 옥로 우전 <span class="text-xs font-mono-tag text-[#715A3E]">HADONG UJEON 2024</span></h3><p class="text-xs text-[#6B7775]">경남 하동 화개면 / 은은한 난초향과 첫물차의 달콤한 감칠맛</p></div>
        <div class="flex items-center gap-4 text-xs font-mono-tag"><span class="text-[#6B7775]">80°C · 3 Infusions</span><span class="font-display">₩ 16,000</span></div>
      </div>
      <div class="py-5 flex justify-between items-baseline">
        <div><h3 class="text-base font-heading">무이암차 육계 <span class="text-xs font-mono-tag text-[#715A3E]">WUYI ROUGUI CLIFF TERROIR</span></h3><p class="text-xs text-[#6B7775]">중국 복건성 무이산 / 붉은 바위의 미네랄과 시나몬의 깊은 여운</p></div>
        <div class="flex items-center gap-4 text-xs font-mono-tag"><span class="text-[#6B7775]">95°C · 5 Infusions</span><span class="font-display">₩ 18,000</span></div>
      </div>
      <div class="py-5 flex justify-between items-baseline">
        <div><h3 class="text-base font-heading">백호은침 춘채 <span class="text-xs font-mono-tag text-[#715A3E]">SILVER NEEDLE SPRING BUD</span></h3><p class="text-xs text-[#6B7775]">복건성 정화현 해발 800m / 백련꽃 향과 어린 싹의 맑은 꿀맛</p></div>
        <div class="flex items-center gap-4 text-xs font-mono-tag"><span class="text-[#6B7775]">85°C · 4 Infusions</span><span class="font-display">₩ 20,000</span></div>
      </div>
      <div class="py-5 flex justify-between items-baseline">
        <div><h3 class="text-base font-heading">우지 싱글 에스테이트 말차 <span class="text-xs font-mono-tag text-[#715A3E]">UJI SAMIDORI CULTIVAR</span></h3><p class="text-xs text-[#6B7775]">교토 우지시 단일 수령 / 짙은 벨벳 질감과 고소한 우마미, 계절 화과자 페어링</p></div>
        <div class="flex items-center gap-4 text-xs font-mono-tag"><span class="text-[#6B7775]">75°C · Ceremonial Whisk</span><span class="font-display">₩ 17,000</span></div>
      </div>
    </div>
  </section>

  <!-- AI Tea Sommelier & Taste Recommendation Section -->
  <section id="sommelier" class="max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10 bg-gradient-to-b from-[#F2F4F3] via-white/40 to-[#E2E6E5]/30">
    <div class="max-w-3xl mb-12">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-[11px] font-mono-tag tracking-[0.22em] text-[#3F5B4F] uppercase font-semibold">
          AI TEA SOMMELIER &amp; SENSORY PAIRING
        </span>
      </div>
      <h2 class="text-2xl sm:text-4xl font-light font-heading text-[#1F2625] mb-3">
        입맛과 기분에 머무는, 나만의 맞춤 차 큐레이션
      </h2>
      <p class="text-xs sm:text-sm text-[#6B7775] font-light leading-relaxed">
        산미, 고소함, 꽃향, 바위 미네랄 등 손님의 미각 취향과 오늘의 감정 상태를 선택해 주세요. 오도행 헤드 티 마스터의 정제된 감각을 학습한 AI가 당신만을 위한 단 한 잔의 차와 다도 리추얼을 큐레이션합니다.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <!-- Left Config Form -->
      <div class="lg:col-span-5 bg-white border border-[#1F2625]/12 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div>
          <div class="flex justify-between items-center mb-2.5">
            <span class="text-[11px] font-mono-tag tracking-wider uppercase text-[#1F2625] font-semibold">
              [1] 선호하는 미각 노트 (TASTE PROFILE)
            </span>
            <span id="taste-count-badge" class="text-[10px] text-[#715A3E] font-mono-tag">1/3 선택</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="taste-options-container">
            <button type="button" onclick="toggleTaste('citrus', '산미 &amp; 청량한 시트러스')" class="taste-btn p-3 rounded-xl border border-[#1F2625]/12 bg-white/70 text-left text-xs transition-all" data-id="citrus">
              <div class="font-medium text-[#1F2625]">산미 &amp; 청량한 시트러스</div>
              <div class="text-[10px] text-[#715A3E] font-light">텁텁함 없는 상큼한 과일향</div>
            </button>
            <button type="button" onclick="toggleTaste('nutty', '고소한 우마미 &amp; 곡물')" class="taste-btn p-3 rounded-xl border border-[#1F2625]/12 bg-white/70 text-left text-xs transition-all" data-id="nutty">
              <div class="font-medium text-[#1F2625]">고소한 우마미 &amp; 곡물</div>
              <div class="text-[10px] text-[#715A3E] font-light">벨벳 크림과 오트의 풍미</div>
            </button>
            <button type="button" onclick="toggleTaste('floral', '은은한 꽃향 &amp; 백련꿀')" class="taste-btn p-3 rounded-xl border border-[#1F2625]/12 bg-white/70 text-left text-xs transition-all" data-id="floral">
              <div class="font-medium text-[#1F2625]">은은한 꽃향 &amp; 백련꿀</div>
              <div class="text-[10px] text-[#715A3E] font-light">난초와 야생화의 감미로운 잔향</div>
            </button>
            <button type="button" onclick="toggleTaste('mineral', '바위 미네랄 &amp; 스모키')" class="taste-btn p-3 rounded-xl border border-[#1F2625]/12 bg-white/70 text-left text-xs transition-all" data-id="mineral">
              <div class="font-medium text-[#1F2625]">바위 미네랄 &amp; 스모키</div>
              <div class="text-[10px] text-[#715A3E] font-light">시나몬 로스팅과 묵직한 암운</div>
            </button>
            <button type="button" onclick="toggleTaste('matcha', '진한 쌉싸름함 &amp; 말차')" class="taste-btn p-3 rounded-xl border border-[#1F2625]/12 bg-white/70 text-left text-xs transition-all" data-id="matcha">
              <div class="font-medium text-[#1F2625]">진한 쌉싸름함 &amp; 말차</div>
              <div class="text-[10px] text-[#715A3E] font-light">단일 품종 찻잎의 농후한 맛</div>
            </button>
            <button type="button" onclick="toggleTaste('clean', '맑고 편안한 첫물 감칠맛')" class="taste-btn active-taste p-3 rounded-xl border border-[#3F5B4F] bg-[#3F5B4F]/10 text-left text-xs transition-all" data-id="clean">
              <div class="font-medium text-[#1F2625]">맑고 편안한 첫물 감칠맛</div>
              <div class="text-[10px] text-[#715A3E] font-light">자극 없는 순수한 잎차</div>
            </button>
          </div>
        </div>

        <div>
          <span class="block text-[11px] font-mono-tag tracking-wider uppercase text-[#1F2625] font-semibold mb-2">
            [2] 오늘 머물고 싶은 기분 (MINDFUL STATE)
          </span>
          <div class="space-y-2" id="mood-options-container">
            <button type="button" onclick="selectMood(this, '사유와 침묵')" class="mood-btn w-full p-3 rounded-xl border border-[#3F5B4F] bg-[#3F5B4F]/10 text-left text-xs transition-all font-medium text-[#1F2625]">
              복잡한 생각을 가라앉히고 깊은 침묵에 머물고 싶을 때
            </button>
            <button type="button" onclick="selectMood(this, '갈증과 청량')" class="mood-btn w-full p-3 rounded-xl border border-[#1F2625]/12 bg-white/70 text-left text-xs transition-all text-[#6B7775]">
              지친 오후 상쾌한 활력과 즉각적인 갈증 해소가 필요할 때
            </button>
            <button type="button" onclick="selectMood(this, '따스한 온기')" class="mood-btn w-full p-3 rounded-xl border border-[#1F2625]/12 bg-white/70 text-left text-xs transition-all text-[#6B7775]">
              손끝에서 느껴지는 따스한 온기로 심신을 녹이고 싶을 때
            </button>
            <button type="button" onclick="selectMood(this, '묵직한 바디감')" class="mood-btn w-full p-3 rounded-xl border border-[#1F2625]/12 bg-white/70 text-left text-xs transition-all text-[#6B7775]">
              커피를 대신할 묵직한 바디감과 긴 여운을 음미하고 싶을 때
            </button>
          </div>
        </div>

        <button type="button" onclick="runAiSommelier()" class="w-full py-4 bg-[#3F5B4F] hover:bg-[#344B41] text-[#F2F4F3] text-xs font-mono-tag tracking-[0.16em] uppercase rounded-xl transition-all font-semibold flex items-center justify-center gap-2 shadow-xs">
          <span>나에게 맞는 차 추천받기 (CURATE TEA)</span>
        </button>
      </div>

      <!-- Right Recommendation Output -->
      <div class="lg:col-span-7" id="sommelier-output-area">
        <div class="bg-white border border-[#1F2625]/12 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div class="sm:col-span-5 rounded-2xl overflow-hidden aspect-square bg-[#E2E6E5] relative shadow-xs">
              <img id="somm-img" src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80" alt="Recommended Tea" class="w-full h-full object-cover">
              <div class="absolute top-3 left-3 bg-[#1F2625]/85 backdrop-blur-md text-[#86EFAC] px-2.5 py-1 rounded text-[10px] font-mono-tag tracking-wider font-semibold" id="somm-score">
                98% MATCH
              </div>
            </div>
            <div class="sm:col-span-7 space-y-2">
              <span class="text-[10px] font-mono-tag text-[#715A3E] tracking-widest uppercase block" id="somm-cat">
                계절 단일 다원 (Curated Harvest)
              </span>
              <h3 class="text-2xl font-heading text-[#1F2625]" id="somm-name">
                하동 옥로 우전
              </h3>
              <div class="text-xs font-mono-tag text-[#715A3E]" id="somm-en">
                HADONG UJEON 2024
              </div>
              <div class="text-lg font-display font-light text-[#1F2625] pt-1" id="somm-price">
                ₩ 16,000
              </div>
              <div class="text-xs font-mono-tag text-[#6B7775]" id="somm-temp">
                80°C · 3 Infusions
              </div>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-[#F2F4F3] border border-[#1F2625]/10 space-y-2">
            <div class="text-xs font-mono-tag text-[#715A3E] uppercase font-semibold">티 마스터 큐레이션 노트</div>
            <p class="text-sm font-heading font-light text-[#1F2625] leading-relaxed italic" id="somm-comment">
              &ldquo;북촌의 고요한 돌담길을 걸어오신 손님께, 지리산 하동 맑은 이슬을 머금은 찻잎의 첫 숨결을 건넵니다. 은은한 야생 난초 꽃향이 깊은 평온을 전해줄 것입니다.&rdquo;
            </p>
            <p class="text-xs text-[#6B7775] leading-relaxed font-light" id="somm-reason">
              <strong>선정 사유:</strong> 선택하신 편안한 감칠맛과 차분한 사유의 기분에 가장 조화로운 계절 첫물차입니다.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light">
            <div class="p-4 rounded-xl border border-[#1F2625]/10 bg-white">
              <span class="text-[10px] font-mono-tag text-[#3F5B4F] uppercase block mb-1 font-semibold">음미 리추얼 가이드</span>
              <p class="text-[#1F2625]/90" id="somm-ritual">첫 잔은 찻잔의 온도를 손바닥으로 가만히 느끼며 향을 들이마시고, 두 번째 잔에서 비로소 솟아나는 자연스러운 단맛을 음미해 보세요.</p>
            </div>
            <div class="p-4 rounded-xl border border-[#1F2625]/10 bg-white">
              <span class="text-[10px] font-mono-tag text-[#715A3E] uppercase block mb-1 font-semibold">어울리는 다과 페어링</span>
              <p class="text-[#1F2625]/90" id="somm-pairing">수제 쑥 인절미 또는 맑은 백옥 양갱</p>
            </div>
          </div>

          <button type="button" onclick="applySommelierToReservation()" class="w-full py-3.5 px-6 bg-[#284338] hover:bg-[#1E332A] text-[#F2F4F3] text-xs font-mono-tag tracking-wider uppercase rounded-xl transition-all font-semibold shadow-xs">
            다석 예약 시 이 차로 지정하기 &gt;
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Archival Editions & Shop Section -->
  <section id="shop" class="max-w-[1440px] mx-auto px-6 sm:px-12 py-16 border-b border-[#1F2625]/10">
    <div class="flex justify-between items-end mb-12">
      <div>
        <span class="text-[11px] font-mono-tag text-[#715A3E] uppercase block mb-1">ARCHIVAL EDITIONS &amp; OBJECTS</span>
        <h2 class="text-2xl sm:text-4xl font-light font-heading text-[#1F2625]">정적의 시간을 선물하다.</h2>
      </div>
    </div>
    <div class="bg-white border border-black/10 rounded-3xl p-6 sm:p-10 mb-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-6 rounded-2xl overflow-hidden aspect-4/3 bg-[#F2F4F3]">
        <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80" alt="Gift Set" class="w-full h-full object-cover">
      </div>
      <div class="lg:col-span-6 space-y-4">
        <span class="text-[10px] font-mono-tag text-[#715A3E] uppercase block">SINGULAR TERROIR HERITAGE COLLECTION</span>
        <h3 class="text-2xl font-heading text-[#1F2625]">오도행 시그니처 단일 다원 3종 기프트 세트</h3>
        <div class="text-xl font-display font-light">₩ 98,000 <span class="text-xs text-[#715A3E] font-sans">무료 배송 · 고급 쇼핑백 증정</span></div>
        <p class="text-xs text-[#6B7775] leading-relaxed font-light">하동 옥로 우전, 무이암차 육계, 백호은침 춘채로 구성된 3종의 단일 다원 차와 린넨 보자기 포장 세트입니다.</p>
        <button onclick="showToast('선물 세트 담기 완료', '오도행 기프트 세트가 장바구니에 담겼습니다.')" class="w-full py-3.5 bg-[#3F5B4F] text-white text-xs font-mono-tag uppercase rounded-xl tracking-wider">
          선물 세트 담기 (ADD TO CART)
        </button>
      </div>
    </div>
  </section>

  <!-- Intimate Reservation (Form ID: #inquiry-form) -->
  <section id="reserve" class="max-w-[1440px] mx-auto px-6 sm:px-12 py-16 border-b border-[#1F2625]/10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-5 space-y-6">
        <span class="text-[11px] font-mono-tag text-[#715A3E] uppercase block">INTIMATE RESERVATION</span>
        <h2 class="text-2xl sm:text-4xl font-light font-heading text-[#1F2625]">다석 예약 신청</h2>
        <p class="text-xs sm:text-sm text-[#6B7775] leading-relaxed font-light">
          오도행은 온전한 감각의 몰입을 위해 세션당 최대 14인의 손님만을 맞이합니다. 80분 동안 세 가지 차와 디저트 코스가 진행됩니다.
        </p>
        <div class="p-6 bg-[#E2E6E5]/40 rounded-2xl border border-black/5 space-y-2 text-xs font-mono-tag">
          <div>· SESSION DURATION: 80 MINUTES</div>
          <div>· ADVANCE BOOKING ONLY</div>
          <div>· INQUIRIES: 02-741-2048</div>
        </div>
      </div>

      <!-- REQUIRED FORM ID: #inquiry-form -->
      <div class="lg:col-span-7 bg-white border border-[#1F2625]/10 rounded-3xl p-6 sm:p-10 shadow-xs">
        <form id="inquiry-form" onsubmit="handleInquirySubmit(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-[11px] font-mono-tag uppercase mb-1">NAME (성함) *</label>
              <input type="text" id="inq-name" required placeholder="성함을 입력해주세요" class="w-full px-3 py-2.5 bg-[#F2F4F3] border border-black/10 rounded-lg text-xs">
            </div>
            <div>
              <label class="block text-[11px] font-mono-tag uppercase mb-1">CONTACT (연락처) *</label>
              <input type="tel" id="inq-contact" required placeholder="010-0000-0000" class="w-full px-3 py-2.5 bg-[#F2F4F3] border border-black/10 rounded-lg text-xs">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-[11px] font-mono-tag uppercase mb-1">DATE (방문일)</label>
              <input type="date" id="inq-date" class="w-full px-3 py-2 bg-[#F2F4F3] border border-black/10 rounded-lg text-xs">
            </div>
            <div>
              <label class="block text-[11px] font-mono-tag uppercase mb-1">SESSION TIME</label>
              <select id="inq-session" class="w-full px-3 py-2 bg-[#F2F4F3] border border-black/10 rounded-lg text-xs">
                <option value="13:00(Session 1)">13:00(Session 1)</option>
                <option value="15:30(Session 2)">15:30(Session 2)</option>
                <option value="18:00(Session 3)">18:00(Session 3)</option>
                <option value="19:30(Session 4)">19:30(Session 4)</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-mono-tag uppercase mb-1">GUESTS (인원)</label>
              <select id="inq-guests" class="w-full px-3 py-2 bg-[#F2F4F3] border border-black/10 rounded-lg text-xs">
                <option value="1인(개인석)">1인(개인석)</option>
                <option value="2인">2인</option>
                <option value="3인">3인</option>
                <option value="4인">4인</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-mono-tag uppercase mb-1">PREFERENCE &amp; NOTES</label>
            <textarea id="inq-preference" rows="3" placeholder="선호하는 차 종류나 알레르기 사항" class="w-full p-3 bg-[#F2F4F3] border border-black/10 rounded-lg text-xs resize-none font-light"></textarea>
          </div>

          <button type="submit" class="w-full py-3.5 bg-[#284338] hover:bg-[#1E332A] text-white text-xs font-mono-tag uppercase rounded-xl tracking-wider font-semibold">
            REQUEST RESERVATION
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer id="visit" class="bg-[#E2E6E5]/40 border-t border-[#1F2625]/10 py-12 px-6 sm:px-12 text-xs text-[#6B7775]">
    <div class="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 font-mono-tag">
      <div>O.DO.HAENG · BUKCHON SANCTUARY · 37.5815° N, 126.9849° E</div>
      <div>© 2025 O.DO.HAENG. ALL RIGHTS RESERVED.</div>
    </div>
  </footer>

  <!-- Toast Container -->
  <div id="toast-root" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none"></div>

  <!-- JavaScript Pipeline & Logic -->
  <script>
    function escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    let selectedTastes = ['clean'];
    let selectedMoodText = '사유와 침묵';
    let currentRecommendedTeaName = '하동 옥로 우전';

    const TEA_DB = {
      'clean': {
        name: '하동 옥로 우전',
        en: 'HADONG UJEON 2024',
        cat: '계절 단일 다원 (Curated Harvest)',
        price: '16,000',
        temp: '80°C · 3 Infusions',
        score: '98% MATCH',
        img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
        comment: '북촌의 고요한 돌담길을 걸어오신 손님께, 지리산 하동 맑은 이슬을 머금은 찻잎의 첫 숨결을 건넵니다. 은은한 야생 난초 꽃향이 깊은 평온을 전해줄 것입니다.',
        reason: '선택하신 편안한 감칠맛과 차분한 사유의 기분에 가장 조화로운 계절 첫물차입니다.',
        ritual: '첫 잔은 찻잔의 온도를 손바닥으로 가만히 느끼며 향을 들이마시고, 두 번째 잔에서 비로소 솟아나는 자연스러운 단맛을 음미해 보세요.',
        pairing: '수제 쑥 인절미 또는 맑은 백옥 양갱'
      },
      'citrus': {
        name: '로즈마리 블러드오렌지 스파클링',
        en: 'Rosemary Blood Orange Cold Brew',
        cat: '시그니처 크리에이션 (Sensory Archive)',
        price: '18,000',
        temp: '저온 침출 18시간 · 아이스 서빙',
        score: '96% MATCH',
        img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
        comment: '지친 오후, 감각을 깨우는 상큼한 블러드 오렌지와 신선한 로즈마리의 숲 내음이 경쾌한 에너지를 채워줍니다.',
        reason: '텁텁함 없는 상쾌한 산미와 허브 아로마로 갈증을 씻어내고 기분을 환기하기에 최적의 시그니처입니다.',
        ritual: '빨대를 사용하지 않고 잔 가장자리에 입술을 대어, 차가운 탄산 버블과 오렌지 찻잎 층의 레이어를 느껴보세요.',
        pairing: '바질 레몬 마카롱 또는 건과일 크리스프'
      },
      'nutty': {
        name: '세레모니얼 벨벳 말차 클라우드',
        en: 'Ceremonial Velvet Matcha Cloud',
        cat: '시그니처 크리에이션 (Sensory Archive)',
        price: '19,000',
        temp: '75°C 격불 에스프레소 + 실키 오트 크림',
        score: '97% MATCH',
        img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
        comment: '교토 우지 최고급 단일 다원에서 정성껏 갈아낸 말차와 구름처럼 부드러운 오트 크림이 쌉싸름함과 고소함의 극적인 균형을 만듭니다.',
        reason: '농후하고 묵직한 고소함과 벨벳처럼 부드러운 질감을 선호하시는 취향에 완벽히 부합합니다.',
        ritual: '부드러운 크림 폼을 먼저 한 모금 입에 머금은 뒤, 서서히 짙푸른 말차 에스프레소가 섞여 들어오는 온도와 텍스처의 대비를 즐겨보세요.',
        pairing: '단팥 화과자 또는 볶은 현미 모나카'
      },
      'floral': {
        name: '백호은침 춘채',
        en: 'SILVER NEEDLE SPRING BUD',
        cat: '계절 단일 다원 (Curated Harvest)',
        price: '20,000',
        temp: '85°C · 4 Infusions',
        score: '99% MATCH',
        img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
        comment: '봄 새벽 채엽한 어린 싹의 솜털이 찻물 속에서 은빛으로 춤추며, 자극 없이 부드럽게 마음을 보듬어 줍니다.',
        reason: '카페인 부담 없이 가볍고 우아한 단맛과 순수한 꽃향을 느끼고 싶으실 때 최적입니다.',
        ritual: '찻물이 입안을 부드럽게 감쌀 때까지 3초간 머금었다가 넘기시면, 목 넘김 후에 차오르는 백련꽃 꿀맛을 발견할 수 있습니다.',
        pairing: '매화꽃 다식 또는 담백한 쌀 튀밥'
      },
      'mineral': {
        name: '무이암차 육계',
        en: 'WUYI ROUGUI CLIFF TERROIR',
        cat: '계절 단일 다원 (Curated Harvest)',
        price: '18,000',
        temp: '95°C · 5 Infusions',
        score: '97% MATCH',
        img: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80',
        comment: '비 온 뒤 붉은 암벽에 부딪히는 햇살처럼, 무이산 절벽에서 길어 올린 강렬하고도 우아한 암운(岩韻)이 오랜 사색의 시간을 지탱해 줍니다.',
        reason: '시나몬과 바위 미네랄의 묵직한 바디감을 지녀, 커피를 즐기시거나 깊고 진한 여운을 찾으시는 분께 최고의 선택입니다.',
        ritual: '95°C의 높은 온도로 추출된 첫 잔을 천천히 굴려 마신 뒤, 빈 잔 바닥에 남아 은은하게 퍼지는 꿀과 계피 잔향을 맡아보세요.',
        pairing: '호두 곶감말이 또는 흑임자 테린느'
      },
      'matcha': {
        name: '우지 싱글 에스테이트 말차',
        en: 'UJI SAMIDORI CULTIVAR',
        cat: '계절 단일 다원 (Curated Harvest)',
        price: '17,000',
        temp: '75°C · Ceremonial Whisk 전통 격불',
        score: '95% MATCH',
        img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
        comment: '티 마스터가 손수 대나무 차선으로 빚어낸 고운 에메랄드빛 거품 속에서 차의 정수를 만나보세요.',
        reason: '단일 품종 찻잎 본연의 정통 맛과 다도 격불의 의식적 몰입을 경험하고 싶으신 분께 추천합니다.',
        ritual: '두 손으로 따뜻한 찻잔을 받쳐 들고, 시계 방향으로 가볍게 잔을 돌린 후 거품의 벨벳 결을 음미하며 세 모금 반에 나누어 마십니다.',
        pairing: '제철 화과자 (봄 벚꽃 양갱 또는 가을 밤 조림)'
      }
    };

    function toggleTaste(id, label) {
      const idx = selectedTastes.indexOf(id);
      if (idx >= 0) {
        if (selectedTastes.length > 1) {
          selectedTastes.splice(idx, 1);
        }
      } else {
        if (selectedTastes.length >= 3) {
          showToast('선택 안내', '미각 프로필은 최대 3개까지 선택 가능합니다.');
          return;
        }
        selectedTastes.push(id);
      }
      document.querySelectorAll('.taste-btn').forEach(btn => {
        const btnId = btn.getAttribute('data-id');
        if (selectedTastes.includes(btnId)) {
          btn.className = 'taste-btn p-3 rounded-xl border border-[#3F5B4F] bg-[#3F5B4F]/10 text-left text-xs transition-all';
        } else {
          btn.className = 'taste-btn p-3 rounded-xl border border-[#1F2625]/12 bg-white/70 text-left text-xs transition-all';
        }
      });
      document.getElementById('taste-count-badge').textContent = selectedTastes.length + '/3 선택';
    }

    function selectMood(el, moodKey) {
      selectedMoodText = moodKey;
      document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.className = 'mood-btn w-full p-3 rounded-xl border border-[#1F2625]/12 bg-white/70 text-left text-xs transition-all text-[#6B7775]';
      });
      el.className = 'mood-btn w-full p-3 rounded-xl border border-[#3F5B4F] bg-[#3F5B4F]/10 text-left text-xs transition-all font-medium text-[#1F2625]';
    }

    function runAiSommelier() {
      const primaryTaste = selectedTastes[0] || 'clean';
      const tea = TEA_DB[primaryTaste] || TEA_DB['clean'];
      currentRecommendedTeaName = tea.name;

      document.getElementById('somm-img').src = tea.img;
      document.getElementById('somm-name').textContent = tea.name;
      document.getElementById('somm-en').textContent = tea.en;
      document.getElementById('somm-cat').textContent = tea.cat;
      document.getElementById('somm-price').textContent = '₩ ' + tea.price;
      document.getElementById('somm-temp').textContent = tea.temp;
      document.getElementById('somm-score').textContent = tea.score;
      document.getElementById('somm-comment').textContent = '“' + tea.comment + '”';
      document.getElementById('somm-reason').innerHTML = '<strong>선정 사유:</strong> ' + tea.reason;
      document.getElementById('somm-ritual').textContent = tea.ritual;
      document.getElementById('somm-pairing').textContent = tea.pairing;

      showToast('티 큐레이션 완료', tea.name + '이(가) 맞춤 추천되었습니다.');
    }

    function applySommelierToReservation() {
      const pref = document.getElementById('inq-preference');
      if (pref) {
        pref.value = '[AI 티 소믈리에 추천] ' + currentRecommendedTeaName;
      }
      const reserve = document.getElementById('reserve');
      if (reserve) {
        reserve.scrollIntoView({ behavior: 'smooth' });
        showToast('예약서 반영 완료', '추천받으신 차가 예약 신청서의 선호 사항에 입력되었습니다.');
      }
    }

    function showToast(title, message, isSuccess = true) {
      const root = document.getElementById('toast-root');
      const el = document.createElement('div');
      el.className = 'glass-toast text-white p-4 rounded-xl shadow-xl pointer-events-auto transition-all duration-300';
      el.innerHTML = '<div class="text-[10px] uppercase font-mono-tag text-[#86EFAC] font-bold mb-0.5">' + escapeHtml(title) + '</div><div class="text-xs text-[#F2F4F3] font-light">' + escapeHtml(message) + '</div>';
      root.appendChild(el);
      setTimeout(() => {
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 300);
      }, 4000);
    }

    function handleInquirySubmit(e) {
      e.preventDefault();
      const name = escapeHtml(document.getElementById('inq-name').value);
      const contact = escapeHtml(document.getElementById('inq-contact').value);
      const date = escapeHtml(document.getElementById('inq-date').value);
      const session = escapeHtml(document.getElementById('inq-session').value);
      const guests = escapeHtml(document.getElementById('inq-guests').value);
      const preference = escapeHtml(document.getElementById('inq-preference').value);

      const record = {
        name, contact, date, session, guests, preference,
        createdAt: new Date().toISOString()
      };

      try {
        const stored = JSON.parse(localStorage.getItem('space_inquiries') || '[]');
        stored.push(record);
        localStorage.setItem('space_inquiries', JSON.stringify(stored));
      } catch (err) {}

      showToast('예약 신청 접수 완료', '다석 예약 신청서가 성공적으로 접수되었습니다. 안내 메시지가 발송됩니다.');
      document.getElementById('inquiry-form').reset();
    }
  </script>
</body>
</html>`;
}
