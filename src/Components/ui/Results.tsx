import * as React from "react";
import Result from "./Result";
import { FoodsResponse } from "../../data/Types";

type Props = {
    foods: FoodsResponse;
};

function Results({ foods }: Props) {
    return (
        <ul className="mt-4 mb-20">
            {foods.map((food) => (
                <Result key={food.fdcId} food={food} />
            ))}
        </ul>
    );
}

export default Results;
