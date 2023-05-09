import { Link } from "react-router-dom";
import { ADD_FOOD } from "../../store/slices/food";
import { useAppDispatch } from "../../store/hooks/hooks";
import { BsCalculator } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import Button from "../../Components/ui/Button";
import { ButtonsProps } from "../../data/Interfaces";
import { ButtonTypes } from "../../data/Enums";
import { useContext } from "react";
import IsOpenContext from "../../context/IsOpenContext";

function Buttons({
    foodInfo,
    setShowNotification,
    setNotificationMessage,
    name,
    showNotification,
}: ButtonsProps) {
    const [IsOpen] = useContext(IsOpenContext);
    const dispatch = useAppDispatch();

    function addToCalculator() {
        dispatch(ADD_FOOD(foodInfo));
        setNotificationMessage(`${name} has been added to the calculator`);
        setShowNotification(!showNotification);
    }

    return (
        <div className="flex justify-between mt-4">
            <Button
                tabIndex={IsOpen ? -1 : 0}
                callback={addToCalculator}
                aria={`Add ${name} to calculator`}
                type={ButtonTypes.submit}
                myStyle="basis-7/12 p-primary text-sm flex items-center justify-center bg-tertiary-200 hover:bg-tertiary-300 hover:shadow-custom hover:-translate-y-0.5 focus:bg-tertiary-300 sm:text-base"
            >
                <span className="mx-1">ADD TO CALCULATOR</span>
                <BsCalculator />
            </Button>
            <Link
                tabIndex={IsOpen ? -1 : 0}
                to="/"
                className="basis-4/12 p-primary text-sm flex items-center justify-center rounded-primary bg-secondary-200 transition-all hover:bg-secondary-300 hover:shadow-custom hover:-translate-y-0.5 focus:bg-secondary-300 sm:text-base"
            >
                <span className="mx-1">GO BACK</span>
                {<RiArrowGoBackFill />}
            </Link>
        </div>
    );
}

export default Buttons;
