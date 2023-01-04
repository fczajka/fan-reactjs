import * as React from "react";
import Result from "./Result";
import { FoodsResponse } from "../../data/Types";

type Props = {
    foods: FoodsResponse;
};

function Results({ foods }: Props) {
    return (
        <ul className="w-full font-roboto my-4">
            {foods.map((food) => (
                <Result key={food.fdcId} food={food} />
            ))}
        </ul>
    );
}

export default Results;
