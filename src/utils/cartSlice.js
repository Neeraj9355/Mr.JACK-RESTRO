import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    incrementItem: (state, action) => {
      const itemToIncrement = state.items.find(
        (item) => item.card.info.id === action.payload
      );
      if (itemToIncrement) {
        itemToIncrement.quantity++;
      }
    },
    decrementItem: (state, action) => {
      const itemToDecrement = state.items.find(
        (item) => item.card.info.id === action.payload
      );
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity--;
      } else if (itemToDecrement && itemToDecrement.quantity === 1) {
        // Optionally remove the item if quantity drops to 0
        state.items = state.items.filter(
          (item) => item.card.info.id !== action.payload
        );
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart,incrementItem,decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
