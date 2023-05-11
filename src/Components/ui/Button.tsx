import { ButtonProps } from "../../data/Interfaces";

function Button({
    children,
    callback,
    aria,
    type,
    myStyle,
    tabIndex,
}: ButtonProps) {
    return (
        <button
            className={`${myStyle} rounded-primary transition-all hover:shadow-custom focus:shadow-custom motion-reduce:transition-none`}
            onClick={() => callback()}
            aria-label={aria}
            type={type ? type : undefined}
            tabIndex={tabIndex}
        >
            {children}
        </button>
    );
}

export default Button;
