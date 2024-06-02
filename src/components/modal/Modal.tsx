import { FC, PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Panel from "../panel/Panel";

interface ModalProps {
  actionBar?: React.ReactNode;
  onClose: () => void;
}

const Modal: FC<PropsWithChildren & ModalProps> = ({
  children,
  actionBar,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    });
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      });
    };
  }, []);

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
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
