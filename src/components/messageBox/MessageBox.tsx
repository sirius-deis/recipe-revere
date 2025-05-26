import { FC, PropsWithChildren } from "react";
import styles from "./MessageBox.module.css";
import Modal from "../modal/Modal";

interface MessageBoxProps {
  closeMessageBox: () => void;
  type: "error" | "info" | "success";
}

const MessageBox: FC<PropsWithChildren & MessageBoxProps> = ({
  children,
  closeMessageBox,
  type
}) => {
  return (
    <Modal onClose={closeMessageBox}>
      <div className={`${styles.message} ${styles[type]}`}>
        {children}
      </div>
    </Modal>
  );
};

export default MessageBox;
