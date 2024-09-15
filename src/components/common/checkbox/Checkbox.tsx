import React, {FC, ChangeEvent, useState} from "react";

interface ICheckboxProps {
  className?: string;
  labelStyle?: string;
  label?: string;
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox:React.FC<ICheckboxProps> = ({
  className,
  labelStyle,
  label,
  id,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const CheckboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <div>
      <label htmlFor={id}
      className={labelStyle}>
        {label}
      </label>
      <input
        className={className}
        type='checkbox'
        id={id}
        checked={isChecked}
        onChange={CheckboxHandler}
      />
    </div>
  );
}

export default Checkbox;

