import * as React from "react";
import { useState, useEffect } from "react";
import Logic from "../modal/Logic";
import Modal from "../modal/Modal";
import Header from "./Header";
import WrapperCalculator from "../calculator/Wrapper";

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
                <Logic>
                    <Modal showModal={showModal} setShowModal={setShowModal} />
                </Logic>
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
