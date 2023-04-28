import * as React from "react";
import { useAppDispatch } from "../../store/hooks/hooks";
import { TiDelete } from "react-icons/ti";
import { DELETE_FOOD } from "../../store/slices/food";
import { TableBodyProps } from "../../data/Types";

function TableBody({ data }: TableBodyProps) {
    const dispatch = useAppDispatch();
    return (
        <tbody className="w-full h-calc-mobile flex flex-col overflow-y-auto overflow-x-hidden lg:h-calc-desktop">
            {data.foods.map((foodInfo) =>
                foodInfo.food.map((nutrients) =>
                    !nutrients.unit ? (
                        <tr key={nutrients.name} className="flex">
                            <td className="text-sm text-right basis-full px-2 py-2 bg-blue-100 lg:text-base">
                                {nutrients.value}
                            </td>
                        </tr>
                    ) : nutrients.name === "Grams" ? (
                        <React.Fragment key={nutrients.name}>
                            <tr className="flex">
                                <td className="text-sm text-left basis-3/5 px-2 py-0.5 lg:text-base">
                                    {nutrients.name}
                                </td>
                                <td className="text-sm text-right basis-2/5 px-2 py-0.5 lg:text-base">
                                    {`${nutrients.value} ${nutrients.unit}`}
                                </td>
                            </tr>
                            <tr className="flex justify-center">
                                <td className="basis-full flex p-0">
                                    <button
                                        onClick={() => {
                                            dispatch(DELETE_FOOD(foodInfo));
                                        }}
                                        className="flex text-sm items-center py-2 justify-center basis-full transition-all hover:scale-110 hover:bg-rose-200 hover:shadow-md focus:bg-rose-200 focus:shadow-md lg:text-base"
                                        aria-label="Delete food from calculator"
                                    >
                                        Delete {foodInfo.food[0].value}
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
    );
}

export default TableBody;
