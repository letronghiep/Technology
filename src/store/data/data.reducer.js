import { createSlice } from "@reduxjs/toolkit";
const DATA_INITIAL_STATE = {
  products: [],
  categories: [],
  news: [],
};
const dataSlice = createSlice({
  name: "data",
  initialState: DATA_INITIAL_STATE,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setNews: (state, action) => {
      state.news = action.payload;
    },
  },
});

export const { setProducts, setCategories, setNews } = dataSlice.actions;

export default dataSlice.reducer;
