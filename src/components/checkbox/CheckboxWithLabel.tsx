import { FC, useId } from "react";
import styles from "./CheckboxWithLabel.module.css";

interface CheckboxWithLabelProps {
  labelText: string;
  [x: string]: any;
}

const CheckboxWithLabel: FC<CheckboxWithLabelProps> = ({
  labelText,
  ...rest
}) => {
  const id = useId();
  return (
    <>
      <label className={styles.checkbox}>
        <label htmlFor={id} className={styles.container}>
          <input type="checkbox" id={id} {...rest} />
          <span className={styles.checkmark}></span>
        </label>
        {labelText}
      </label>
    </>
  );
};

export default CheckboxWithLabel;
