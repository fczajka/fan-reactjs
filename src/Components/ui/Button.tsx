import { ReactElement } from "react";

type Props = {
    children: (string | ReactElement)[] | string | JSX.Element;
    functions: () => void;
    aria: string;
    type: "button" | "submit" | "reset" | undefined;
    style: string;
};

function Button({ children, functions, aria, type, style }: Props) {
    return (
        <button
            className={`${style} font-roboto rounded-lg transition-all hover:scale-110 hover:shadow-md focus:shadow-md`}
            onClick={() => functions()}
            aria-label={aria}
            type={type ? type : undefined}
        >
            {children}
        </button>
    );
}

export default Button;
