import { FaRegTimesCircle } from "react-icons/fa";
import Calculator from "./Calculator";
import { useContext } from "react";
import IsOpenContext from "../../../../context/IsOpenContext";
import { ButtonTypes } from "../../../../data/Enums";
import Button from "../../Button";

function WrapperCalculator() {
    const [IsOpen, SetIsOpen] = useContext(IsOpenContext);

    return (
        <>
            <div
                className={`fixed top-0 w-full h-screen text-right z-20 transition-all ease-out duration-700 delay-300 bg-neutral-900 opacity-70 motion-reduce:transition-none ${
                    IsOpen ? "left-0" : "-left-full"
                }`}
            >
                <Button
                    tabIndex={IsOpen ? 0 : -1}
                    callback={() => SetIsOpen(false)}
                    aria="Close calculator"
                    type={ButtonTypes.button}
                    myStyle="mt-8 mr-4 text-3xl text-secondary-100 rounded-full sm:mr-12 sm:text-4xl lg:mr-16"
                >
                    <FaRegTimesCircle />
                </Button>
            </div>
            <Calculator />
        </>
    );
}

export default WrapperCalculator;
