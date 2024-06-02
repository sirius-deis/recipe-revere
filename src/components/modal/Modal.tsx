import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Panel from "../panel/Panel";

interface ModalProps {
  actionBar?: React.ReactNode;
}

const Modal: FC<PropsWithChildren & ModalProps> = ({ children, actionBar }) => {
  return createPortal(
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <Panel>
          {children}
          {actionBar}
        </Panel>
      </div>
    </>,
    document.querySelector("/modal-container")!
  );
};

export default Modal;
