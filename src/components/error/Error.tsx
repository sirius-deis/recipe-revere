import { FC, PropsWithChildren } from "react";
import styles from "./Error.module.css";
import Button from "../button/Button";

const Error: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles["button-container"]}>
        <Button size="sm">&#10008;</Button>
      </div>
    </div>
  );
};

export default Error;
