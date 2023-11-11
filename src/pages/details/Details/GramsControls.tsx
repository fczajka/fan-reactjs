import { useContext, useState } from "react";
import IsOpenContext from "context/IsOpenContext";
import { ButtonTypes } from "data/Enums";
import { ChangableValues, ChangeValues } from "data/Types";
import Button from "Components/ui/Button";
import { GramsControlsProps } from "./interface";

function GramsControls({ inputValue, setGrams }: GramsControlsProps) {
    const [IsOpen] = useContext(IsOpenContext);
    const [changeValue, setChangeValue] = useState<ChangeValues>(1);
    const changableValues: ChangableValues = [1, 5, 10, 100];

    return (
        <div>
            <h3 className="text-base text-center my-2 lg:text-lg">Grams:</h3>
            <div className="flex justify-center items-center">
                <Button
                    tabIndex={IsOpen ? -1 : 0}
                    callback={() => setGrams(inputValue - changeValue)}
                    aria="Decrease grams"
                    type={ButtonTypes.submit}
                    myStyle="w-10 h-10 bg-primary-200 text-xl hover:bg-primary-300 hover:-translate-y-0.5 focus:bg-primary-300 motion-reduce:transition-none lg:w-12 lg:h-12 lg:text-2xl"
                >
                    -
                </Button>
                <div className="w-12 text-center">{inputValue}</div>
                <Button
                    tabIndex={IsOpen ? -1 : 0}
                    callback={() => setGrams(inputValue + changeValue)}
                    aria="Increase grams"
                    type={ButtonTypes.submit}
                    myStyle="w-10 h-10 bg-primary-200 text-xl hover:bg-primary-300 hover:-translate-y-0.5 focus:bg-primary-300 motion-reduce:transition-none lg:w-12 lg:h-12 lg:text-2xl"
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
                        <Button
                            tabIndex={IsOpen ? -1 : 0}
                            callback={() => {
                                setChangeValue(value);
                            }}
                            aria={`Set value that changes grams to ${value}`}
                            type={ButtonTypes.submit}
                            myStyle={`w-10 h-10 text-sm bg-primary-200 rounded-primary transition-all hover:bg-primary-300 hover:shadow-custom hover:-translate-y-0.5 focus:bg-primary-300 motion-reduce:transition-none sm:text-base lg:w-12 lg:h-12 lg:text-lg ${
                                changeValue === value ? "bg-primary-300" : ""
                            }`}
                        >
                            {value}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GramsControls;
