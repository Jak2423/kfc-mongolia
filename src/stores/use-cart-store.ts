import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
   cart: any[];
   totalItems: number;
   totalPrice: number;
}

interface Actions {
   addToCart: (Item: any, quantity: number) => void;
   removeFromCart: (Item: any) => void;
   updateItemQuantity: (itemId: number, quantity: number, variantId?: number) => void;
   incrementQuantity: (itemId: number, variantId?: number) => void;
   decrementQuantity: (itemId: number, variantId?: number) => void;
   clearCart: () => void;
}

const calculateTotals = (cart: any[]) => {
   return cart.reduce(
      (acc, item) => ({
         totalItems: acc.totalItems + item.quantity,
         totalPrice: acc.totalPrice + item.price * item.quantity,
      }),
      { totalItems: 0, totalPrice: 0 },
   );
};

const INITIAL_STATE: State = {
   cart: [],
   totalItems: 0,
   totalPrice: 0,
};

export const useCartStore = create(
   persist<State & Actions>(
      (set, get) => ({
         ...INITIAL_STATE,
         addToCart: (product, quantity) => {
            const cart = get().cart;

            const cartItemIndex = cart.findIndex(
               (item) => item.id === product.id
            );

            if (cartItemIndex > -1) {

               const updatedCart = [...cart];
               updatedCart[cartItemIndex] = {
                  ...updatedCart[cartItemIndex],
                  quantity: updatedCart[cartItemIndex].quantity + quantity,
               };
               const { totalItems, totalPrice } = calculateTotals(updatedCart);
               set({
                  cart: updatedCart,
                  totalItems,
                  totalPrice,
               });

            } else {
               const updatedCart = [...cart, { ...product, quantity }];
               const { totalItems, totalPrice } = calculateTotals(updatedCart);
               set({
                  cart: updatedCart,
                  totalItems,
                  totalPrice,
               });
            }
         },
         removeFromCart: (product) => {
            set((state) => {
               const updatedCart = state.cart.filter(
                  (item) => !(item.id === product.id),
               );
               const { totalItems, totalPrice } = calculateTotals(updatedCart);
               return {
                  cart: updatedCart,
                  totalItems,
                  totalPrice,
               };
            });
         },
         updateItemQuantity: (itemId, quantity, variantId) => {
            set((state) => {
               const cart = [...state.cart];
               const cartItemIndex = cart.findIndex(
                  (item) => item.id === itemId
               );

               if (cartItemIndex > -1) {
                  const item = cart[cartItemIndex];
                  cart[cartItemIndex] = { ...item, quantity };
                  const { totalItems, totalPrice } = calculateTotals(cart);
                  return {
                     cart,
                     totalItems,
                     totalPrice,
                  };

               }
               return state;
            });
         },
         incrementQuantity: (itemId, variantId) => {
            set((state) => {
               const cart = [...state.cart];
               const cartItemIndex = cart.findIndex(
                  (item) => item.id === itemId
               );

               if (cartItemIndex > -1) {
                  const item = cart[cartItemIndex];

                  cart[cartItemIndex] = { ...item, quantity: item.quantity + 1 };
                  const { totalItems, totalPrice } = calculateTotals(cart);
                  return {
                     cart,
                     totalItems,
                     totalPrice,
                  };

               }
               return state;
            });
         },
         decrementQuantity: (itemId, variantId) => {
            set((state) => {
               const cart = [...state.cart];
               const cartItemIndex = cart.findIndex(
                  (item) => item.id === itemId
               );

               if (cartItemIndex > -1 && cart[cartItemIndex].quantity > 1) {
                  const item = cart[cartItemIndex];
                  cart[cartItemIndex] = { ...item, quantity: item.quantity - 1 };
                  const { totalItems, totalPrice } = calculateTotals(cart);
                  return {
                     cart,
                     totalItems,
                     totalPrice,
                  };
               }
               return state;
            });
         },
         clearCart: () => {
            set(INITIAL_STATE);
         },
      }),
      {
         name: 'cart-storage',
      },
   ),
);
