import { ButtonProps } from "../../data/Types";

function Button({ children, callback, aria, type, style }: ButtonProps) {
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
