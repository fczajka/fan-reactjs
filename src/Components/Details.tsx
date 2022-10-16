import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ADD_FOOD } from "../reducers/food";
import store, { RootState } from "../store";
import { BsCalculator } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { FoodInfo, FoodResponse } from "./Types";
import Notification from "./Notification";

function Details() {
    const [showNotification, setShowNotification] = useState(false);
    const location = useLocation();
    const data = location.state as FoodResponse;
    const storeData = useSelector((state) => state as RootState);
    const [foodCounter, setFoodCounter] = useState(storeData.sum.foods.length);

    useEffect(() => {
        if (showNotification && foodCounter < storeData.sum.foods.length) {
            const timer = setTimeout(
                () => setShowNotification(!showNotification),
                3000
            );
            return () => clearTimeout(timer);
        }
        setFoodCounter(storeData.sum.foods.length);
    }, [showNotification, foodCounter, storeData.sum.foods.length]);

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
            <table className="w-full border-separate border-spacing-0">
                <thead className="text-md lg:text-lg">
                    <tr className="bg-green-600 text-green-50">
                        <th className="p-2 text-left font-normal rounded-tl-lg">
                            Name
                        </th>
                        <th className="p-2 text-right font-normal">
                            Amount per 100g
                        </th>
                        <th className="p-2 text-right font-normal rounded-tr-lg">
                            Unit
                        </th>
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
                    onClick={() => {
                        store.dispatch(ADD_FOOD(foodInfo));
                        setShowNotification(!showNotification);
                    }}
                    className="basis-3/4 h-16 flex justify-center items-center border-b-8 border-solid border-purple-900 rounded-bl-lg mr-2 bg-purple-600 transition-all hover:border-b-0 hover:h-14 hover:mt-2"
                >
                    Add to calculator{<BsCalculator />}
                </button>
                <Link
                    to="/"
                    className="basis-1/4 h-16 flex flex-col items-center justify-center border-b-8 border-solid border-green-900 rounded-br-lg ml-2 bg-green-600 transition-all hover:border-b-0 hover:h-14 hover:mt-2"
                >
                    Go back{<RiArrowGoBackFill />}
                </Link>
            </div>
            <Notification
                isVisible={showNotification}
                text={"Food has been added to the calculator"}
            />
        </>
    );
}

export default Details;
