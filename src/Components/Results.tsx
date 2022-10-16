import * as React from "react";
import Result from "./Result";
import { FoodsResponse } from "./Types";

type Props = {
    foods: FoodsResponse;
};

function Results({ foods }: Props) {
    return (
        <ul className="h-full overflow-y-auto mt-2 mb-20 lg:mb-4">
            {foods.map((food) => (
                <Result key={food.fdcId} food={food} />
            ))}
        </ul>
    );
}

export default Results;
