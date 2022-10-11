import { useSelector } from "react-redux";
function Calculator() {
    const data = useSelector((state) => state);

    return (
        <div className="fixed left-0 top-0 w-64 h-screen bg-green-50">
            <table className="w-full overflow-hidden">
                <thead className="flex">
                    <tr className="flex basis-3/5 flex-col items-start">
                        <th className="text-base px-2 py-0.5 lg:text-lg">
                            Name
                        </th>
                        {data.sum.nutrients.map((nutrient) =>
                            nutrient.unit ? (
                                <th
                                    key={nutrient.name}
                                    className="text-sm px-2 py-0.5 lg:text-base"
                                >
                                    {nutrient.name}
                                </th>
                            ) : (
                                ""
                            )
                        )}
                    </tr>
                    <tr className="flex basis-2/5 flex-col items-end">
                        <th className="text-base px-2 py-0.5 lg:text-lg">
                            Sum
                        </th>
                        {data.sum.nutrients.map((nutrient) =>
                            nutrient.unit ? (
                                <th
                                    key={nutrient.name}
                                    className="text-sm px-2 py-0.5 lg:text-base"
                                >
                                    {nutrient.unit === "kcal"
                                        ? nutrient.value
                                        : nutrient.value.toFixed(2)}
                                </th>
                            ) : (
                                ""
                            )
                        )}
                    </tr>
                </thead>
                <tbody className="w-full flex flex-col h-calc-mobile overflow-y-auto lg:h-calc-desktop">
                    {data.sum.foods.map((food) =>
                        food.map((nutrients, index) =>
                            nutrients.unit ? (
                                <tr key={index} className="flex">
                                    <td className="text-sm text-left basis-3/5 px-2 py-0.5 lg:text-base">
                                        {nutrients.name}
                                    </td>
                                    <td className="text-sm text-right basis-2/5 px-2 py-0.5 lg:text-base">
                                        {nutrients.value}
                                    </td>
                                </tr>
                            ) : (
                                <tr key={index} className="flex">
                                    <td className="text-sm text-right basis-full px-2 py-0.5 lg:text-base">
                                        {nutrients.value}
                                    </td>
                                </tr>
                            )
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Calculator;
