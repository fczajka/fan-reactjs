import { FoodsResponse } from "../../data/Types";

type Props = {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
    setFoods: React.Dispatch<React.SetStateAction<FoodsResponse>>;
};

function Form({ inputValue, setInputValue, setIsClicked, setFoods }: Props) {
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
            onSubmit={(e) => {
                e.preventDefault();
                requestFood();
            }}
        >
            <label className="flex flex-col text-purple-900" htmlFor="food">
                Food name:
                <input
                    className="bg-purple-200 rounded-lg p-1 px-4"
                    type="text"
                    id="food"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <div className="flex justify-between">
                <input
                    className="w-8/12 cursor-pointer text-green-50 bg-green-700 border-b-8 border-solid border-green-900 rounded-lg p-2 mt-4 transition-all hover:border-0 hover:mt-6"
                    type="submit"
                    aria-label="Search food"
                    value="CHECK"
                />
                <input
                    className="w-3/12 cursor-pointer text-purple-50 bg-purple-700 border-b-8 border-solid border-purple-900 rounded-lg p-2 mt-4 transition-all hover:border-0 hover:mt-6"
                    type="reset"
                    value="CLEAR"
                    onClick={clearInput}
                />
            </div>
        </form>
    );
}

export default Form;
