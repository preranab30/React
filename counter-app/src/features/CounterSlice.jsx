import { createSlice } from '@reduxjs/toolkit';

// Step 1: Initial state
const initialState = {
  value: 0,
};

// Step 2: Create slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    reset: (state) => {
      state.value = 0;
    }
  }
});

// Step 3: Export actions
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// Step 4: Export reducer
export default counterSlice.reducer;