import { createSlice, configureStore } from "@reduxjs/toolkit";


// const INITIAL_STATE = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  //   initialState: INITIAL_STATE,
  reducers: {
    increment: (state, action) => {
      console.log("klllllll");
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
  },
});

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

console.log(counterSlice.actions);
