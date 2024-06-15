import { createSlice } from "@reduxjs/toolkit";
const FILTER_INITIAL_STATE = {
  page: 1,
  limit: 10,
  sort: "ctime",
};
const filterSlice = createSlice({
  name: "filter",
  initialState: FILTER_INITIAL_STATE,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setPage, setLimit, setSearch, setSort, setOrder } =
  filterSlice.actions;

export default filterSlice.reducer;
