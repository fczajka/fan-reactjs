import { useState, useEffect, useRef } from "react";
import { FoodsResponse, InitialFoodResponse, Status } from "../data/Types";
import { validateInput } from "../helpers/helpers";

export default function useFoodList(food: string) {
    const [foodList, setFoodList] = useState([] as FoodsResponse);
    const [status, setStatus] = useState("unloaded" as Status);
    const [errorMessage, setErrorMessage] = useState("");
    const counter = useRef(0);

    const API_KEY = process.env.REACT_APP_API_KEY as string;
    const API_URL = "https://api.nal.usda.gov";

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
            const foodFromStorageCleaned = JSON.parse(
                foodFromStorage
            ) as FoodsResponse;
            if (foodFromStorageCleaned.length == 0) {
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
            console.log(cleanedData);
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
    }, [food, API_KEY, counter]);
    return [
        {
            food: foodList,
            status: status,
            counter: counter.current,
            errorMessage: errorMessage,
        },
    ];
}
