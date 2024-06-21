import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE= {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        loginSuccess(state, action) {

        }


    }
})