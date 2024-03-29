import { useReducedMotion } from "framer-motion";
import Result from "./Result";
import Loader from "./Loader";
import { ResultsProps } from "./interface";
import { displayLoadingCircle } from "./utils";
import { delays } from "./constants";

function Results({ foods, counter, isClicked }: ResultsProps) {
    const shouldReduceMotion = useReducedMotion();

    if (displayLoadingCircle({ counter, isClicked, shouldReduceMotion }))
        return <Loader />;

    return (
        <ul className="w-full my-4 mb-20 lg:mb-0">
            {foods.map((food, index) => (
                <Result key={food.fdcId} food={food} delay={delays[index]} />
            ))}
        </ul>
    );
}

export default Results;
