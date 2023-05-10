import { useCallback, useContext } from "react";
import Button from "../ui/Button";
import { FormProps } from "../../data/Interfaces";
import { ButtonTypes } from "../../data/Enums";
import IsOpenContext from "../../context/IsOpenContext";
import { handleClearInput } from "../../helpers/helpers";

function Form({
    inputValue,
    setInputValue,
    setIsClicked,
    setFoods,
}: FormProps) {
    const [IsOpen] = useContext(IsOpenContext);

    const requestFood = useCallback(() => {
        setIsClicked(true);
    }, [setIsClicked]);

    return (
        <form
            className="w-full"
            onSubmit={(e) => {
                e.preventDefault();
                requestFood();
            }}
        >
            <label
                htmlFor="food"
                className="flex flex-col text-lg font-secondary sm:text-xl lg:text-2xl"
            >
                Food name:
                <input
                    tabIndex={IsOpen ? -1 : 0}
                    className="bg-primary-200 font-primary rounded-primary p-primary mt-2 text-sm transition-all hover:bg-primary-300 hover:shadow-custom hover:-translate-y-0.5 focus:bg-primary-300 sm:text-base lg:text-lg"
                    type="text"
                    id="food"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <div className="w-full flex justify-between mt-4">
                <Button
                    tabIndex={IsOpen ? -1 : 0}
                    callback={() => {
                        return;
                    }}
                    aria="Search food"
                    type={ButtonTypes.submit}
                    myStyle="basis-7/12 text-sm p-primary bg-tertiary-200 hover:bg-tertiary-300 hover:-translate-y-0.5 focus:bg-tertiary-300 sm:text-base"
                >
                    CHECK
                </Button>
                <Button
                    tabIndex={IsOpen ? -1 : 0}
                    callback={() => handleClearInput(setFoods, setInputValue)}
                    aria="Clear form"
                    type={ButtonTypes.reset}
                    myStyle="basis-4/12 text-sm p-primary bg-secondary-200 hover:bg-secondary-300 hover:-translate-y-0.5 focus:bg-secondary-300 sm:text-base"
                >
                    CLEAR
                </Button>
            </div>
        </form>
    );
}

export default Form;
