import cn from "classnames";

import style from "./Input.module.css";

type InputProps = {
  withBorder?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  withBorder = false,
  fullWidth = false,
  placeholder,
  value,
  name,
  onChange,
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      name={name}
      onChange={onChange}
      value={value}
      className={cn(
        style.input,
        { [style.withBorder]: withBorder },
        { [style.fullWidth]: fullWidth }
      )}
    />
  );
}

export default Input;
