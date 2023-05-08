import { FaRegTimesCircle } from "react-icons/fa";
import Calculator from "./Calculator";
import Button from "../ui/Button";
import { ButtonTypes } from "../../data/Enums";
import { useCallback, useContext } from "react";
import IsOpenContext from "../../context/IsOpenContext";

function Wrapper() {
    const [IsOpen, SetIsOpen] = useContext(IsOpenContext);

    const handleClick = useCallback(
        () => SetIsOpen(!IsOpen),
        [IsOpen, SetIsOpen]
    );

    return (
        <>
            <div
                className={`fixed top-0 w-full h-screen text-right z-20 transition-all ease-out duration-700 delay-300 bg-neutral-900 opacity-70 ${
                    IsOpen ? "left-0" : "-left-full"
                }`}
            >
                <Button
                    callback={handleClick}
                    aria="Close calculator"
                    type={ButtonTypes.button}
                    style="mt-8 mr-4 text-3xl text-secondary-100 rounded-full sm:mr-12 sm:text-4xl lg:mr-16"
                >
                    <FaRegTimesCircle />
                </Button>
            </div>
            <Calculator />
        </>
    );
}

export default Wrapper;
