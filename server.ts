import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// O.DO.HAENG Signature & Harvest Tea Menu Knowledge Base
const TEAHOUSE_MENU = [
  {
    id: 'rosemary-blood-orange',
    name: '로즈마리 블러드오렌지 스파클링',
    englishName: 'Rosemary Blood Orange Cold Brew',
    category: '시그니처 크리에이션 (Sensory Archive)',
    price: '18,000',
    temperature: '저온 침출 18시간 · 아이스 서빙',
    caffeine: '저카페인',
    flavorProfile: ['청량한 시트러스', '신선한 로즈마리 허브', '천연 탄산 레이어'],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    description: '하동 야생 찻잎을 18시간 저온 추출하여 블러드 오렌지의 붉은 산미와 생 로즈마리 아로마를 층상으로 완성한 청량 음료.'
  },
  {
    id: 'ceremonial-matcha-cloud',
    name: '세레모니얼 벨벳 말차 클라우드',
    englishName: 'Ceremonial Velvet Matcha Cloud',
    category: '시그니처 크리에이션 (Sensory Archive)',
    price: '19,000',
    temperature: '75°C 격불 에스프레소 스타일 + 실키 오트 크림',
    caffeine: '보통',
    flavorProfile: ['농후한 우마미', '실키한 오트 크림', '미세 맷돌 교토 우지 말차'],
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    description: '교토 우지 단일 수령 사미도리 찻잎의 깊은 벨벳 질감과 고소하고 부드러운 오트 밀크 폼의 감미로운 조화.'
  },
  {
    id: 'crystal-botanical-coldbrew',
    name: '크리스털 보태니컬 콜드브루',
    englishName: 'Crystal Botanical Tea Cocktail',
    category: '시그니처 크리에이션 (Sensory Archive)',
    price: '18,500',
    temperature: '천연 암반수 저온 침출 · 각면 크리스털 글라스',
    caffeine: '저카페인',
    flavorProfile: ['맑은 야생 타임', '청초한 백합꽃 향', '투명한 빙하석 텍스처'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    description: '청정 백호은침 찻잎에 야생 타임 허브를 인퓨징하여 은빛 투명함과 청량한 아로마를 선사하는 무알콜 티 칵테일.'
  },
  {
    id: 'hadong-ujeon',
    name: '하동 옥로 우전',
    englishName: 'HADONG UJEON 2024',
    category: '계절 단일 다원 (Curated Harvest)',
    price: '16,000',
    temperature: '80°C · 3 Infusions',
    caffeine: '보통',
    flavorProfile: ['달콤한 첫물차 감칠맛', '은은한 야생 난초향', '맑은 연둣빛 수색'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    description: '경남 하동 화개면 청정 골짜기에서 채엽한 전통 수제 덖음 우전. 찻잔을 감싸는 손의 온기와 난초 꽃향의 온화한 위로.'
  },
  {
    id: 'wuyi-rougui',
    name: '무이암차 육계',
    englishName: 'WUYI ROUGUI CLIFF TERROIR',
    category: '계절 단일 다원 (Curated Harvest)',
    price: '18,000',
    temperature: '95°C · 5 Infusions',
    caffeine: '높음',
    flavorProfile: ['붉은 바위 미네랄', '시나몬 로스팅 향', '묵직하고 긴 암운(岩韻)'],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80',
    description: '중국 복건성 무이산 가파른 바위 절벽에서 자생한 명품 암차. 묵직한 바디감과 시나몬의 깊은 여운으로 커피 애호가에게 찬사받는 차.'
  },
  {
    id: 'silver-needle',
    name: '백호은침 춘채',
    englishName: 'SILVER NEEDLE SPRING BUD',
    category: '계절 단일 다원 (Curated Harvest)',
    price: '20,000',
    temperature: '85°C · 4 Infusions',
    caffeine: '매우 낮음',
    flavorProfile: ['어린 은빛 솜털 싹', '백련꽃 꿀맛', '순수하고 투명한 질감'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    description: '복건성 정화현 해발 800m 산간 다원에서 봄 첫 새벽에 채엽한 솜털 어린 싹. 자극 없는 편안함과 맑고 그윽한 단맛.'
  },
  {
    id: 'uji-estate-matcha',
    name: '우지 싱글 에스테이트 말차',
    englishName: 'UJI SAMIDORI CULTIVAR',
    category: '계절 단일 다원 (Curated Harvest)',
    price: '17,000',
    temperature: '75°C · Ceremonial Whisk 전통 격불',
    caffeine: '보통',
    flavorProfile: ['단일 품종 사미도리', '풍부한 녹색 거품', '계절 수제 화과자 페어링'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    description: '전통 대나무 차선으로 정밀하게 격불하여 벨벳처럼 부드러운 거품과 찻잎 본연의 농후한 맛을 음미하는 정통 다도 리추얼.'
  }
];

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json({ limit: '10mb' }));

  // AI Tea Sommelier Taste Recommendation Endpoint (Gemini 3.8 Flash)
  app.post('/api/gemini/tea-recommendation', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      const { flavorPreferences = [], currentMood = '', caffeine = '상관없음', freeText = '' } = req.body;

      // Smart rule-based matching score calculation (used as base and fallback)
      const scoredList = TEAHOUSE_MENU.map(tea => {
        let score = 70;
        const textToMatch = `${tea.name} ${tea.flavorProfile.join(' ')} ${tea.description} ${tea.caffeine}`;

        flavorPreferences.forEach((pref: string) => {
          if (pref.includes('산미') || pref.includes('청량')) {
            if (tea.id === 'rosemary-blood-orange' || tea.id === 'crystal-botanical-coldbrew') score += 18;
          }
          if (pref.includes('고소') || pref.includes('우마미') || pref.includes('곡물')) {
            if (tea.id === 'ceremonial-matcha-cloud' || tea.id === 'hadong-ujeon') score += 18;
          }
          if (pref.includes('꽃향') || pref.includes('달콤') || pref.includes('단맛')) {
            if (tea.id === 'silver-needle' || tea.id === 'hadong-ujeon') score += 18;
          }
          if (pref.includes('스모키') || pref.includes('바위') || pref.includes('묵직')) {
            if (tea.id === 'wuyi-rougui') score += 25;
          }
          if (pref.includes('말차') || pref.includes('진한')) {
            if (tea.id === 'uji-estate-matcha' || tea.id === 'ceremonial-matcha-cloud') score += 20;
          }
        });

        if (caffeine === '카페인 프리' || caffeine === '저카페인') {
          if (tea.caffeine.includes('낮') || tea.caffeine.includes('저')) score += 15;
          if (tea.caffeine === '높음') score -= 20;
        }

        if (currentMood.includes('휴식') || currentMood.includes('침묵') || currentMood.includes('사색')) {
          if (tea.id === 'hadong-ujeon' || tea.id === 'silver-needle') score += 15;
        }
        if (currentMood.includes('갈증') || currentMood.includes('청량') || currentMood.includes('활력')) {
          if (tea.id === 'rosemary-blood-orange' || tea.id === 'crystal-botanical-coldbrew') score += 15;
        }

        return { ...tea, matchScore: Math.min(score, 99) };
      }).sort((a, b) => b.matchScore - a.matchScore);

      const topMatchedTea = scoredList[0];

      // If Gemini API Key is available, use Gemini 3.8 Flash to write a poetic, bespoke sommelier commentary
      if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
        try {
          const ai = new GoogleGenAI({
            apiKey,
            httpOptions: {
              headers: {
                'User-Agent': 'aistudio-build',
              }
            }
          });

          const prompt = `당신은 서울 북촌 아키텍처럴 티 하우스 '오도행(O.DO.HAENG)'의 수석 티 마스터(Tea Sommelier)입니다.
손님의 입맛과 기분 요구사항을 경청하고, 오도행의 메뉴 중에서 가장 어울리는 차를 정중하고 시적인 어조로 추천해 주세요.

[손님의 취향 및 상태]
- 선호하는 미각/향: ${flavorPreferences.join(', ') || '균형 잡힌 맛'}
- 오늘의 기분/상황: ${currentMood || '편안한 사유와 휴식'}
- 카페인 선호도: ${caffeine}
- 추가 요청 메모: "${freeText || '티 마스터님의 추천을 신뢰합니다'}"

[오도행의 메뉴 후보군]
1. 로즈마리 블러드오렌지 스파클링 (보태니컬 저온 침출, 천연 탄산, 청량한 시트러스)
2. 세레모니얼 벨벳 말차 클라우드 (교토 우지 말차, 실키 오트 크림, 풍부한 우마미)
3. 크리스털 보태니컬 콜드브루 (백호은침 + 타임 허브 인퓨전, 투명하고 청초한 꽃향)
4. 하동 옥로 우전 (경남 하동 첫물차, 80°C 추출, 은은한 난초향과 달콤한 감칠맛)
5. 무이암차 육계 (중국 복건성 무이산 절벽, 95°C 추출, 바위 미네랄과 시나몬의 깊은 여운, 커피 애호가 추천)
6. 백호은침 춘채 (은빛 솜털 싹, 85°C 추출, 은은한 꿀맛과 백련꽃 향, 저자극)
7. 우지 싱글 에스테이트 말차 (전통 차선 격불, 깊은 벨벳 질감, 농후한 맛)

반드시 다음 JSON 형식에 맞춰 응답하세요:
{
  "matchedBeverageId": "선택한 메뉴 ID (rosemary-blood-orange | ceremonial-matcha-cloud | crystal-botanical-coldbrew | hadong-ujeon | wuyi-rougui | silver-needle | uji-estate-matcha)",
  "matchedBeverageName": "선택한 메뉴 이름",
  "matchReason": "이 손님의 취향과 현재 기분에 이 차가 가장 완벽한 이유를 설명하는 2-3문장의 정갈한 문장",
  "sommelierComment": "오도행 티 마스터로서 손님께 건네는 따뜻하고 감각적인 사유의 메시지 (3문장 내외)",
  "recommendedRitual": "이 차를 마실 때 가장 몰입할 수 있는 감각적 리추얼 제안 (온도, 향 맡기, 모금의 속도 등)",
  "pairings": "함께 즐기기 좋은 계절 디저트나 다과 제안",
  "matchScore": 95
}`;

          const geminiResponse = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: prompt,
            config: {
              responseMimeType: 'application/json',
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  matchedBeverageId: { type: Type.STRING },
                  matchedBeverageName: { type: Type.STRING },
                  matchReason: { type: Type.STRING },
                  sommelierComment: { type: Type.STRING },
                  recommendedRitual: { type: Type.STRING },
                  pairings: { type: Type.STRING },
                  matchScore: { type: Type.NUMBER }
                },
                required: ['matchedBeverageId', 'matchedBeverageName', 'matchReason', 'sommelierComment', 'recommendedRitual', 'pairings']
              }
            }
          });

          if (geminiResponse.text) {
            const parsed = JSON.parse(geminiResponse.text.trim());
            const fullMenuInfo = TEAHOUSE_MENU.find(m => m.id === parsed.matchedBeverageId) || topMatchedTea;

            return res.json({
              success: true,
              beverage: {
                ...fullMenuInfo,
                matchScore: parsed.matchScore || topMatchedTea.matchScore
              },
              reason: parsed.matchReason,
              sommelierComment: parsed.sommelierComment,
              ritual: parsed.recommendedRitual,
              pairings: parsed.pairings,
              allCandidates: scoredList.slice(0, 3)
            });
          }
        } catch (geminiError: any) {
          console.warn('[Gemini Sommelier] Fallback to curated sommelier knowledge base:', geminiError?.message);
        }
      }

      // High-Fidelity Heuristic Sommelier Responses
      const sommelierMap: Record<string, { reason: string; comment: string; ritual: string; pairings: string }> = {
        'hadong-ujeon': {
          reason: '차분하고 정갈한 온기와 부드러운 감칠맛을 원하시는 손님의 입맛에 가장 이상적인 조화를 이룹니다.',
          comment: '분주한 도심의 소음을 걷어내고, 지리산 맑은 이슬을 머금은 찻잎의 첫 숨결에 머물러 보세요. 입안 가득 맴도는 은은한 야생 난초향이 깊은 평온을 선사합니다.',
          ritual: '첫 모금은 찻잔의 온기를 손바닥으로 가만히 느끼며 향을 들이마시고, 두 번째 모금부터 찻물이 혀끝을 적실 때 솟아나는 자연스러운 단맛을 음미해 보세요.',
          pairings: '수제 쑥 인절미 또는 맑은 백옥 양갱'
        },
        'rosemary-blood-orange': {
          reason: '텁텁함 없는 상쾌한 산미와 허브 아로마로 갈증을 씻어내고 기분을 환기하기에 최적의 시그니처입니다.',
          comment: '지친 오후, 감각을 깨우는 상큼한 블러드 오렌지와 신선한 로즈마리의 숲 내음이 경쾌한 에너지를 채워줍니다.',
          ritual: '빨대를 사용하지 않고 잔 가장자리에 입술을 대어, 차가운 탄산 버블과 농후한 오렌지 찻잎 층이 입안에서 섞이는 레이어를 느껴보세요.',
          pairings: '바질 레몬 마카롱 또는 건과일 크리스프'
        },
        'ceremonial-matcha-cloud': {
          reason: '농후하고 묵직한 고소함과 벨벳처럼 부드러운 질감을 선호하시는 취향에 완벽히 부합합니다.',
          comment: '교토 우지 최고급 단일 다원에서 정성껏 갈아낸 말차와 구름처럼 부드러운 오트 크림이 쌉싸름함과 고소함의 극적인 균형을 만듭니다.',
          ritual: '부드러운 크림 폼을 먼저 한 모금 입에 머금은 뒤, 서서히 짙푸른 말차 에스프레소가 섞여 들어오는 온도와 텍스처의 대비를 즐겨보세요.',
          pairings: '단팥 화과자 또는 볶은 현미 모나카'
        },
        'wuyi-rougui': {
          reason: '시나몬과 바위 미네랄의 묵직한 바디감을 지녀, 커피를 즐기시거나 깊고 진한 여운을 찾으시는 분께 최고의 선택입니다.',
          comment: '비 온 뒤 붉은 암벽에 부딪히는 햇살처럼, 무이산 절벽에서 길어 올린 강렬하고도 우아한 암운(岩韻)이 오랜 사색의 시간을 지탱해 줍니다.',
          ritual: '95°C의 높은 온도로 추출된 첫 잔을 천천히 굴려 마신 뒤, 빈 잔 바닥에 남아 은은하게 퍼지는 꿀과 계피 잔향(杯底香)을 반드시 맡아보세요.',
          pairings: '호두 곶감말이 또는 흑임자 테린느'
        },
        'crystal-botanical-coldbrew': {
          reason: '자극 없는 투명한 청초함과 야생 허브의 우아한 향미를 원하시는 분을 위한 무알콜 칵테일입니다.',
          comment: '맑은 물빛 속에 피어난 타임의 은은한 아로마가 머릿속의 복잡한 생각들을 정갈하게 비워내 줍니다.',
          ritual: '각면 크리스털 잔에 부딪히는 얼음 소리를 들으며, 눈으로 투명한 수색을 먼저 감상한 뒤 천천히 한 모금씩 넘겨보세요.',
          pairings: '연잎 다식 또는 청포도 타르트'
        },
        'silver-needle': {
          reason: '카페인 부담 없이 가볍고 우아한 단맛과 순수한 꽃향을 느끼고 싶으실 때 최적입니다.',
          comment: '봄 새벽 채엽한 어린 싹의 솜털이 찻물 속에서 은빛으로 춤추며, 자극 없이 부드럽게 마음을 보듬어 줍니다.',
          ritual: '찻물이 입안을 부드럽게 감쌀 때까지 3초간 머금었다가 넘기시면, 목 넘김 후에 차오르는 백련꽃 꿀맛을 발견할 수 있습니다.',
          pairings: '매화꽃 다식 또는 담백한 쌀 튀밥'
        },
        'uji-estate-matcha': {
          reason: '단일 품종 찻잎 본연의 정통 맛과 다도 격불의 의식적 몰입을 경험하고 싶으신 분께 추천합니다.',
          comment: '티 마스터가 손수 대나무 차선으로 빚어낸 고운 에메랄드빛 거품 속에서 차의 정수를 만나보세요.',
          ritual: '두 손으로 따뜻한 찻잔을 받쳐 들고, 시계 방향으로 가볍게 잔을 돌린 후 거품의 벨벳 결을 음미하며 세 모금 반에 나누어 마십니다.',
          pairings: '제철 화과자 (봄 벚꽃 양갱 또는 가을 밤 조림)'
        }
      };

      const matchedSommelier = sommelierMap[topMatchedTea.id] || sommelierMap['hadong-ujeon'];

      return res.json({
        success: true,
        beverage: topMatchedTea,
        reason: matchedSommelier.reason,
        sommelierComment: matchedSommelier.comment,
        ritual: matchedSommelier.ritual,
        pairings: matchedSommelier.pairings,
        allCandidates: scoredList.slice(0, 3)
      });

    } catch (err: any) {
      console.error('Tea recommendation error:', err);
      return res.status(500).json({
        error: 'RECOMMENDATION_ERROR',
        message: err?.message || '차 추천 생성 중 오류가 발생했습니다.'
      });
    }
  });

  // AI Image Generation Endpoint (Imagen 3)
  app.post('/api/gemini/generate-image', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.status(400).json({ error: 'API key is missing' });
      }

      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '1:1',
        }
      });

      const base64Image = response.generatedImages?.[0]?.image?.imageBytes;
      if (!base64Image) {
        throw new Error('Image generation failed or returned no image');
      }

      return res.json({ success: true, image: `data:image/jpeg;base64,${base64Image}` });
    } catch (err: any) {
      console.error('Image generation error:', err);
      return res.status(500).json({
        error: 'GENERATION_ERROR',
        message: err?.message || '이미지 생성 중 오류가 발생했습니다.'
      });
    }
  });

  // Health endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'O.DO.HAENG Teahouse' });
  });

  // Serve dist or Vite middlewares
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
