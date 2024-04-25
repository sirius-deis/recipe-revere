import { FC } from "react";
import styles from "./ErrorBox.module.css";

interface ErrorBoxProps {
  message: string;
}

const ErrorBox: FC<ErrorBoxProps> = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorBox;
