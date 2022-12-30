import * as React from "react";
import { Link } from "react-router-dom";
import { ADD_FOOD } from "../../slices/foodSlice";
import store from "../../store";
import { BsCalculator } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FoodInfo } from "../../data/Types";

type Props = {
    foodInfo: FoodInfo;
    setNotificationMessage: (value: React.SetStateAction<string>) => void;
    setShowNotification: (value: React.SetStateAction<boolean>) => void;
    name: string;
    showNotification: boolean;
};

function Buttons({
    foodInfo,
    setShowNotification,
    setNotificationMessage,
    name,
    showNotification,
}: Props) {
    return (
        <div className="font-roboto flex justify-between mt-4">
            <button
                className="basis-7/12 px-2 py-1 flex items-center justify-center text-sm rounded-lg bg-rose-300 transition-all hover:scale-105 hover:bg-rose-400 hover:shadow-md focus:bg-rose-400 focus:shadow-md lg:text-base"
                onClick={() => {
                    store.dispatch(ADD_FOOD(foodInfo));
                    setNotificationMessage(
                        `${name} has been added to the calculator`
                    );
                    setShowNotification(!showNotification);
                }}
                aria-label={`Add ${name} to calculator`}
            >
                ADD TO CALCULATOR{<BsCalculator />}
            </button>
            <Link
                to="/"
                className="basis-4/12 px-2 py-1 flex flex-col items-center justify-center text-sm rounded-lg bg-yellow-200 transition-all hover:scale-110 hover:bg-amber-200 hover:shadow-md focus:bg-amber-400 focus:shadow-md lg:text-base"
            >
                GO BACK{<RiArrowGoBackFill />}
            </Link>
        </div>
    );
}

export default Buttons;
