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
                className="flex flex-col text-lg font-bree-serif lg:text-xl"
            >
                Food name:
                <input
                    className="bg-blue-100 rounded-lg px-4 py-1 text-base font-roboto transition-all hover:scale-105 hover:bg-blue-200 hover:shadow-md focus:bg-blue-200 focus:scale-105 focus:shadow-md lg:text-lg"
                    type="text"
                    id="food"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <div className="w-full flex justify-between mt-4 font-roboto">
                <Button
                    callback={() => {
                        return;
                    }}
                    aria="Search food"
                    type="submit"
                    style="basis-7/12 px-4 py-2 bg-rose-300 text-sm hover:bg-rose-400 focus:bg-rose-400 lg:text-base"
                >
                    CHECK
                </Button>
                <Button
                    callback={clearInput}
                    aria="Clear form"
                    type="reset"
                    style="basis-4/12 px-4 py-2 bg-yellow-200 text-sm hover:bg-amber-200 focus:bg-amber-200 lg:text-base"
                >
                    CLEAR
                </Button>
            </div>
        </form>
    );
}

export default Form;
