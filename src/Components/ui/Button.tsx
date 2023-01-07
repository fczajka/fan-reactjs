import { ButtonChildren } from "../../data/Types";

type Props = {
    children: ButtonChildren;
    callback: () => void;
    aria: string;
    type: "button" | "submit" | "reset" | undefined;
    style: string;
};

function Button({ children, callback, aria, type, style }: Props) {
    return (
        <button
            className={`${style} font-roboto rounded-lg transition-all hover:scale-110 hover:shadow-md focus:scale-110 focus:shadow-md`}
            onClick={() => callback()}
            aria-label={aria}
            type={type ? type : undefined}
        >
            {children}
        </button>
    );
}

export default Button;
