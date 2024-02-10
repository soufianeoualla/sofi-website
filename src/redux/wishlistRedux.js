import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addWishlist: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
    },
    deleteWishlist:(state,action)=>{
        state.quantity -=1
        state.products = state.products.filter(item => item.id !== action.payload.id);

    }
  },
});

export const {addWishlist ,deleteWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer 