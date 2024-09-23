import { forwardRef, ChangeEventHandler, FocusEventHandler } from "react";

interface IInputProps {
  inputStyle: string;
  labelStyle: string;
  type?: string;
  placeholder?: string;
  label?: string |JSX.Element;
  id: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  name?: string;
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
      onChange,
      onBlur,
      onFocus,
      name,
    },
    ref
  ) => {
    return (
      <div> 
        <label htmlFor={id} className={labelStyle}>
          {label}
        </label>
        <input
          className={inputStyle}
          type={type}
          placeholder={placeholder}
          id={id}
          ref={ref}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
        />
      </div>
    );
  }
);

export default Input;
