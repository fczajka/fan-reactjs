import { FoodsResponse } from "../../data/Types";
import { clearFocus } from "../../helpers/helpers";

type Props = {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
    setFoods: React.Dispatch<React.SetStateAction<FoodsResponse>>;
};

function Form({ inputValue, setInputValue, setIsClicked, setFoods }: Props) {
    function requestFood() {
        setIsClicked(true);
        setTimeout(clearFocus, 1000);
    }

    function clearInput() {
        setFoods([]);
        setInputValue("");
        localStorage.setItem("lastFoodName", "");
        localStorage.setItem("lastFoodList", "");
        setTimeout(clearFocus, 1000);
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
                    className="bg-blue-100 rounded-lg px-4 py-1 text-base font-roboto transition-all hover:scale-105 hover:bg-blue-200 hover:shadow-md focus:bg-blue-200 focus:shadow-md lg:text-lg"
                    type="text"
                    id="food"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <div className="w-full flex justify-between mt-4 font-roboto">
                <button
                    className="basis-7/12 px-4 py-2 bg-rose-300 rounded-lg text-sm transition-all hover:scale-105 hover:bg-rose-400 hover:shadow-md focus:bg-rose-400 focus:shadow-md lg:text-base"
                    type="submit"
                    aria-label="Search food"
                >
                    CHECK
                </button>
                <button
                    className="basis-4/12 px-4 py-2 bg-yellow-200 rounded-lg text-sm transition-all hover:scale-110 hover:bg-amber-200 hover:shadow-md focus:bg-amber-200 focus:shadow-md lg:text-base"
                    type="reset"
                    onClick={clearInput}
                >
                    CLEAR
                </button>
            </div>
        </form>
    );
}

export default Form;
