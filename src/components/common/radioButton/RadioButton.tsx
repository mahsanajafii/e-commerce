import { useState } from "react";


interface IRadioButtonProps {
  name: string;
  options: {value: string; label: string} [];
  checked?: string;
  onChange?: (value: string) => void;
  // componentStyle?:string;
  // containerStyle?: string;
  // labelStyle?: string;
  // radioStyle?: string;
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  name,
  options,
  // radioStyle,
  // labelStyle,
  // containerStyle,
  // componentStyle,
  checked = '',
  onChange,
}) => {

  const [selectedOption, setSelectedOption] = useState(checked);

  const handleChange = (value: string) => {
    setSelectedOption(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex flex-col items-end">
      {options.map((option) => (
        <div className="m-5 flex gap-2" key = {option.value}>
          <label className="text-black" htmlFor = {option.value}>{option.label}</label>
          <input
          className="accent-[#DB2777]"
          type = 'radio'
          id= {option.value}
          name= {name}
          value = {option.value}
          checked = {selectedOption === option.value}
          onChange = {() => handleChange(option.value)} />
          
          </div>
      ))}
    </div>
  );
}

export default RadioButton;