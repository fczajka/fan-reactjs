import { FoodInfo } from "../../data/Types";

type Props = {
    inputValue: number;
    foodInfo: FoodInfo;
    setGrams: (inputValue: number) => void;
};

function DetailsTable({ inputValue, foodInfo }: Props) {
    return (
        <table className="w-full border-separate border-spacing-0">
            <thead className="text-base lg:text-lg">
                <tr className="bg-green-600 text-green-50">
                    <th className="p-2 text-left font-normal rounded-tl-lg">
                        Name
                    </th>
                    <th className="p-2 text-right font-normal">
                        Amount per {inputValue}g
                    </th>
                    <th className="p-2 text-right font-normal rounded-tr-lg">
                        Unit
                    </th>
                </tr>
            </thead>
            <tbody className="text-sm lg:text-base">
                {foodInfo.food.map((food) =>
                    food.name === "Name" ? (
                        ""
                    ) : food.name === "Grams" ? (
                        ""
                    ) : food.name === "Fiber" ? (
                        <tr key={food.name} className="even:bg-gray-200">
                            <td className="p-2 text-left rounded-bl-lg">
                                {food.name}
                            </td>
                            <td className="p-2 text-right">{food.value}</td>
                            <td className="p-2 text-right rounded-br-lg">
                                {food.unit}
                            </td>
                        </tr>
                    ) : (
                        <tr key={food.name} className="even:bg-gray-200">
                            <td className="p-2 text-left">{food.name}</td>
                            <td className="p-2 text-right">{food.value}</td>
                            <td className="p-2 text-right">{food.unit}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
}

export default DetailsTable;
