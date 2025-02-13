import type { ButtonProps } from './interface';

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
      className={`${myStyle} rounded-full cursor-pointer`}
      onClick={() => callback()}
      aria-label={aria}
      type={type}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
}

export default Button;
