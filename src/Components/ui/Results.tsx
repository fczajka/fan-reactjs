import { ResultsProps } from "../../data/Interfaces";
import Result from "./Result";

function Results({ foods }: ResultsProps) {
    return (
        <ul className="w-full my-4 mb-20 lg:nb-0">
            {foods.map((food) => (
                <Result key={food.fdcId} food={food} />
            ))}
        </ul>
    );
}

export default Results;
