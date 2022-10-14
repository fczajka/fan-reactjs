import * as React from "react";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import Calculator from "./Calculator";

function WrapperCalculator() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full">
            <div
                className={`fixed top-0 right-0 w-calc-mobile h-screen text-right z-20 bg-gray-900 lg:w-calc-desktop ${
                    isOpen ? "block" : "hidden"
                } ${isOpen ? "opacity-70" : "opacity-0"}`}
            >
                <button
                    className="mt-8 mr-4 text-3xl text-green-50 sm:mr-12 sm:text-4xl lg:mr-16"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaRegTimesCircle />
                </button>
            </div>
            <Calculator open={isOpen} />
            <button
                className="fixed right-8 bottom-24 px-4 py-2 rounded-lg text-green-50 font-lato bg-green-800 z-10"
                onClick={() => setIsOpen(!isOpen)}
            >
                Open calculator
            </button>
        </div>
    );
}

export default WrapperCalculator;
