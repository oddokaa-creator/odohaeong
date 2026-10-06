export interface SpaceInquiry {
  id?: string;
  type: 'reservation' | 'vip_gifting' | 'space_design' | 'collab';
  name: string;
  contact: string;
  email?: string;
  date?: string;
  sessionTime?: string;
  guests?: string;
  preference?: string;
  spaceType?: string;
  message?: string;
  createdAt: number | any;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  duration?: number;
}

export interface ShopItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'GIFT SETS' | 'TEACUPS & OBJECTS' | 'SPECIAL';
  price: number;
  badge?: string;
  image: string;
  description: string;
  packagingOptions?: { name: string; priceAdd: number }[];
  inStock: boolean;
}

export interface CartItem {
  id: string;
  item: ShopItem;
  quantity: number;
  selectedPackaging?: string;
  packagingExtra: number;
}

export interface AppState {
  toasts: ToastMessage[];
  cart: CartItem[];
  isCartOpen: boolean;
  activeNav: string;
  isDarkMode: boolean;
}
