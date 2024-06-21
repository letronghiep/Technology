import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  isOpenRegister: false,
};
const useRegisterModal = createSlice({
  name: "useRegisterModal",
  initialState: INITIAL_STATE,
  reducers: {
    onOpenRegister: (state) => {
      state.isOpenRegister = true;
    },
    onCloseRegister: (state) => {
      state.isOpenRegister = false;
    },
  },
});
export const { onOpenRegister, onCloseRegister } = useRegisterModal.actions;
export default useRegisterModal.reducer;
