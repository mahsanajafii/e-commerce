import {FC, ChangeEvent} from "react";

interface IInputProps {
  inputStyle: string;
  labelStyle: string;
  type?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  id: string;
  ref?:React.LegacyRef<HTMLInputElement>
  onChange?: (event:ChangeEvent<HTMLInputElement>) => void;
}

const Input:FC<IInputProps> = ({
  inputStyle,
  labelStyle,
  type = 'text',
  placeholder,
  value,
  label,
  id,
  ref,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id}
      className={labelStyle}>
        {label}
      </label>
      <input
        className={inputStyle}
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
}

export default Input;