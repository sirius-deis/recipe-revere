import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  size?: "lg" | "sm" | "md";
  bg?: "main" | "action" | "icon";
  rounded?: true | false;
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
  [x: string]: any;
}

const Button: FC<PropsWithChildren & ButtonProps> = ({
  children,
  size,
  bg,
  rounded,
  clickHandler = () => { },
  ...rest
}): JSX.Element => {
  return (
    <button
      className={`${styles.btn} ${size ? `${styles[`btn-${size}`]}` : "btn-lg"
        } ${bg ? `${styles[`btn-${bg}`]}` : "btn-main"}${rounded ? ` ${styles["btn-rounded"]}` : ""
        }`}
      onClick={clickHandler}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
