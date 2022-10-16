import * as React from "react";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import Calculator from "./Calculator";

function WrapperCalculator() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full">
            <div
                className={`fixed top-0 left-0 w-screen h-screen text-right z-20 transition-all ease-out duration-700 delay-300 bg-gray-900 opacity-70 ${
                    isOpen ? "left-0" : "-left-full"
                }`}
            >
                <button
                    className="mt-8 mr-4 text-3xl text-green-50 sm:mr-12 sm:text-4xl lg:mr-16"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaRegTimesCircle />
                </button>
            </div>
            <Calculator isOpen={isOpen} />
            <button
                className="absolute right-8 bottom-24 px-4 py-2 rounded-lg text-green-50 border-b-8 border-solid border-green-900 font-lato bg-green-600 transition-all z-10 hover:border-b-0 hover:mt-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                Open calculator
            </button>
        </div>
    );
}

export default WrapperCalculator;
