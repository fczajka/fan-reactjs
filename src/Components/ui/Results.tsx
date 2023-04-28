import Result from "./Result";
import { ResultsProps } from "../../data/Types";

function Results({ foods }: ResultsProps) {
    return (
        <ul className="w-full font-roboto my-4">
            {foods.map((food) => (
                <Result key={food.fdcId} food={food} />
            ))}
        </ul>
    );
}

export default Results;
