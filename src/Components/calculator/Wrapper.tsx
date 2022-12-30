import { FaRegTimesCircle } from "react-icons/fa";
import Calculator from "./Calculator";

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<boolean>;
};

function Wrapper({ isOpen, setIsOpen }: Props) {
    return (
        <div className="w-full">
            <div
                className={`fixed top-0 w-full h-screen text-right z-20 transition-all ease-out duration-700 delay-300 bg-neutral-900 opacity-70 ${
                    isOpen ? "left-0" : "-left-full"
                }`}
            >
                <button
                    className="mt-8 mr-4 text-3xl text-yellow-50 sm:mr-12 sm:text-4xl lg:mr-16"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Close calculator"
                >
                    <FaRegTimesCircle />
                </button>
            </div>
            <Calculator isOpen={isOpen} />
        </div>
    );
}

export default Wrapper;
