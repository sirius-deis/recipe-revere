import { FC, PropsWithChildren } from "react";
import styles from "./MessageBox.module.css";
import Button from "../button/Button";
import Panel from "../panel/Panel";

interface MessageBoxProps {
  closeMessageBox: () => void;
}

const MessageBox: FC<PropsWithChildren & MessageBoxProps> = ({
  children,
  closeMessageBox,
}) => {
  return (
    <div className={styles.container}>
      <Panel direction="horizontal" centered>
        {children}
        <div className={styles["button-container"]}>
          <Button size="sm" onClick={closeMessageBox}>
            &#10008;
          </Button>
        </div>
      </Panel>
    </div>
  );
};

export default MessageBox;
