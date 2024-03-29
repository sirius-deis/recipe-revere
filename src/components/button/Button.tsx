import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  size?: "lg" | "sm" | "md";
  bg?: "main" | "action" | "icon";
  rounded?: true | false;
  inlineStyles?: {};
}

const Button: FC<PropsWithChildren & ButtonProps> = ({
  children,
  size,
  bg,
  inlineStyles,
  rounded,
}): JSX.Element => {
  return (
    <button
      className={`${styles.btn} ${
        size ? `${styles[`btn-${size}`]}` : "btn-lg"
      } ${bg ? `${styles[`btn-${bg}`]}` : "btn-main"} ${
        rounded ? `${styles["btn-rounded"]}` : ""
      } `}
      style={inlineStyles}
    >
      {children}
    </button>
  );
};

export default Button;
