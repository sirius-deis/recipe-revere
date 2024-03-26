import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  size?: "lg" | "sm";
  bg?: "main" | "action" | "icon";
  inlineStyles?: {};
}

const Button: FC<PropsWithChildren & ButtonProps> = ({
  children,
  size,
  bg,
  inlineStyles,
}): JSX.Element => {
  return (
    <button
      className={`${styles.btn} ${
        size ? `${styles[`btn-${size}`]}` : "btn-lg"
      } ${bg ? `${styles[`btn-${bg}`]}` : "btn-main"}`}
      style={inlineStyles}
    >
      {children}
    </button>
  );
};

export default Button;
