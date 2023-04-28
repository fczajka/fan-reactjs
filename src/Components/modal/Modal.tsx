import Button from "../ui/Button";
import { FaRegTimesCircle } from "react-icons/fa";
import { ModalProps } from "../../data/Types";

function Modal({ showModal, setShowModal }: ModalProps) {
    function closeModal() {
        setShowModal(!showModal);
        localStorage.setItem("modal", "true");
    }

    return (
        <div className="fixed w-full h-full flex justify-center items-center bg-neutral-900 bg-opacity-70 z-30">
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
                <Button
                    callback={closeModal}
                    aria="Close modal"
                    type="button"
                    style="absolute top-4 right-4 text-3xl"
                >
                    <FaRegTimesCircle />
                </Button>
            </div>
        </div>
    );
}

export default Modal;
