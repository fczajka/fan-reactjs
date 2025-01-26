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
      className={`${myStyle} rounded-full transition-all cursor-pointer hover:shadow-custom focus:shadow-custom motion-reduce:transition-none`}
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
