import { ButtonTypes } from "data/Enums";
import { ButtonChildren } from "data/Types";

export interface ButtonProps {
    children: ButtonChildren;
    callback: () => void;
    aria: string;
    type: ButtonTypes;
    myStyle: string;
    tabIndex: number;
}

export interface NotificationProps {
    isVisible: boolean;
    text: string;
}

export interface JSXChildren {
    children: JSX.Element[];
}
