import * as React from "react";
import { FaRegTimesCircle } from "react-icons/fa";

type Props = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ showModal, setShowModal }: Props) {
    return (
        <div className="absolute overflow-y-hidden w-full h-full flex justify-center items-center bg-neutral-900 bg-opacity-70 z-30">
            <div className="relative flex bg-yellow-50 p-4 rounded-lg max-w-xs lg:max-w-lg">
                <p className="basis-5/6">
                    Data provided by: U.S. Department of Agriculture,
                    Agricultural Research Service. FoodData Central, 2019. Link:
                    <a
                        className="ml-2 underline"
                        href="https://fdc.nal.usda.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        fdc.nal.usda.gov
                    </a>
                </p>
                <button
                    className="absolute top-4 right-4 text-3xl"
                    onClick={() => {
                        setShowModal(!showModal);
                        localStorage.setItem("modal", "true");
                    }}
                    aria-label="Close modal"
                >
                    <FaRegTimesCircle />
                </button>
            </div>
        </div>
    );
}

export default Modal;
