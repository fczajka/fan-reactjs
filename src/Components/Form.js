import { useState, useRef } from "react";

function Form() {
    const [food, setFood] = useState([]);

    const input = useRef();

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = "https://api.nal.usda.gov";

    async function requestFood() {
        const data = await fetch(
            `${API_URL}/fdc/v1/foods/search?query=${input.current.value}&dataType=Survey%20%28FNDDS%29&pageSize=10&pageNumber=1&sortBy=dataType.keyword&api_key=${API_KEY}`
        );
        const cleanedData = await data.json();

        setFood(cleanedData.foods);
    }

    console.log(food);

    return (
        <div className="w-full flex justify-center pt-16">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestFood();
                }}
            >
                <label className="flex flex-col text-purple-900" htmlFor="food">
                    Food name:
                    <input
                        ref={input}
                        className="w-full bg-purple-200 rounded-lg p-1 px-4"
                        type="text"
                        id="food"
                    />
                </label>
                <button
                    className="w-full text-purple-50 bg-purple-700 rounded-lg p-2 mt-4 transition-all hover:bg-purple-800"
                    type="submit"
                >
                    CHECK
                </button>
            </form>
        </div>
    );
}

export default Form;
