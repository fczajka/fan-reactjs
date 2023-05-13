import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ResultProps } from "../../data/Interfaces";
import IsOpenContext from "../../context/IsOpenContext";

function Result({ food, delay }: ResultProps) {
    const [IsOpen] = useContext(IsOpenContext);
    return (
        <li
            className={`w-full my-2 text-sm animate-fade-in ${delay} sm:text-base motion-reduce:animate-none lg:text-lg`}
        >
            <Link
                className="w-full block p-primary rounded-primary transition-all bg-primary-200 hover:bg-primary-300 hover:shadow-custom hover:-translate-y-0.5 focus:bg-primary-300 focus:shadow-custom motion-reduce:transition-none"
                to="/details"
                state={food}
                tabIndex={IsOpen ? -1 : 0}
            >
                {food.description}
            </Link>
        </li>
    );
}

export default Result;
