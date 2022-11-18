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
    const [inputValue, setInputValue] = useState(100);
    const location = useLocation();
    const data = location.state as FoodResponse;
    const storeData = useSelector((state) => state as RootState);
    const [foodCounter, setFoodCounter] = useState(storeData.sum.foods.length);
    const [notificationMessage, setNotificationMessage] = useState("");

    function setGrams(inputValue: number) {
        if (inputValue > 5000) {
            setInputValue(5000);
            setNotificationMessage("Cannot set grams over 5000");
            setShowNotification(!showNotification);
            return;
        }
        if (inputValue < 0.1) {
            setInputValue(0.1);
            setNotificationMessage("Cannot set grams below 0.1");
            setShowNotification(!showNotification);
            return;
        }
        setInputValue(inputValue);
    }

    useEffect(() => {
        if (showNotification && foodCounter < storeData.sum.foods.length) {
            const timer = setTimeout(
                () => setShowNotification(!showNotification),
                3000
            );
            return () => clearTimeout(timer);
        }
        setFoodCounter(storeData.sum.foods.length);
        if (showNotification) {
            const timer = setTimeout(
                () => setShowNotification(!showNotification),
                3000
            );
            return () => clearTimeout(timer);
        }
    }, [showNotification, foodCounter, storeData.sum.foods.length]);

    const foodInfo = {
        id: storeData.sum.id,
        food: [
            { name: "Name", value: data.description },
            {
                name: "Energy",
                value: (data.foodNutrients[3].value * inputValue) / 100,
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
    } as FoodInfo;

    return (
        <div className="basis-72 lg:basis-96">
            <h2 className="font-bold pt-4 pb-4 text-center text-lg lg:text-xl lg:pt-8">
                {data.description}
            </h2>
            <table className="w-full border-separate border-spacing-0">
                <thead className="text-base lg:text-lg">
                    <tr className="bg-green-600 text-green-50">
                        <th className="p-2 text-left font-normal rounded-tl-lg">
                            Name
                        </th>
                        <th className="p-2 text-right font-normal">
                            Amount per {inputValue}g
                        </th>
                        <th className="p-2 text-right font-normal rounded-tr-lg">
                            Unit
                        </th>
                    </tr>
                </thead>
                <tbody className="text-sm lg:text-base">
                    {foodInfo.food.map((food) =>
                        food.name === "Name" ? (
                            ""
                        ) : food.name === "Grams" ? (
                            ""
                        ) : (
                            <tr className="odd:bg-gray-200" key={food.name}>
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
            <div className="w-full flex bg-gray-200">
                <label
                    htmlFor="grams"
                    className="basis-2/6 p-2 text-sm lg:text-base"
                >
                    Enter grams:
                </label>
                <input
                    className="basis-4/6 p-2 px-4 text-green-50 bg-green-600"
                    id="grams"
                    type="number"
                    value={inputValue}
                    onChange={(e) => setGrams(Number(e.target.value))}
                />
            </div>
            <div className="w-full flex mt-4 text-green-50 text-sm mb-16 lg:text-base">
                <button
                    onClick={() => {
                        store.dispatch(ADD_FOOD(foodInfo));
                        setNotificationMessage(
                            `${data.description} has been added to the calculator`
                        );
                        setShowNotification(!showNotification);
                    }}
                    className="basis-3/4 h-16 flex justify-center items-center border-b-8 border-solid border-purple-900 rounded-bl-lg mr-2 bg-purple-600 transition-all hover:border-b-0 hover:h-14 hover:mt-2"
                    aria-label={`Add ${data.description} to calculator`}
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
                text={notificationMessage}
            />
        </div>
    );
}

export default Details;
