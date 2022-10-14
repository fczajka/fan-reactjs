import * as React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ADD_FOOD } from "../reducers/food";
import store, { RootState } from "../store";
import { BsCalculator } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { FoodInfo, FoodResponse } from "./Types";

function Details() {
    const location = useLocation();
    const data = location.state as FoodResponse;
    const storeData = useSelector((state) => state as RootState);

    const foodInfo = {
        id: storeData.sum.id,
        food: [
            { name: "Name", value: data.description },
            {
                name: "Energy",
                value: data.foodNutrients[3].value,
                unit: "kcal",
                grey: true,
            },
            {
                name: "Carbohydrate",
                value: data.foodNutrients[2].value.toFixed(2),
                unit: "g",
                grey: false,
            },
            {
                name: "of which sugars",
                value: data.foodNutrients[8].value.toFixed(2),
                unit: "g",
                grey: true,
            },
            {
                name: "Protein",
                value: data.foodNutrients[0].value.toFixed(2),
                unit: "g",
                grey: false,
            },
            {
                name: "Fat",
                value: data.foodNutrients[1].value.toFixed(2),
                unit: "g",
                grey: true,
            },
            {
                name: "Fiber",
                value: data.foodNutrients[9].value.toFixed(2),
                unit: "g",
                grey: false,
            },
        ],
    } as FoodInfo;

    return (
        <>
            <h2 className="font-bold pt-8 pb-4 text-lg lg:text-xl lg:pt-16">
                {data.description}
            </h2>
            <table className="w-full">
                <thead className="text-md lg:text-lg">
                    <tr className="bg-green-600 text-green-50">
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-right">Amount per 100g</th>
                        <th className="p-2 text-right">Unit</th>
                    </tr>
                </thead>
                <tbody className="text-sm lg:text-md">
                    {foodInfo.food.map((food) =>
                        food.name === "Name" ? (
                            ""
                        ) : (
                            <tr
                                className={food.grey ? "bg-gray-200" : ""}
                                key={food.name}
                            >
                                <th className="font-normal p-2 text-left">
                                    {food.name}
                                </th>
                                <th className="font-normal p-2 text-right">
                                    {food.value}
                                </th>
                                <th className="font-normal p-2 text-right">
                                    {food.unit}
                                </th>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            <div className="w-full flex mt-4 text-green-50 text-sm lg:text-md">
                <button
                    onClick={() => store.dispatch(ADD_FOOD(foodInfo))}
                    className="basis-3/4 flex justify-center items-center mr-2 p-2 lg:p-4 bg-purple-600 transition-all hover:bg-purple-700"
                >
                    Add to calculator{<BsCalculator />}
                </button>
                <Link
                    to="/"
                    className="basis-1/4 flex flex-col items-center ml-2 p-2 lg:p-4 bg-green-600 transition-all hover:bg-green-700"
                >
                    Go back{<RiArrowGoBackFill />}
                </Link>
            </div>
        </>
    );
}

export default Details;
