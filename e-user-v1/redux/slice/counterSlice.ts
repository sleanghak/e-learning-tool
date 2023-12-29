import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterStateInterface {
  value: number;
}

const initialState: CounterStateInterface = {
  value: 5,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      // It's okay to do this because immer makes it immutable under the hood
      state.value++;
    },
    amountAdded(state, actions: PayloadAction<number>) {
      state.value += actions.payload;
      console.log("---", actions.type);
    },
    // decrement

    // reset
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
