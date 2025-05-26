import { FC, PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Panel from "../panel/Panel";
import Button from "../button/Button";

interface ModalProps {
  onClose: () => void;
}

const Modal: FC<PropsWithChildren & ModalProps> = ({
  children,
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
        <Panel centered>
          {children}
        </Panel>
        <div className={styles["close-button-container"]}>
          <Button size="sm" bg="main" onClick={onClose}>
            &#10008;
          </Button>
        </div>
      </div>
    </>,
    document.getElementById("modal-container")!
  );
};

export default Modal;
