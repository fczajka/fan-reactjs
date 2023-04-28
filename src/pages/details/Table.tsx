import { TableProps } from "../../data/Types";

function Table({ inputValue, foodInfo }: TableProps) {
    return (
        <table className="w-full font-roboto">
            <thead className="text-base bg-blue-100 lg:text-lg">
                <tr>
                    <th className="text-left p-2 rounded-tl-lg">Name</th>
                    <th className="text-right p-2">Amount per {inputValue}g</th>
                    <th className="text-right p-2 rounded-tr-lg">Unit</th>
                </tr>
            </thead>
            <tbody className="text-sm lg:text-base">
                {foodInfo.food.map((food) =>
                    food.name === "Name" ? (
                        ""
                    ) : food.name === "Grams" ? (
                        ""
                    ) : food.name === "Fiber" ? (
                        <tr key={food.name} className="even:bg-blue-100">
                            <td className="text-left p-2 rounded-bl-lg">
                                {food.name}
                            </td>
                            <td className="text-right p-2">{food.value}</td>
                            <td className="text-right p-2 rounded-br-lg">
                                {food.unit}
                            </td>
                        </tr>
                    ) : (
                        <tr key={food.name} className="even:bg-blue-100">
                            <td className="text-left p-2">{food.name}</td>
                            <td className="text-right p-2">{food.value}</td>
                            <td className="text-right p-2">{food.unit}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
}

export default Table;
