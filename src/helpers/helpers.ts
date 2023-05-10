import { RootState } from "../store/store";
import {
    FoodsResponse,
    SetStateActionBoolean,
    SetStateActionFoodsResponse,
    SetStateActionString,
    APIDataFood,
    SetStateActionNumber,
} from "../data/Types";
import { FoodInfo, FoodResponse } from "../data/Interfaces";
import { MutableRefObject } from "react";

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

export function isLengthZero(foods: FoodsResponse) {
    if (foods.length === 0) {
        return true;
    }
    return false;
}

export function handleLastFood(
    lastFoodName: string,
    lastFoodList: string,
    setInputValue: SetStateActionString,
    setFoods: SetStateActionFoodsResponse
) {
    const lastFoodListCleaned = JSON.parse(lastFoodList) as FoodsResponse;
    if (lastFoodListCleaned.length === 0) {
        setInputValue(lastFoodName);
        return;
    }
    setInputValue(lastFoodName);
    setFoods(lastFoodListCleaned);
}

export function handleCachedData(
    setInputValue: SetStateActionString,
    setFoods: SetStateActionFoodsResponse
) {
    const lastFoodName = localStorage.getItem("lastFoodName");
    const lastFoodList = localStorage.getItem("lastFoodList");
    if (lastFoodName && lastFoodList) {
        handleLastFood(lastFoodName, lastFoodList, setInputValue, setFoods);
    }
}
export function handleSetFoods(inputValue: string, food: APIDataFood) {
    localStorage.setItem("lastFoodName", inputValue);
    localStorage.setItem("lastFoodList", JSON.stringify(food));
}

export function handleError(
    errorMessage: string,
    setErrorMessage: SetStateActionString,
    setShowNotification: SetStateActionBoolean,
    setIsClicked: SetStateActionBoolean
) {
    setErrorMessage(errorMessage);
    setShowNotification(true);
    setIsClicked(false);
    return;
}

export function handleLoaded(
    food: APIDataFood,
    setIsClicked: SetStateActionBoolean,
    setFoods: SetStateActionFoodsResponse
) {
    setFoods(food);
    setIsClicked(false);
}

export function handleShowNotification(
    setShowNotification: SetStateActionBoolean,
    showNotification: boolean
) {
    const timer = setTimeout(
        () => setShowNotification(!showNotification),
        3000
    );
    return () => clearTimeout(timer);
}

export function handleValueOver5000(
    setInputValue: SetStateActionNumber,
    setNotificationMessage: SetStateActionString
) {
    setInputValue(5000);
    setNotificationMessage("Cannot set grams over 5000");
}
export function handleValueUnder0(
    setInputValue: SetStateActionNumber,
    setNotificationMessage: SetStateActionString
) {
    setInputValue(0);
    setNotificationMessage("Cannot set grams below 0");
}

export function handleModal(
    isModalClosed: string | null,
    setShowModal: SetStateActionBoolean
) {
    if (isModalClosed) {
        const isModalClosedCleaned = JSON.parse(isModalClosed) as boolean;
        if (isModalClosedCleaned === true) {
            setShowModal(false);
        }
    } else {
        return;
    }
}

export function handleClearInput(
    setFoods: SetStateActionFoodsResponse,
    setInputValue: SetStateActionString
) {
    setFoods([]);
    setInputValue("");
    localStorage.setItem("lastFoodName", "");
    localStorage.setItem("lastFoodList", "");
}

export function handleResize(vh: MutableRefObject<number>) {
    function resize() {
        vh.current = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh.current}px`);
    }

    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
}
