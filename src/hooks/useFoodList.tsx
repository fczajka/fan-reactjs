import { useState, useEffect, useRef } from "react";
import { FoodsResponse, Status } from "../data/Types";
import { validateInput } from "../helpers/helpers";
import { API_KEY, API_URL } from "../data/constants";
import { InitialFoodResponse } from "../data/Interfaces";

export default function useFoodList(food: string) {
    const [foodList, setFoodList] = useState<FoodsResponse>([]);
    const [status, setStatus] = useState<Status>("unloaded");
    const [errorMessage, setErrorMessage] = useState("");
    const counter = useRef(0);

    useEffect(() => {
        if (!validateInput(food)) {
            setStatus("error");
            setErrorMessage("Only letters and spaces are allowed");
            return;
        }
        if (food.length < 3) {
            setStatus("error");
            setErrorMessage("Enter at least 3 characters");
            setFoodList([]);
            return;
        }

        const foodFromStorage = localStorage.getItem(food);

        if (foodFromStorage) {
            setStatus("loading");
            const foodFromStorageCleaned = JSON.parse(
                foodFromStorage
            ) as FoodsResponse;
            if (foodFromStorageCleaned.length === 0) {
                setFoodList([]);
                setStatus("error");
                setErrorMessage("No food found");
                return;
            }
            setFoodList(foodFromStorageCleaned);
            setStatus("loaded");
        } else {
            void requestFoodList();
        }

        async function requestFoodList() {
            setFoodList([]);
            setStatus("loading");
            counter.current++;

            const data = await fetch(
                `${API_URL}/fdc/v1/foods/search?query=${food}&dataType=Survey%20%28FNDDS%29&pageSize=10&pageNumber=1&sortBy=dataType.keyword&api_key=${API_KEY}`
            );

            if (!data.ok) {
                setStatus("error");
                setErrorMessage("Something went wrong");
                counter.current--;
                return;
            }

            const cleanedData = (await data.json()) as InitialFoodResponse;
            const foodsFromAPI = cleanedData.foods;

            localStorage.setItem(food, JSON.stringify(foodsFromAPI));
            setFoodList(foodsFromAPI);

            if (foodsFromAPI.length === 0) {
                setStatus("error");
                setErrorMessage("No food found");
                counter.current--;
                return;
            }

            setStatus("loaded");
            counter.current--;
        }
    }, [food, counter]);
    return [
        {
            food: foodList,
            status: status,
            counter: counter.current,
            errorMessage: errorMessage,
        },
    ];
}
