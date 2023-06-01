import { useReducedMotion } from "framer-motion";
import { ResultsProps } from "../../data/Interfaces";
import Loader from "./Loader";
import Result from "./Result";

function Results({ foods, counter, isClicked }: ResultsProps) {
    const shouldReduceMotion = useReducedMotion();
    const delays: string[] = [
        "[animation-delay:0.1s]",
        "[animation-delay:0.2s]",
        "[animation-delay:0.3s]",
        "[animation-delay:0.4s]",
        "[animation-delay:0.5s]",
        "[animation-delay:0.6s]",
        "[animation-delay:0.7s]",
        "[animation-delay:0.8s]",
        "[animation-delay:0.9s]",
        "[animation-delay:1.0s]",
    ];

    return counter !== 0 && isClicked && !shouldReduceMotion ? (
        <Loader />
    ) : (
        <ul className="w-full my-4 mb-20 lg:nb-0">
            {foods.map((food, index) => (
                <Result key={food.fdcId} food={food} delay={delays[index]} />
            ))}
        </ul>
    );
}

export default Results;
