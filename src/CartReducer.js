import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartValues: [],
};

const CartReducer = createSlice({
  name: "Cartreducer",
  initialState,
  reducers: {
    incrementcart: (state, action) => {
      const product = state.cartValues.find(
        (product) => product.id === action.payload.id
      );
      if (!product) {
        state.cartValues.push(action.payload);
      }
    },
    removecart: (state, action) => {
      state.cartValues.splice(state.cartValues.indexOf(action.payload));
    },
  },
});

export const { incrementcart } = CartReducer.actions;
export const { removecart } = CartReducer.actions;
export default CartReducer.reducer;
