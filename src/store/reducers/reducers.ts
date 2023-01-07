import { FoodInfo, InitialState } from "../../data/Types";

export function addNutrients(state: InitialState, action: FoodInfo) {
    state.nutrients[0].value += Math.round(action.food[0].value);
    state.nutrients[1].value += Number(action.food[1].value);
    state.nutrients[2].value += Number(action.food[2].value);
    state.nutrients[3].value += Number(action.food[3].value);
    state.nutrients[4].value += Number(action.food[4].value);
    state.nutrients[5].value += Number(action.food[5].value);
    state.nutrients[6].value += Number(action.food[6].value);
    state.nutrients[7].value += Number(action.food[7].value);
}

export function subtractNutrients(state: InitialState, action: FoodInfo) {
    state.nutrients[0].value -= Math.round(action.food[0].value);
    state.nutrients[1].value -= Number(action.food[1].value);
    state.nutrients[2].value -= Number(action.food[2].value);
    state.nutrients[3].value -= Number(action.food[3].value);
    state.nutrients[4].value -= Number(action.food[4].value);
    state.nutrients[5].value -= Number(action.food[5].value);
    state.nutrients[6].value -= Number(action.food[6].value);
    state.nutrients[7].value -= Number(action.food[7].value);
}
