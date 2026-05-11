import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }

      state.totalCount += 1;
      state.totalPrice += action.payload.price;
    },

    // Remove item completely
    removeItem: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload
      );

      if (item) {
        state.totalCount -= item.quantity;
        state.totalPrice -= item.price * item.quantity;

        state.items = state.items.filter(
          i => i.id !== action.payload
        );
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    }
  }
});

// Export actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;