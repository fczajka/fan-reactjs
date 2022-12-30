import React from "react";
import { Link } from "react-router-dom";
import { FoodResponse } from "../../data/Types";

type Props = {
    food: FoodResponse;
};

function Result({ food }: Props) {
    return (
        <li className="w-full my-2 bg-blue-100 rounded-lg text-base lg:text-lg">
            <Link
                className="w-full block px-4 py-2 rounded-lg transition-all hover:scale-105 hover:bg-blue-200 hover:shadow-md focus:scale-105 focus:bg-blue-200 focus:shadow-md"
                to="/details"
                state={food}
            >
                {food.description}
            </Link>
        </li>
    );
}

export default Result;
