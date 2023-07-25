import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products";
import cartReducer from "./slices/cart";
const store = configureStore({
  reducer: {
    products,
    cart: cartReducer,
  },
});

export default store;
