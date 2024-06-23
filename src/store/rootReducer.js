import { combineReducers } from "@reduxjs/toolkit";

import filterReducer from "./filter/filter.reducer";
import dataReducer from "./data/data.reducer";
import useSpecModalReducer from "../hooks/useSpecModal";
import useLoginReducer from "../hooks/useLoginModal";
import useRegisterReducer from "../hooks/useRegisterModal";
import cartReducer from "../store/cart/cartSlice";
export const rootReducer = combineReducers({
  filter: filterReducer,
  data: dataReducer,
  useSpecModal: useSpecModalReducer,
  useLoginModal: useLoginReducer,
  useRegisterModal: useRegisterReducer,
  cart: cartReducer,
});
