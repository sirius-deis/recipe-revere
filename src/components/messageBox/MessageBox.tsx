import { FC, PropsWithChildren } from "react";
import styles from "./MessageBox.module.css";
import Button from "../button/Button";

interface MessageBoxProps {
  closeMessageBox: () => void;
}

const MessageBox: FC<PropsWithChildren & MessageBoxProps> = ({
  children,
  closeMessageBox,
}) => {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles["button-container"]}>
        <Button size="sm" clickHandler={closeMessageBox}>
          &#10008;
        </Button>
      </div>
    </div>
  );
};

export default MessageBox;
