import { FC, useId } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import styles from "./InputWithLabel.module.css";

interface InputWithLabelProps {
  labelText: string;
  inputPlaceholder: string;
  type?: string;
  icon: "email" | "password";
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  blurHandler?: () => void;
}

const InputWithLabel: FC<InputWithLabelProps> = ({
  labelText,
  type = "text",
  inputPlaceholder,
  icon,
  changeHandler,
  blurHandler,
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
      <label htmlFor={id}>{labelText} *</label>
      <div className={styles["input-group"]}>
        <input
          type={type}
          id={id}
          className={styles["form-control"]}
          placeholder={inputPlaceholder}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
        <div className={styles["input-group-append"]}>
          <span className={styles["input-group-icon"]}>{iconToInsert}</span>
        </div>
      </div>
    </div>
  );
};

export default InputWithLabel;
