import { FC, useId } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import styles from "./InputWithLabel.module.css";

interface InputWithLabelProps {
  labelText: string;
  inputPlaceholder: string;
  type?: string;
  icon: "email" | "password";
}

const InputWithLabel: FC<InputWithLabelProps> = ({
  labelText,
  type = "text",
  inputPlaceholder,
  icon,
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
          <span className={styles["input-group-icon"]}>{iconToInsert}</span>
        </div>
      </div>
    </>
  );
};

export default InputWithLabel;
