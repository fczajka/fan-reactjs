import { FaRegTimesCircle } from "react-icons/fa";
import { ButtonTypes } from "data/Enums";
import Button from "Components/ui/Button";
import { ModalProps } from "./interface";
import { modalLink, modalLinkText, modalText } from "./constants";

function Modal({ showModal, setShowModal }: ModalProps) {
    function closeModal() {
        setShowModal(!showModal);
        localStorage.setItem("modal", "true");
    }

    return (
        <div className="fixed w-full h-full flex justify-center items-center bg-neutral-900 bg-opacity-70 z-30">
            <div className="relative flex bg-secondary-50 px-8 py-4 rounded-primary max-w-xs lg:max-w-lg">
                <p className="basis-5/6">
                    {modalText}
                    <a
                        className="ml-2 underline"
                        href={modalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {modalLinkText}
                    </a>
                </p>
                <Button
                    tabIndex={0}
                    callback={closeModal}
                    aria="Close modal"
                    type={ButtonTypes.button}
                    myStyle="absolute top-4 right-4 text-3xl hover:bg-tertiary-300"
                >
                    <FaRegTimesCircle />
                </Button>
            </div>
        </div>
    );
}

export default Modal;
