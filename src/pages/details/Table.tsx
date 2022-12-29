import { FoodInfo } from "../../data/Types";

type Props = {
    inputValue: number;
    foodInfo: FoodInfo;
    setGrams: (inputValue: number) => void;
};

function DetailsTable({ inputValue, foodInfo, setGrams }: Props) {
    return (
        <>
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
                        ) : (
                            <tr className="odd:bg-gray-200" key={food.name}>
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
                        )
                    )}
                </tbody>
            </table>
            <div className="w-full flex bg-gray-200">
                <label
                    htmlFor="grams"
                    className="basis-2/6 p-2 text-sm lg:text-base"
                >
                    Enter grams:
                </label>
                <input
                    className="basis-4/6 p-2 px-4 text-green-50 bg-green-600"
                    id="grams"
                    type="number"
                    value={inputValue}
                    onChange={(e) => setGrams(Number(e.target.value))}
                />
            </div>
        </>
    );
}

export default DetailsTable;
