import { useContext, useState } from "react";
import Button from "../../Components/ui/Button";
import { ChangableValues, ChangeValues } from "../../data/Types";
import { GramsControlsProps } from "../../data/Interfaces";
import { ButtonTypes } from "../../data/Enums";
import IsOpenContext from "../../context/IsOpenContext";

function GramsControls({ inputValue, setGrams }: GramsControlsProps) {
    const [IsOpen] = useContext(IsOpenContext);
    const [changeValue, setChangeValue] = useState<ChangeValues>(1);
    const changableValues: ChangableValues = [1, 5, 10, 100];

    function decreaseGrams() {
        setGrams(inputValue - changeValue);
    }

    function increaseGrams() {
        setGrams(inputValue + changeValue);
    }

    return (
        <div>
            <h3 className="text-base text-center my-2 lg:text-lg">Grams:</h3>
            <div className="flex justify-center items-center">
                <Button
                    tabIndex={IsOpen ? -1 : 0}
                    callback={decreaseGrams}
                    aria="Decrease grams"
                    type={ButtonTypes.submit}
                    myStyle="w-10 h-10 bg-primary-200 text-xl hover:bg-primary-300 hover:-translate-y-0.5 focus:bg-primary-300 lg:w-12 lg:h-12 lg:text-2xl"
                >
                    -
                </Button>
                <div className="w-12 text-center">{inputValue}</div>
                <Button
                    tabIndex={IsOpen ? -1 : 0}
                    callback={increaseGrams}
                    aria="Increase grams"
                    type={ButtonTypes.submit}
                    myStyle="w-10 h-10 bg-primary-200 text-xl hover:bg-primary-300 hover:-translate-y-0.5 focus:bg-primary-300 lg:w-12 lg:h-12 lg:text-2xl"
                >
                    +
                </Button>
            </div>
            <h3 className="text-base text-center my-2 lg:text-lg">
                Set value that changes grams:
            </h3>
            <ul className="flex justify-between items-center">
                {changableValues.map((value) => (
                    <li key={value}>
                        <button
                            tabIndex={IsOpen ? -1 : 0}
                            className={`w-10 h-10 text-sm bg-primary-200 rounded-primary transition-all hover:bg-primary-300 hover:shadow-custom hover:-translate-y-0.5 focus:bg-primary-300 sm:text-base lg:w-12 lg:h-12 lg:text-lg ${
                                changeValue === value ? "bg-primary-300" : ""
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
