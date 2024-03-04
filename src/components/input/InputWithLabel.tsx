import { FC, useId } from "react";
import styles from "./InputWithLabel.module.css";

interface InputWithLabelProps {
  labelText: string;
  type: string;
  inputPlaceholder: string;
}

const InputWithLabel: FC<InputWithLabelProps> = ({
  labelText,
  type,
  inputPlaceholder,
}) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{labelText} *</label>
      <div className={styles["input-group"]}>
        <input
          type={type}
          id={id}
          className={styles["form-control"]}
          placeholder={inputPlaceholder}
        />
        <div className={styles["input-group-append"]}>
          <span className={styles["input-group-icon"]}></span>
        </div>
      </div>
    </>
  );
};

export default InputWithLabel;
