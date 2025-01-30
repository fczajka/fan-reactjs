import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FoodInfo } from '@interfaces';
import { initialState } from '@storeInitialState';
import { addNutrients, resetValues, subtractNutrients } from '@storeReducers';

export const food = createSlice({
  name: 'Sum',
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
        1,
      );
    },
    DELETE_ALL_FOODS: (state) => {
      resetValues(state);
      state.foods = [];
    },
  },
});

export const { ADD_FOOD, DELETE_FOOD, DELETE_ALL_FOODS } = food.actions;
export default food.reducer;
