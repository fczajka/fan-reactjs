import { FoodInfo, InitialState } from "../../data/Types";

export function addNutrients(state: InitialState, action: FoodInfo) {
    state.nutrients[0].value = action.food[0].value;
    if (typeof state.nutrients[1].value === "number") {
        state.nutrients[1].value += Number(action.food[1].value);
    }
    if (typeof state.nutrients[2].value === "number") {
        state.nutrients[2].value += Number(action.food[2].value);
    }
    if (typeof state.nutrients[3].value === "number") {
        state.nutrients[3].value += Number(action.food[3].value);
    }
    if (typeof state.nutrients[4].value === "number") {
        state.nutrients[4].value += Number(action.food[4].value);
    }
    if (typeof state.nutrients[5].value === "number") {
        state.nutrients[5].value += Number(action.food[5].value);
    }
    if (typeof state.nutrients[6].value === "number") {
        state.nutrients[6].value += Number(action.food[6].value);
    }
    if (typeof state.nutrients[7].value === "number") {
        state.nutrients[7].value += Number(action.food[7].value);
    }
}

export function subtractNutrients(state: InitialState, action: FoodInfo) {
    state.nutrients[0].value = action.food[0].value;
    if (typeof state.nutrients[1].value === "number") {
        state.nutrients[1].value -= Number(action.food[1].value);
    }
    if (typeof state.nutrients[2].value === "number") {
        state.nutrients[2].value -= Number(action.food[2].value);
    }
    if (typeof state.nutrients[3].value === "number") {
        state.nutrients[3].value -= Number(action.food[3].value);
    }
    if (typeof state.nutrients[4].value === "number") {
        state.nutrients[4].value -= Number(action.food[4].value);
    }
    if (typeof state.nutrients[5].value === "number") {
        state.nutrients[5].value -= Number(action.food[5].value);
    }
    if (typeof state.nutrients[6].value === "number") {
        state.nutrients[6].value -= Number(action.food[6].value);
    }
    if (typeof state.nutrients[7].value === "number") {
        state.nutrients[7].value -= Number(action.food[7].value);
    }
}
