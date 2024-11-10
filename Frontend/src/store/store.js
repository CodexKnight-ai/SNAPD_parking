import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice"; 
import occuSlice from "../store/occupySlice.js"

const store = configureStore({
    reducer: {
        auth: authReducer,
        occupy:occuSlice, 
    },
});

export default store;
