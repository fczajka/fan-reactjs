import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodInfo, InitialState } from "../Components/Types";

const initialState = {
    id: 0,
    name: "Sum",
    nutrients: [
        { name: "Name", value: "Name" },
        {
            name: "Energy",
            value: 0,
            unit: "kcal",
        },
        {
            name: "Carbohydrate",
            value: 0,
            unit: "g",
        },
        {
            name: "of which sugars",
            value: 0,
            unit: "g",
        },
        {
            name: "Protein",
            value: 0,
            unit: "g",
        },
        {
            name: "Fat",
            value: 0,
            unit: "g",
        },
        {
            name: "Fiber",
            value: 0,
            unit: "g",
        },
        {
            name: "Grams",
            value: 0,
            unit: "g",
        },
    ],
    foods: [],
} as InitialState;

export const food = createSlice({
    name: "Sum",
    initialState,
    reducers: {
        ADD_FOOD: (state, action: PayloadAction<FoodInfo>) => {
            state.nutrients[0].value += Math.round(
                action.payload.food[0].value
            );
            state.nutrients[1].value += Number(action.payload.food[1].value);
            state.nutrients[2].value += Number(action.payload.food[2].value);
            state.nutrients[3].value += Number(action.payload.food[3].value);
            state.nutrients[4].value += Number(action.payload.food[4].value);
            state.nutrients[5].value += Number(action.payload.food[5].value);
            state.nutrients[6].value += Number(action.payload.food[6].value);
            state.nutrients[7].value += Number(action.payload.food[7].value);
            state.id++;
            state.foods.push(action.payload);
        },
        DELETE_FOOD: (state, action: PayloadAction<FoodInfo>) => {
            state.nutrients[0].value -= Math.round(
                action.payload.food[0].value
            );
            state.nutrients[1].value -= Number(action.payload.food[1].value);
            state.nutrients[2].value -= Number(action.payload.food[2].value);
            state.nutrients[3].value -= Number(action.payload.food[3].value);
            state.nutrients[4].value -= Number(action.payload.food[4].value);
            state.nutrients[5].value -= Number(action.payload.food[5].value);
            state.nutrients[6].value -= Number(action.payload.food[6].value);
            state.nutrients[7].value -= Number(action.payload.food[7].value);
            state.foods.splice(
                state.foods.findIndex((food) => food.id === action.payload.id),
                1
            );
        },
    },
});

export const { ADD_FOOD, DELETE_FOOD } = food.actions;
export default food.reducer;
