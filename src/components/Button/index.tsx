import cn from "classnames";

import style from "./Button.module.css";

type ButtonProps = {
  isPrimary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

function Button({
  isPrimary = true,
  disabled,
  onClick,
  type = "button", //TODO: Add type prop
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        style.button,
        { [style.primary]: isPrimary },
        { [style.secondary]: !isPrimary }
      )}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
