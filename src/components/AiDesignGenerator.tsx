import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { Loader2, Sparkles, Image as ImageIcon } from 'lucide-react';

export function AiDesignGenerator() {
  const isDarkMode = useAppStore(state => state.isDarkMode);
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const response = await fetch('/api/gemini/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt.trim() })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || '이미지 생성에 실패했습니다.');
      }

      if (data.image) {
        setGeneratedImage(data.image);
      }
    } catch (err: any) {
      setError(err.message || '오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`py-24 px-6 md:px-12 transition-colors duration-300 ${isDarkMode ? 'bg-[#1C2221] text-[#F2F4F3]' : 'bg-[#EAECEB] text-[#1F2625]'}`}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              AI Design <span className="italic font-serif text-[#A67C52]">Studio</span>
            </h2>
            <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              당신만의 감각을 시각화해보세요. 오도행의 영감이 담긴 찻잔이나 공간 디자인을 텍스트로 묘사하면, Gemini AI가 아름다운 이미지를 생성해 드립니다.
            </p>
          </div>

          <div className="space-y-4">
            <textarea
              className={`w-full p-4 border rounded-xl resize-none focus:outline-none focus:ring-1 transition-all ${
                isDarkMode 
                  ? 'bg-[#161B1A] border-gray-700 focus:border-[#A67C52] focus:ring-[#A67C52] text-white placeholder-gray-500' 
                  : 'bg-white border-gray-300 focus:border-[#A67C52] focus:ring-[#A67C52] text-gray-900 placeholder-gray-400'
              }`}
              rows={4}
              placeholder="예: 한국의 전통 백자 스타일에 현대적인 모던함이 가미된 아름다운 찻잔 세트, 부드러운 햇살이 비치는 창가 배경"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            
            <button
              onClick={handleGenerate}
              disabled={isLoading || !prompt.trim()}
              className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all font-medium ${
                isDarkMode 
                  ? 'bg-[#A67C52] hover:bg-[#8A6540] text-white disabled:bg-gray-800 disabled:text-gray-500' 
                  : 'bg-[#A67C52] hover:bg-[#8A6540] text-white disabled:bg-gray-200 disabled:text-gray-400'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  생성 중...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  디자인 생성하기
                </>
              )}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>

        <div className={`flex-1 w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center border ${
          isDarkMode ? 'bg-[#161B1A] border-gray-800' : 'bg-white border-gray-200'
        }`}>
          {isLoading ? (
            <div className="flex flex-col items-center gap-4 text-[#A67C52] animate-pulse">
              <Sparkles className="w-12 h-12" />
              <p className="text-sm font-medium">Gemini AI가 디자인을 스케치하는 중입니다...</p>
            </div>
          ) : generatedImage ? (
            <img src={generatedImage} alt="AI Generated Design" className="w-full h-full object-cover transition-opacity duration-700 opacity-100" />
          ) : (
            <div className={`flex flex-col items-center gap-3 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
              <ImageIcon className="w-16 h-16 opacity-50" />
              <p className="text-sm">생성된 이미지가 이곳에 표시됩니다.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
