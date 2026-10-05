import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, ExternalLink } from 'lucide-react';
import { appStore } from '../store/appStore';
import { generateStandaloneHtml } from '../utils/standaloneHtmlGenerator';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const htmlCode = generateStandaloneHtml();

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    appStore.addToast('success', '복사 완료', '단일 실행형 HTML 코드가 클립보드에 복사되었습니다.');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'odohaeng-sanctuary-standalone.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    appStore.addToast('success', 'HTML 다운로드 완료', 'odohaeng-sanctuary-standalone.html 파일이 저장되었습니다.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#F2F4F3] border border-[#1F2625]/20 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative text-[#1F2625]">
        {/* Header */}
        <div className="p-6 border-b border-[#1F2625]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3F5B4F]/10 flex items-center justify-center text-[#3F5B4F]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono-tag tracking-wider text-[#715A3E] uppercase">
                SINGLE-FILE EXECUTABLE HTML
              </span>
              <h3 className="text-lg font-heading font-medium text-[#1F2625]">
                완성형 단일 실행 HTML 코드
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#6B7775] hover:text-[#1F2625] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <div className="px-6 py-4 bg-white/50 border-b border-[#1F2625]/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#6B7775]">
          <p className="font-light">
            외부 의존성 없이 웹 브라우저에서 더블 클릭만으로 즉시 작동하는 100% 무결점 단일 HTML입니다. (Tailwind CDN, Pub-Sub AppStore, Gemini 렌더링 파이프라인, Firebase Mock 내장)
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#3F5B4F] text-[#F2F4F3] text-xs font-mono-tag rounded-xl hover:bg-[#344B41] transition-all font-medium shadow-xs"
            >
              {copied ? <Check className="w-4 h-4 text-[#86EFAC]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? '복사되었습니다' : '단일 HTML 복사'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#1F2625]/20 text-[#1F2625] text-xs font-mono-tag rounded-xl hover:border-[#1F2625] transition-all"
            >
              <Download className="w-4 h-4 text-[#715A3E]" />
              <span>.html 다운로드</span>
            </button>
          </div>
        </div>

        {/* Code Preview Frame */}
        <div className="flex-1 overflow-hidden p-6">
          <div className="w-full h-full bg-[#1F2625] text-[#86EFAC] rounded-2xl p-4 overflow-y-auto font-mono text-[11px] leading-relaxed border border-white/10 selection:bg-[#3F5B4F] selection:text-white">
            <pre><code>{htmlCode.slice(0, 5000)}... (총 {htmlCode.length.toLocaleString()} 바이트)</code></pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-[#1F2625]/10 flex justify-between items-center text-xs text-[#6B7775]">
          <span>© 2025 O.DO.HAENG Architectural Studio</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-[#1F2625]/20 rounded-lg text-[#1F2625]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
