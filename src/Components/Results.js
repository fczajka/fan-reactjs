import Result from "./Result";

function Results({ foods }) {
    return (
        <ul className="h-full overflow-y-auto mt-2">
            {foods.map((food) => (
                <Result key={food.fdcId} food={food} />
            ))}
        </ul>
    );
}

export default Results;
