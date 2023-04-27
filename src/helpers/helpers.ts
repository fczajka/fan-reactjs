import { RootState } from "../store/store";
import { FoodInfo, FoodResponse } from "../data/Types";

export function foodInfoFactory(
    storeData: RootState,
    data: FoodResponse,
    inputValue: number
) {
    const foodInfo: FoodInfo = {
        id: storeData.sum.id,
        food: [
            { name: "Name", value: data.description },
            {
                name: "Energy",
                value: Number(
                    ((data.foodNutrients[3].value * inputValue) / 100).toFixed(
                        0
                    )
                ),
                unit: "kcal",
            },
            {
                name: "Carbohydrate",
                value: (
                    (data.foodNutrients[2].value * inputValue) /
                    100
                ).toFixed(2),
                unit: "g",
            },
            {
                name: "of which sugars",
                value: (
                    (data.foodNutrients[8].value * inputValue) /
                    100
                ).toFixed(2),
                unit: "g",
            },
            {
                name: "Protein",
                value: (
                    (data.foodNutrients[0].value * inputValue) /
                    100
                ).toFixed(2),
                unit: "g",
            },
            {
                name: "Fat",
                value: (
                    (data.foodNutrients[1].value * inputValue) /
                    100
                ).toFixed(2),
                unit: "g",
            },
            {
                name: "Fiber",
                value: (
                    (data.foodNutrients[9].value * inputValue) /
                    100
                ).toFixed(2),
                unit: "g",
            },
            {
                name: "Grams",
                value: inputValue.toFixed(2),
                unit: "g",
            },
        ],
    };
    return foodInfo;
}

export function validateInput(food: string) {
    return /^[A-Za-z\s]*$/.test(food);
}

export function clearFocus() {
    document.querySelectorAll("button").forEach((button) => {
        button.blur();
    });
}
