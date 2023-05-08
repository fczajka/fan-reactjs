import { ButtonProps } from "../../data/Interfaces";

function Button({ children, callback, aria, type, style }: ButtonProps) {
    return (
        <button
            className={`${style} rounded-primary transition-all hover:shadow-custom focus:shadow-custom`}
            onClick={() => callback()}
            aria-label={aria}
            type={type ? type : undefined}
        >
            {children}
        </button>
    );
}

export default Button;
