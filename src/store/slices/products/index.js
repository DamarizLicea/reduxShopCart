import { createSlice } from "@reduxjs/toolkit";
import data from "../../../doc.json";
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const fetchProducts = () => async (dispatch) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      dispatch(setProducts(json));
    })
    .catch((err) => {
      dispatch(setProducts(data));
    });
};
