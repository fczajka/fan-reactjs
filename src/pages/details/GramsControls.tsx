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
        <div className="font-roboto">
            <h3 className="text-base text-center my-2 lg:text-lg">Grams:</h3>
            <div className="flex justify-center items-center">
                <button
                    className="w-10 py-1 bg-blue-100 rounded-lg text-xl transition-all hover:scale-110 hover:bg-blue-200 hover:shadow-md focus:bg-blue-200 focus:shadow-md lg:text-2xl"
                    onClick={() => setGrams(inputValue - changeValue)}
                >
                    -
                </button>
                <div className="w-12 text-center">{inputValue}</div>
                <button
                    className="w-10 py-1 bg-blue-100 rounded-lg text-xl transition-all hover:scale-110 hover:bg-blue-200 hover:shadow-md focus:bg-blue-200 focus:shadow-md lg:text-2xl"
                    onClick={() => setGrams(inputValue + changeValue)}
                >
                    +
                </button>
            </div>
            <h3 className="text-base text-center my-2 lg:text-lg">
                Set value that changes grams:
            </h3>
            <ul className="flex justify-between items-center">
                {changableValues.map((value) => (
                    <li key={value} className="w-12">
                        <button
                            className="w-full py-2 bg-blue-100 rounded-lg text-base transition-all hover:scale-110 hover:bg-blue-200 hover:shadow-md focus:bg-blue-200 focus:shadow-md lg:text-lg"
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
