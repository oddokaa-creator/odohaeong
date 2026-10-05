import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { appStore } from '../store/appStore';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const cart = useAppStore(state => state.cart);
  const isCartOpen = useAppStore(state => state.isCartOpen);

  if (!isCartOpen) return null;

  const totalAmount = cart.reduce(
    (sum, item) => sum + (item.item.price + item.packagingExtra) * item.quantity,
    0
  );

  const handleCheckout = () => {
    appStore.addToast('success', '주문 접수', '선택하신 선물 셀렉션 주문서가 결제 창구로 전송되었습니다.');
    appStore.toggleCart(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F2F4F3] border-l border-[#1F2625]/15 shadow-2xl flex flex-col justify-between text-[#1F2625]">
          {/* Header */}
          <div className="p-6 border-b border-[#1F2625]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#3F5B4F]" />
              <h3 className="text-base font-heading font-medium text-[#1F2625]">
                선물 셀렉션 장바구니
              </h3>
            </div>
            <button
              onClick={() => appStore.toggleCart(false)}
              className="p-1 rounded-md text-[#6B7775] hover:text-[#1F2625] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3 text-[#6B7775]">
                <ShoppingBag className="w-12 h-12 stroke-1 text-[#C2A685]" />
                <p className="text-sm font-light">보관된 기프트 에디션이 없습니다.</p>
                <button
                  onClick={() => {
                    appStore.toggleCart(false);
                    const el = document.getElementById('shop');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 text-xs font-mono-tag text-[#3F5B4F] underline uppercase"
                >
                  기프트 컬렉션 둘러보기
                </button>
              </div>
            ) : (
              cart.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="p-4 rounded-2xl bg-white border border-[#1F2625]/10 flex gap-4 items-center shadow-xs"
                >
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-16 h-16 rounded-xl object-cover object-center bg-[#E2E6E5]"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-heading font-medium text-[#1F2625] truncate">
                      {cartItem.item.name}
                    </h4>
                    {cartItem.selectedPackaging && (
                      <span className="text-[10px] text-[#715A3E] font-mono-tag block truncate">
                        포장: {cartItem.selectedPackaging}
                      </span>
                    )}
                    <div className="text-xs font-display font-light text-[#1F2625] mt-1">
                      ₩ {((cartItem.item.price + cartItem.packagingExtra) * cartItem.quantity).toLocaleString()}
                    </div>
                  </div>

                  {/* Quantity Actions */}
                  <div className="flex items-center gap-1.5 border border-[#1F2625]/10 rounded-lg p-1">
                    <button
                      onClick={() => appStore.updateCartQuantity(cartItem.id, -1)}
                      className="p-1 text-[#6B7775] hover:text-[#1F2625]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-mono-tag px-1">{cartItem.quantity}</span>
                    <button
                      onClick={() => appStore.updateCartQuantity(cartItem.id, 1)}
                      className="p-1 text-[#6B7775] hover:text-[#1F2625]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#1F2625]/10 bg-white/70 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#6B7775] font-light">총 결제 예정 금액</span>
                <span className="text-lg font-display font-light text-[#1F2625]">
                  ₩ {totalAmount.toLocaleString()}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-[#3F5B4F] hover:bg-[#344B41] text-[#F2F4F3] text-xs font-mono-tag tracking-wider uppercase rounded-xl transition-colors font-medium flex items-center justify-center gap-2 shadow-sm"
              >
                <span>선물 주문 진행하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
