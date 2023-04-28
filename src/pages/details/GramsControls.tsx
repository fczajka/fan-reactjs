import { useState } from "react";
import Button from "../../Components/ui/Button";
import {
    ChangableValues,
    ChangeValues,
    GramsControlsProps,
} from "../../data/Types";

function GramsControls({ inputValue, setGrams }: GramsControlsProps) {
    const [changeValue, setChangeValue] = useState<ChangeValues>(1);
    const changableValues: ChangableValues = [1, 5, 10, 100];

    function decreaseGrams() {
        setGrams(inputValue - changeValue);
    }

    function increaseGrams() {
        setGrams(inputValue + changeValue);
    }

    return (
        <div className="font-roboto">
            <h3 className="text-base text-center my-2 lg:text-lg">Grams:</h3>
            <div className="flex justify-center items-center">
                <Button
                    callback={decreaseGrams}
                    aria="Decrease grams"
                    type="button"
                    style="w-10 py-1 bg-blue-100 text-xl hover:bg-blue-200 focus:bg-blue-200 lg:text-2xl"
                >
                    -
                </Button>
                <div className="w-12 text-center">{inputValue}</div>
                <Button
                    callback={increaseGrams}
                    aria="Increase grams"
                    type="button"
                    style="w-10 py-1 bg-blue-100 text-xl hover:bg-blue-200 focus:bg-blue-200 lg:text-2xl"
                >
                    +
                </Button>
            </div>
            <h3 className="text-base text-center my-2 lg:text-lg">
                Set value that changes grams:
            </h3>
            <ul className="flex justify-between items-center">
                {changableValues.map((value) => (
                    <li key={value} className="w-12">
                        <button
                            className={`w-full py-2 bg-blue-100 rounded-lg text-base transition-all hover:scale-110 focus:scale-110 hover:bg-blue-200 hover:shadow-md focus:bg-blue-200 focus:shadow-md lg:text-lg ${
                                changeValue === value ? "bg-blue-200" : ""
                            }`}
                            onClick={() => {
                                setChangeValue(value);
                            }}
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
