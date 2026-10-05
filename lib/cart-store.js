import { createStore } from "zustand";

export const createCartStore = () =>
  createStore((set, get) => ({
    cartItems: [],

    addToCart: (dish, quantity = 1) =>
      set((state) => {
        const existing = state.cartItems.find((i) => i.id === dish.id);
        if (existing) {
          return {
            cartItems: state.cartItems.map((i) =>
              i.id === dish.id ? { ...i, quantity: i.quantity + quantity } : i
            ),
          };
        }
        return { cartItems: [...state.cartItems, { ...dish, quantity }] };
      }),

    updateQuantity: (id, quantity) =>
      set((state) => ({
        cartItems: state.cartItems.map((i) =>
          i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
        ),
      })),

    removeFromCart: (id) =>
      set((state) => ({ cartItems: state.cartItems.filter((i) => i.id !== id) })),

    clearCart: () => set({ cartItems: [] }),

    totalItems: () => get().cartItems.reduce((sum, i) => sum + i.quantity, 0),
    subtotal: () =>
      get().cartItems.reduce((sum, i) => sum + i.priceETB * i.quantity, 0),
  }));