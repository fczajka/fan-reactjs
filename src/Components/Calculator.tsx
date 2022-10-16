import * as React from "react";
import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";
import { DELETE_FOOD } from "../reducers/food";
import store, { RootState } from "../store";

type Props = {
    isOpen: boolean;
};

function Calculator({ isOpen }: Props) {
    const data = useSelector((state) => state as RootState);

    return (
        <div
            className={`fixed w-60 top-0 -left-60 z-20 h-screen transition-all ease-out duration-300 delay-100 bg-green-50 lg:w-80 border-r-2 border-green-900 ${
                isOpen ? "-left-0" : "-left-80"
            }`}
        >
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
                                        ? `${Math.abs(nutrient.value)} ${
                                              nutrient.unit
                                          }`
                                        : `${Math.abs(nutrient.value).toFixed(
                                              2
                                          )} ${nutrient.unit}`}
                                </th>
                            ) : (
                                ""
                            )
                        )}
                    </tr>
                </thead>
                <tbody className="w-full flex flex-col h-calc-mobile overflow-y-auto lg:h-calc-desktop">
                    {data.sum.foods.map((foodInfo) =>
                        foodInfo.food.map((nutrients) =>
                            !nutrients.unit ? (
                                <tr key={nutrients.name} className="flex">
                                    <td className="text-sm text-right basis-full px-2 py-2 bg-green-200 lg:text-base">
                                        {nutrients.value}
                                    </td>
                                </tr>
                            ) : nutrients.name === "Fiber" ? (
                                <React.Fragment key={nutrients.name}>
                                    <tr className="flex">
                                        <td className="text-sm text-left basis-3/5 px-2 py-0.5 lg:text-base">
                                            {nutrients.name}
                                        </td>
                                        <td className="text-sm text-right basis-2/5 px-2 py-0.5 lg:text-base">
                                            {`${nutrients.value} ${nutrients.unit}`}
                                        </td>
                                    </tr>
                                    <tr className="flex justify-center py-2">
                                        <td className="basis-full flex">
                                            <button
                                                onClick={() =>
                                                    store.dispatch(
                                                        DELETE_FOOD(foodInfo)
                                                    )
                                                }
                                                className="flex items-center justify-center basis-full"
                                            >
                                                Delete food
                                                <TiDelete />
                                            </button>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ) : (
                                <tr key={nutrients.name} className="flex">
                                    <td className="text-sm text-left basis-3/5 px-2 py-0.5 lg:text-base">
                                        {nutrients.name}
                                    </td>
                                    <td className="text-sm text-right basis-2/5 px-2 py-0.5 lg:text-base">
                                        {`${nutrients.value} ${nutrients.unit}`}
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
