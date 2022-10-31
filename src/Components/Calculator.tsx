import * as React from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { DELETE_FOOD } from "../reducers/food";
import store from "../store";
import { RootState } from "../store";

type Props = {
    isOpen: boolean;
};

function Calculator({ isOpen }: Props) {
    const data = useSelector((state) => state as RootState);
    const vh = useRef(window.innerHeight * 0.01);

    useEffect(() => {
        function handleResize() {
            vh.current = window.innerHeight * 0.01;
            document.documentElement.style.setProperty(
                "--vh",
                `${vh.current}px`
            );
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <table
            className={`fixed w-60 top-0 z-20 h-screen overflow-hidden transition-all ease-out duration-300 delay-100 bg-green-50 border-r-2 border-green-900 lg:w-80 ${
                isOpen ? "-left-0" : "-left-80"
            }`}
        >
            <thead className="flex">
                <tr className="flex basis-3/5 flex-col items-start">
                    <th className="text-base px-2 py-0.5 lg:text-lg">Name</th>
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
                    <th className="text-base px-2 py-0.5 lg:text-lg">Sum</th>
                    {data.sum.nutrients.map((nutrient) =>
                        nutrient.unit ? (
                            <th
                                key={nutrient.name}
                                className="text-sm px-2 py-0.5 lg:text-base"
                            >
                                {nutrient.unit === "kcal"
                                    ? `${Math.abs(
                                          Math.round(nutrient.value)
                                      )} ${nutrient.unit}`
                                    : `${Math.abs(nutrient.value).toFixed(2)} ${
                                          nutrient.unit
                                      }`}
                            </th>
                        ) : (
                            ""
                        )
                    )}
                </tr>
            </thead>
            <tbody className="w-full h-calc-mobile flex flex-col overflow-y-auto lg:h-calc-desktop">
                {data.sum.foods.map((foodInfo) =>
                    foodInfo.food.map((nutrients) =>
                        !nutrients.unit ? (
                            <tr key={nutrients.name} className="flex">
                                <td className="text-sm text-right basis-full px-2 py-2 bg-green-200 lg:text-base">
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
                                                store.dispatch(
                                                    DELETE_FOOD(foodInfo)
                                                );
                                                console.log(foodInfo);
                                            }}
                                            className="flex text-sm items-center py-2 justify-center basis-full trasition-all duration-300 lg:text-base hover:bg-red-200"
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
        </table>
    );
}

export default Calculator;
