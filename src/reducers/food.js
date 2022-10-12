import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    name: "Sum",
    nutrients: [
        { name: "Name", value: "Name" },
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
    foods: [],
};

export const food = createSlice({
    name: "Sum",
    initialState,
    reducers: {
        ADD_FOOD: (state, action) => {
            state.name = "Sum";
            state.nutrients[0].value = action.payload[0].value;
            state.nutrients[1].value += Number(action.payload[1].value);
            state.nutrients[2].value += Number(action.payload[2].value);
            state.nutrients[3].value += Number(action.payload[3].value);
            state.nutrients[4].value += Number(action.payload[4].value);
            state.nutrients[5].value += Number(action.payload[5].value);
            state.nutrients[6].value += Number(action.payload[6].value);
            state.foods.push(action.payload);
        },
        DELETE_FOOD: (state, action) => {
            state.name = "Sum";
            console.log(current(state.foods));
            state.nutrients[0].value = action.payload[0].value;
            state.nutrients[1].value -= Number(action.payload[1].value);
            state.nutrients[2].value -= Number(action.payload[2].value);
            state.nutrients[3].value -= Number(action.payload[3].value);
            state.nutrients[4].value -= Number(action.payload[4].value);
            state.nutrients[5].value -= Number(action.payload[5].value);
            state.nutrients[6].value -= Number(action.payload[6].value);
            state.foods.splice(state.foods.indexOf(action.payload));
            console.log(current(state.foods));
        },
    },
});

export const { ADD_FOOD, DELETE_FOOD } = food.actions;
export default food.reducer;
