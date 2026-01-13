import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  step: 1,
};

const counterSlice = createSlice({
  initialState,
  name: 'counter', // для decTools
  reducers: {
    increment: (state, action) => {
      const { count, step } = state;
      state.count = count + step;
    },
    decrement: (state, action) => {
      const { count, step } = state;
      state.count = count - step;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

const { reducer, actions } = counterSlice;

export const { increment, decrement, setStep } = actions;

export default reducer;
