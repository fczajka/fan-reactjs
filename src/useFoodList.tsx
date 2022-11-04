import { useState, useEffect } from "react";
import { FoodsResponse, InitialFoodResponse } from "./Components/Types";

export type Status = "unloaded" | "loading" | "loaded";

type Cache = {
    [index: string]: FoodsResponse;
};

const localCache: Cache = {};

export default function useFoodList(food: string) {
    const [foodList, setFoodList] = useState([] as FoodsResponse);
    const [status, setStatus] = useState("unloaded" as Status);

    const API_KEY = process.env.REACT_APP_API_KEY as string;
    const API_URL = "https://api.nal.usda.gov";

    useEffect(() => {
        if (food.length < 3) {
            setFoodList([]);
        } else if (localCache[food]) {
            setFoodList(localCache[food]);
        } else {
            void requestFoodList();
        }

        async function requestFoodList() {
            setFoodList([]);
            setStatus("loading");

            const data = await fetch(
                `${API_URL}/fdc/v1/foods/search?query=${food}&dataType=Survey%20%28FNDDS%29&pageSize=10&pageNumber=1&sortBy=dataType.keyword&api_key=${API_KEY}`
            );

            const cleanedData = (await data.json()) as InitialFoodResponse;
            const foodsFromAPI = cleanedData.foods;

            localCache[food] = foodsFromAPI;
            setFoodList(localCache[food]);
            setStatus("loaded");
        }
    }, [food, API_KEY]);
    return [foodList, status];
}