import React from "react";
import { Link } from "react-router-dom";
import { ResultProps } from "../../data/Types";

function Result({ food }: ResultProps) {
    return (
        <li className="w-full my-2 text-sm sm:text-base lg:text-lg">
            <Link
                className="w-full block p-primary rounded-primary transition-all bg-primary-200 hover:bg-primary-300 hover:shadow-custom hover:-translate-y-0.5 focus:bg-primary-300 focus:shadow-custom"
                to="/details"
                state={food}
            >
                {food.description}
            </Link>
        </li>
    );
}

export default Result;
