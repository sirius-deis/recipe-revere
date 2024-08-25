import { FC, useId } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import styles from "./InputWithLabel.module.css";

interface InputWithLabelProps {
  labelText?: string;
  icon?: "email" | "password";
  isValid?: boolean;
  [x: string]: any;
}

const InputWithLabel: FC<InputWithLabelProps> = ({
  labelText,
  icon,
  isValid = false,
  ...rest
}) => {
  const id = useId();
  let iconToInsert;
  switch (icon) {
    case "email":
      iconToInsert = <FaEnvelope />;
      break;
    case "password":
      iconToInsert = <FaLock />;
      break;
  }
  return (
    <div className={styles.container}>
      {labelText && <label htmlFor={id}>{labelText} *</label>}
      <div
        className={`${styles["input-group"]}${
          isValid ? "" : ` ${styles.error}`
        }`}
      >
        <input id={id} className={styles["form-control"]} {...rest} />
        {icon && <div className={styles["input-group-append"]}>
          <span className={styles["input-group-icon"]}>{iconToInsert}</span>
        </div>}
      </div>
    </div>
  );
};

export default InputWithLabel;
