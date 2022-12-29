import { useState } from "react";

type changeValues = 1 | 5 | 10 | 100;

type Props = {
    inputValue: number;
    setGrams: (inputValue: number) => void;
};

function GramsControls({ inputValue, setGrams }: Props) {
    const [changeValue, setChangeValue] = useState(1 as changeValues);
    const changableValues = [1, 5, 10, 100];

    return (
        <div className="flex flex-col w-full">
            <h3 className="text-center mt-4 text-base lg:text-lg">Grams:</h3>
            <div className="flex justify-center items-center">
                <button
                    className="w-12 px-4 py-2 m-2 font-bold rounded-md text-green-50 bg-green-600 transition-all hover:bg-green-700"
                    onClick={() => setGrams(inputValue - changeValue)}
                >
                    -
                </button>
                <div className="w-12 text-center text-sm lg:text-base">
                    {inputValue}
                </div>
                <button
                    className="w-12 px-4 py-2 m-2 font-bold rounded-md text-green-50 bg-green-600 transition-all hover:bg-green-700"
                    onClick={() => setGrams(inputValue + changeValue)}
                >
                    +
                </button>
            </div>
            <h3 className="text-center text-base lg:text-lg">
                Set value that changes grams:
            </h3>
            <ul className="flex justify-around items-center">
                {changableValues.map((value) => (
                    <li
                        key={value}
                        className="w-1/4 text-center text-sm text-green-50"
                    >
                        <button
                            className={`w-4/5 px-4 py-2 m-2 rounded-md transition-all hover:bg-green-700 lg:w-2/3 ${
                                changeValue === value
                                    ? "bg-green-700"
                                    : "bg-green-600"
                            }`}
                            onClick={() =>
                                setChangeValue(value as changeValues)
                            }
                        >
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GramsControls;
