import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let newItem = action.payload;
      state.data.push(newItem);
    },
    fillCart: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addItemToCart, fillCart } = cartSlice.actions;
export default cartSlice.reducer;
