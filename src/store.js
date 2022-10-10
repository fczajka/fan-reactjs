import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./reducers/food";

const store = configureStore({
    reducer: {
        sum: foodReducer,
    },
});

export default store;
