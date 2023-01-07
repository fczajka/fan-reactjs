import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodInfo } from "../../data/Types";
import { addNutrients, subtractNutrients } from "../reducers/reducers";
import { initialState } from "../initialState/initialState";

export const food = createSlice({
    name: "Sum",
    initialState,
    reducers: {
        ADD_FOOD: (state, action: PayloadAction<FoodInfo>) => {
            addNutrients(state, action.payload);
            state.id++;
            state.foods.push(action.payload);
        },
        DELETE_FOOD: (state, action: PayloadAction<FoodInfo>) => {
            subtractNutrients(state, action.payload);
            state.foods.splice(
                state.foods.findIndex((food) => food.id === action.payload.id),
                1
            );
        },
    },
});

export const { ADD_FOOD, DELETE_FOOD } = food.actions;
export default food.reducer;
