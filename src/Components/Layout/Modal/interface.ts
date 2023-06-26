import { SetStateActionBoolean } from "data/Types";
import { ReactElement } from "react";

export interface ReactElementChildren {
    children: ReactElement;
}

export interface ModalProps {
    showModal: boolean;
    setShowModal: SetStateActionBoolean;
}
