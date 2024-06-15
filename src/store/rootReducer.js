import { combineReducers } from "@reduxjs/toolkit";

import filterReducer from "./filter/filter.reducer";
import dataReducer from "./data/data.reducer";
import useSpecModalReducer from "../hooks/useSpecModal";

export const rootReducer = combineReducers({
  filter: filterReducer,
  data: dataReducer,
  useSpecModal: useSpecModalReducer
});
