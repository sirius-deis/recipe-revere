import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  size?: "lg" | "sm";
  bg?: "main" | "additional" | "icon";
  type?: "error" | "icon" | "sm-green";
}

const Button: FC<PropsWithChildren & ButtonProps> = ({
  children,
  type,
}): JSX.Element => {
  return (
    <button
      className={`${styles.btn} ${type ? `${styles[`btn-${type}`]}` : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
