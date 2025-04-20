import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../reducers/authSlice"; // Adjust the path as needed

const store = configureStore({
    reducer: authSliceReducer,
})

export default store;