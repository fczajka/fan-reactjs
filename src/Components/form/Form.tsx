import { FormProps } from "../../data/Types";
import Button from "../ui/Button";

function Form({
    inputValue,
    setInputValue,
    setIsClicked,
    setFoods,
}: FormProps) {
    function requestFood() {
        setIsClicked(true);
    }

    function clearInput() {
        setFoods([]);
        setInputValue("");
        localStorage.setItem("lastFoodName", "");
        localStorage.setItem("lastFoodList", "");
    }

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
                    className="bg-primary-200 font-primary rounded-primary p-primary mt-2 text-sm transition-all hover:bg-primary-300 hover:shadow-custom hover:-translate-y-0.5 focus:bg-primary-300 sm:text-base lg:text-lg"
                    type="text"
                    id="food"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <div className="w-full flex justify-between mt-4">
                <Button
                    callback={() => {
                        return;
                    }}
                    aria="Search food"
                    type="submit"
                    style="basis-7/12 p-primary bg-tertiary-200 hover:bg-tertiary-300 hover:-translate-y-0.5 focus:bg-tertiary-300"
                >
                    CHECK
                </Button>
                <Button
                    callback={clearInput}
                    aria="Clear form"
                    type="reset"
                    style="basis-4/12 p-primary bg-secondary-200 hover:bg-secondary-300 hover:-translate-y-0.5 focus:bg-secondary-300"
                >
                    CLEAR
                </Button>
            </div>
        </form>
    );
}

export default Form;
