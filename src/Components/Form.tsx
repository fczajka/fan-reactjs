import * as React from "react";
import { useState } from "react";
import { InitialFoodResponse, FoodsResponse } from "./Types";
import Results from "./Results";

function Form() {
    const [inputValue, setInputValue] = useState("");
    const [foods, setFoods] = useState([] as FoodsResponse);

    const API_KEY = process.env.REACT_APP_API_KEY as string;
    const API_URL = "https://api.nal.usda.gov";

    async function requestFood() {
        const data = await fetch(
            `${API_URL}/fdc/v1/foods/search?query=${inputValue}&dataType=Survey%20%28FNDDS%29&pageSize=10&pageNumber=1&sortBy=dataType.keyword&api_key=${API_KEY}`
        );
        const cleanedData = (await data.json()) as InitialFoodResponse;
        const foodsFromAPI = cleanedData.foods;

        setFoods(foodsFromAPI);
    }

    return (
        <div className="w-72 h-full flex flex-col pt-8 lg:pt-16 lg:w-96">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    void requestFood();
                }}
            >
                <label className="flex flex-col text-purple-900" htmlFor="food">
                    Food name:
                    <input
                        className="w-full bg-purple-200 rounded-lg p-1 px-4"
                        type="text"
                        id="food"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>
                <button
                    className="w-full text-purple-50 bg-purple-700 rounded-lg p-2 mt-4 transition-all hover:bg-purple-800"
                    type="submit"
                >
                    CHECK
                </button>
            </form>
            <Results foods={foods} />
        </div>
    );
}

export default Form;
