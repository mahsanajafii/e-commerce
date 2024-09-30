import { forwardRef, ChangeEventHandler, FocusEventHandler } from "react";

interface IInputProps {
  inputStyle: string;
  labelStyle: string;
  type?: string;
  placeholder?: string;
  label?: string | JSX.Element;
  id: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  name?: string;
  value?: string | number;
}
const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      inputStyle,
      labelStyle,
      type = "text",
      placeholder,
      label,
      id,
      value,
      onChange,
      onBlur,
      onFocus,
      name,
    },
    ref
  ) => {
    return (
      <>
        <label htmlFor={id} className={labelStyle}>
          {label}
        </label>
        <input
          className={inputStyle}
          type={type}
          placeholder={placeholder}
          id={id}
          value={value}
          ref={ref}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
        />
      </>
    );
  }
);

export default Input;
