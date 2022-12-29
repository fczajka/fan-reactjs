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

function DetailsButtons({
    foodInfo,
    setShowNotification,
    setNotificationMessage,
    name,
    showNotification,
}: Props) {
    return (
        <div className="w-full flex mt-4 text-green-50 text-sm mb-16 lg:text-base">
            <button
                onClick={() => {
                    store.dispatch(ADD_FOOD(foodInfo));
                    setNotificationMessage(
                        `${name} has been added to the calculator`
                    );
                    setShowNotification(!showNotification);
                }}
                className="basis-3/4 h-16 flex justify-center items-center border-b-8 border-solid border-purple-900 rounded-lg mr-2 bg-purple-600 transition-all hover:border-b-0 hover:h-14 hover:mt-2"
                aria-label={`Add ${name} to calculator`}
            >
                Add to calculator{<BsCalculator />}
            </button>
            <Link
                to="/"
                className="basis-1/4 h-16 flex flex-col items-center justify-center border-b-8 border-solid border-green-900 rounded-lg ml-2 bg-green-600 transition-all hover:border-b-0 hover:h-14 hover:mt-2"
            >
                Go back{<RiArrowGoBackFill />}
            </Link>
        </div>
    );
}

export default DetailsButtons;
