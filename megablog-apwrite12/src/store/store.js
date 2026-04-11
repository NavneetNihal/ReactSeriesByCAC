// Steps to configure ReduxToolkit.

// 1 import configure store from reduxjs/toolkit.
import {
    configureStore
} from '@reduxjs/toolkit';
import authSlice from './authSlice';


// 2 Make a store.
const store = configureStore({
    reducer: {
        auth: authSlice,
    }
});

export default store;

// Now you have to make slice.