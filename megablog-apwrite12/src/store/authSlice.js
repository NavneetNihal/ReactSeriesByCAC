// Steps to configure ReduxToolkit.
// 3 Import createSlice.
import { createSlice } from '@reduxjs/toolkit';

// 4 Declare initial state.
const initialState = {
    status: false,
    userData: null,
}

// 5 create Slice.
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null;
        }
    }
});

// 7 
export const {login, logout} = authSlice.actions

// 6 Export authSlice's reducers in default. also you have to export each individual reducers, by each individual reducer what i mean is u have to export all the methods inside reducer which is actually called "actions".
export default authSlice.reducer;