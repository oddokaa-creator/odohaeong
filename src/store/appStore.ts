import { AppState, ToastMessage, CartItem } from '../types';

// XSS Prevention: Strict HTML escape
export function escapeHtml(str: string | null | undefined): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

class AppStore {
  private state: AppState;
  private listeners: Set<(state: AppState) => void> = new Set();

  constructor() {
    this.state = {
      toasts: [],
      cart: [],
      isCartOpen: false,
      activeNav: 'SPACE',
      isDarkMode: false
    };
  }

  public getState(): AppState {
    return this.state;
  }

  public subscribe(listener: (state: AppState) => void): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  public setState(updater: Partial<AppState> | ((prev: AppState) => Partial<AppState>)): void {
    const nextState = typeof updater === 'function' ? updater(this.state) : updater;
    this.state = { ...this.state, ...nextState };
    this.publish();
  }

  private publish(): void {
    this.listeners.forEach(listener => {
      try {
        listener(this.state);
      } catch (err) {
        console.error('Listener callback error:', err);
      }
    });
  }

  // Toast System
  public addToast(type: ToastMessage['type'], title: string, message: string, duration = 4000): void {
    const id = 'toast-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
    const newToast: ToastMessage = { id, type, title, message, duration };
    this.setState(prev => ({
      toasts: [...prev.toasts, newToast]
    }));

    if (duration > 0) {
      setTimeout(() => {
        this.removeToast(id);
      }, duration);
    }
  }

  public removeToast(id: string): void {
    this.setState(prev => ({
      toasts: prev.toasts.filter(t => t.id !== id)
    }));
  }

  // Cart Management
  public addToCart(item: any, packagingOption = '기본 시그니처 박스', packagingExtra = 0): void {
    this.setState(prev => {
      const existingIdx = prev.cart.findIndex(
        c => c.item.id === item.id && c.selectedPackaging === packagingOption
      );
      if (existingIdx >= 0) {
        const updated = [...prev.cart];
        updated[existingIdx].quantity += 1;
        return { cart: updated, isCartOpen: true };
      }
      return {
        cart: [
          ...prev.cart,
          {
            id: 'cart-' + Date.now(),
            item,
            quantity: 1,
            selectedPackaging: packagingOption,
            packagingExtra
          }
        ],
        isCartOpen: true
      };
    });
    this.addToast('success', '선물 셀렉션 담기 완료', `${item.name}이(가) 보관되었습니다.`);
  }

  public updateCartQuantity(cartId: string, delta: number): void {
    this.setState(prev => {
      const updated = prev.cart
        .map(c => {
          if (c.id === cartId) {
            const nextQty = c.quantity + delta;
            return nextQty > 0 ? { ...c, quantity: nextQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[];
      return { cart: updated };
    });
  }

  public toggleCart(isOpen?: boolean): void {
    this.setState(prev => ({
      isCartOpen: isOpen !== undefined ? isOpen : !prev.isCartOpen
    }));
  }

  public setActiveNav(nav: string): void {
    this.setState({ activeNav: nav });
  }

  public toggleDarkMode(): void {
    this.setState(prev => ({ isDarkMode: !prev.isDarkMode }));
  }
}

// Global Singleton Store Instance
export const appStore = new AppStore();
