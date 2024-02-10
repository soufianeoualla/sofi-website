import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProducts: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.quantity += 1;
      state.totalPrice += action.payload.price;
    },
    deleteProducts: (state, action) => {
      const deletedProduct = state.products.find(
        (item) => item.id === action.payload.id
      );
      state.totalPrice -= deletedProduct.price * deletedProduct.quantity;
      state.quantity -= deletedProduct.quantity;
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increaseQuantity: (state, action) => {
      const productToUpdate = state.products.find(
        (item) => item.id === action.payload.id
      );
      productToUpdate.quantity += 1;
      state.quantity += 1;
      state.totalPrice += productToUpdate.price;
    },
    decreaseQuantity: (state, action) => {
      const productToUpdate = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (productToUpdate.quantity > 1) {
        productToUpdate.quantity -= 1;
        state.quantity -= 1;
        state.totalPrice -= productToUpdate.price;
      }
    },
  },
});

export const {
  addProducts,
  deleteProducts,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
