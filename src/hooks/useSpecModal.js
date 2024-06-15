import { createSlice } from "@reduxjs/toolkit";

const SPEC_MODAL_INITIAL_STATE = {
  isOpen: false,
};

const useSpecModal = createSlice({
  name: "specModal",
  initialState: SPEC_MODAL_INITIAL_STATE,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});
export const { onOpen, onClose } =
useSpecModal.actions;

export default useSpecModal.reducer;