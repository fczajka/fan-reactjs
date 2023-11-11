import { ButtonTypes } from "data/Enums";
import { ButtonChildren } from "data/Types";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
