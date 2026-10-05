import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { appStore } from '../store/appStore';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const toasts = useAppStore(state => state.toasts);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map(toast => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            className="pointer-events-auto rounded-xl p-4 shadow-xl backdrop-blur-xl border transition-all duration-300 transform translate-y-0 opacity-100 flex items-start gap-3 bg-[#1F2625]/90 text-[#F2F4F3] border-[#3F5B4F]/40"
          >
            <div className="shrink-0 mt-0.5">
              {isSuccess && <CheckCircle2 className="w-5 h-5 text-[#86EFAC]" />}
              {isError && <AlertCircle className="w-5 h-5 text-[#FCA5A5]" />}
              {!isSuccess && !isError && <Info className="w-5 h-5 text-[#C2A685]" />}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C2A685] mb-0.5">
                {toast.title}
              </h4>
              <p className="text-xs text-[#E2E6E5] leading-relaxed">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => appStore.removeToast(toast.id)}
              className="shrink-0 text-[#97A3A1] hover:text-[#F2F4F3] p-1 rounded transition-colors"
              aria-label="닫기"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
