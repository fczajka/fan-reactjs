import { useLocation } from "react-router-dom";

function Details() {
    const location = useLocation();
    const data = location.state;

    const foodInfo = [
        {
            name: "Energy",
            value: data.foodNutrients[3].value,
            unit: "kcal",
            grey: true,
        },
        {
            name: "Carbohydrate",
            value: data.foodNutrients[2].value.toFixed(2),
            unit: "g",
            grey: false,
        },
        {
            name: "of which sugars",
            value: data.foodNutrients[8].value.toFixed(2),
            unit: "g",
            grey: true,
        },
        {
            name: "Protein",
            value: data.foodNutrients[0].value.toFixed(2),
            unit: "g",
            grey: false,
        },
        {
            name: "Fat",
            value: data.foodNutrients[1].value.toFixed(2),
            unit: "g",
            grey: true,
        },
        {
            name: "Energy",
            value: data.foodNutrients[9].value.toFixed(2),
            unit: "g",
            grey: false,
        },
    ];

    return (
        <div className="w-full flex flex-col items-center font-lato h-mobile bg-green-50 lg:h-desktop">
            <h2 className="font-bold pt-16 pb-4 text-xl">{data.description}</h2>
            <table>
                <thead className="text-lg">
                    <tr className="bg-green-600 text-green-50">
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-right">Amount per 100g</th>
                        <th className="p-2 text-right">Unit</th>
                    </tr>
                </thead>
                <tbody className="text-md">
                    {foodInfo.map((food) => (
                        <tr
                            className={food.grey ? "bg-gray-200" : ""}
                            key={food.name}
                        >
                            <th className="font-normal p-2 text-left">
                                {food.name}
                            </th>
                            <th className="font-normal p-2 text-right">
                                {food.value}
                            </th>
                            <th className="font-normal p-2 text-right">
                                {food.unit}
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Details;
