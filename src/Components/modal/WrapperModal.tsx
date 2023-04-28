import { useState, useEffect } from "react";
import Logic from "./Logic";
import Modal from "./Modal";

function WrapperModal() {
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
        <>
            {showModal ? (
                <Logic>
                    <Modal showModal={showModal} setShowModal={setShowModal} />
                </Logic>
            ) : (
                <></>
            )}
        </>
    );
}

export default WrapperModal;
