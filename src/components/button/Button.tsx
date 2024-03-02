import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

const Button: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className={`${styles.btn} ${styles["btn-main"]}`}>
      {children}
    </button>
  );
};

export default Button;
