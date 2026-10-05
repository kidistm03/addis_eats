"use client";

import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";
import { createCartStore } from "@/lib/cart-store";

const CartStoreContext = createContext(null);

export default function Providers({ children }) {
  const storeRef = useRef(null);
  if (storeRef.current === null) {
    storeRef.current = createCartStore();
  }
  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  );
}

// Client components call this
export function useCart(selector) {
  const store = useContext(CartStoreContext);
  if (!store) throw new Error("useCart must be used inside <Providers>");
  return useStore(store, selector);
}