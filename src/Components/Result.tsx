import React from "react";
import { Link } from "react-router-dom";
import { FoodResponse } from "./Types";

type Props = {
    food: FoodResponse;
};

function Result({ food }: Props) {
    return (
        <li className="w-full bg-purple-700 text-purple-50 rounded-lg transition-all duration-300 hover:bg-purple-800">
            <Link
                to="/details"
                state={food}
                className="block w-full rounded-lg my-2 p-4 cursor-pointer"
            >
                {food.description}
            </Link>
        </li>
    );
}

export default Result;
