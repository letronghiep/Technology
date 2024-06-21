import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  isOpen: false,
};
const useLoginModal = createSlice({
  name: "useLoginModal",
  initialState: INITIAL_STATE,
  reducers: {
    onOpenLogin: (state) => {
      state.isOpen = true;
    },
    onCloseLogin: (state) => {
      state.isOpen = false;
    },
  },
});
export const { onOpenLogin, onCloseLogin } = useLoginModal.actions;
export default useLoginModal.reducer;
