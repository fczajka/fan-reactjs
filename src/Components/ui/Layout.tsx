import * as React from "react";
import { useState, useEffect } from "react";
import Modal from "../../Components/ui/Modal";
import Header from "./Header";
import WrapperCalculator from "../calculator/Wrapper";
import { FaRegTimesCircle } from "react-icons/fa";

type Props = {
    children: JSX.Element;
};

function Layout({ children }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const isModalClosed = localStorage.getItem("modal");

    useEffect(() => {
        if (isModalClosed) {
            const isModalClosedCleaned = JSON.parse(isModalClosed) as boolean;
            if (isModalClosedCleaned === true) {
                setShowModal(false);
            }
        } else {
            return;
        }
    }, [isModalClosed]);

    return (
        <div className="w-full flex flex-col items-center bg-yellow bg-center bg-cover">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            {showModal ? (
                <Modal>
                    <div className="absolute w-full h-full flex justify-center items-center bg-neutral-900 bg-opacity-70 z-30">
                        <div className="relative flex bg-yellow-50 p-4 rounded-lg max-w-xs lg:max-w-lg">
                            <p className="basis-5/6">
                                Data provided by: U.S. Department of
                                Agriculture, Agricultural Research Service.
                                FoodData Central, 2019. Link:
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
                </Modal>
            ) : (
                ""
            )}
            <div className="w-72 mt-4 min-h-mobile lg:w-96 lg:min-h-desktop">
                {children}
            </div>
            <WrapperCalculator isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Layout;
