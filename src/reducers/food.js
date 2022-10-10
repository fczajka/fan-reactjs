import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Sum",
    nutrients: [
        {
            name: "Energy",
            value: 0,
            unit: "kcal",
            grey: true,
        },
        {
            name: "Carbohydrate",
            value: 0,
            unit: "g",
            grey: false,
        },
        {
            name: "of which sugars",
            value: 0,
            unit: "g",
            grey: true,
        },
        {
            name: "Protein",
            value: 0,
            unit: "g",
            grey: false,
        },
        {
            name: "Fat",
            value: 0,
            unit: "g",
            grey: true,
        },
        {
            name: "Fiber",
            value: 0,
            unit: "g",
            grey: false,
        },
    ],
};

export const food = createSlice({
    name: "Sum",
    initialState,
    reducers: {
        CHANGE_FOOD: (state, action) => {
            state.name = "Sum";
            state.nutrients[0].value += action.payload[0].value;
            state.nutrients[1].value += action.payload[1].value;
            state.nutrients[2].value += action.payload[2].value;
            state.nutrients[3].value += action.payload[3].value;
            state.nutrients[4].value += action.payload[4].value;
            state.nutrients[5].value += action.payload[5].value;
        },
    },
});

export const { CHANGE_FOOD } = food.actions;
export default food.reducer;
