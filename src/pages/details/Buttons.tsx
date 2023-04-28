import { Link } from "react-router-dom";
import { ADD_FOOD } from "../../store/slices/food";
import { useAppDispatch } from "../../store/hooks/hooks";
import { BsCalculator } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import { ButtonsProps } from "../../data/Types";
import { clearFocus } from "../../helpers/helpers";
import Button from "../../Components/ui/Button";

function Buttons({
    foodInfo,
    setShowNotification,
    setNotificationMessage,
    name,
    showNotification,
}: ButtonsProps) {
    const dispatch = useAppDispatch();

    function addToCalculator() {
        dispatch(ADD_FOOD(foodInfo));
        setNotificationMessage(`${name} has been added to the calculator`);
        setShowNotification(!showNotification);
        setTimeout(clearFocus, 0);
    }

    return (
        <div className="font-roboto flex justify-between mt-4">
            <Button
                callback={addToCalculator}
                aria={`Add ${name} to calculator`}
                type="button"
                style="basis-7/12 px-2 py-1 flex items-center justify-center text-sm bg-rose-300 hover:bg-rose-400 focus:bg-rose-400 lg:text-base"
            >
                ADD TO CALCULATOR
                <BsCalculator />
            </Button>
            <Link
                to="/"
                className="basis-4/12 px-2 py-1 flex flex-col items-center justify-center text-sm rounded-lg bg-yellow-200 transition-all  hover:scale-110 hover:bg-amber-200 hover:shadow-md focus:scale-110 focus:bg-amber-200 focus:shadow-md lg:text-base"
            >
                GO BACK{<RiArrowGoBackFill />}
            </Link>
        </div>
    );
}

export default Buttons;
