import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartValues: [],
  wishlistValues:[],
  totalPrice: 0,
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
    addtowishlist: (state, action) => {
      const product = state.wishlistValues.find(
        (product) => product.id === action.payload.id
      );
      if (!product) {
        state.wishlistValues.push(action.payload);
      }
    },
    removefromwishlist: (state, action) => {
      state.wishlistValues.splice(state.wishlistValues.indexOf(action.payload));
    },
    
  },
});

export const { incrementcart } = CartReducer.actions;
export const { removecart } = CartReducer.actions;
export const { addtowishlist } = CartReducer.actions;
export const { removefromwishlist} = CartReducer.actions;
export default CartReducer.reducer;


 