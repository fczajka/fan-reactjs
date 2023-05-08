import { Link } from "react-router-dom";
import { ADD_FOOD } from "../../store/slices/food";
import { useAppDispatch } from "../../store/hooks/hooks";
import { BsCalculator } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import Button from "../../Components/ui/Button";
import { ButtonsProps } from "../../data/Interfaces";
import { ButtonTypes } from "../../data/Enums";

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
    }

    return (
        <div className="flex justify-between mt-4">
            <Button
                callback={addToCalculator}
                aria={`Add ${name} to calculator`}
                type={ButtonTypes.submit}
                style="basis-7/12 py-1 flex items-center justify-center text-sm bg-tertiary-200 hover:bg-tertiary-300 hover:shadow-custom hover:-translate-y-0.5 focus:bg-tertiary-300 sm:text-base lg:p-button"
            >
                <span className="mx-1">ADD TO CALCULATOR</span>
                <BsCalculator />
            </Button>
            <Link
                to="/"
                className="basis-4/12 py-1 flex flex-col items-center justify-center text-sm rounded-primary bg-secondary-200 transition-all hover:bg-secondary-300 hover:shadow-custom hover:-translate-y-0.5 focus:bg-secondary-300 sm:text-base lg:p-button"
            >
                <span className="mx-1">GO BACK</span>
                {<RiArrowGoBackFill />}
            </Link>
        </div>
    );
}

export default Buttons;
