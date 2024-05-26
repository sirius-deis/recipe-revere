import { FC, useId } from "react";
import styles from "./CheckboxWithLabel.module.css";

interface CheckboxWithLabelProps {
  isChecked: boolean;
  labelText: string;
  [x: string]: any;
}

const CheckboxWithLabel: FC<CheckboxWithLabelProps> = ({
  isChecked,
  labelText,
  ...rest
}) => {
  const id = useId();
  return (
    <>
      <label className={styles.checkbox}>
        <label htmlFor={id} className={styles.container}>
          <input type="checkbox" id={id} checked={isChecked} {...rest} />
          <span className={styles.checkmark}></span>
        </label>
        {labelText}
      </label>
    </>
  );
};

export default CheckboxWithLabel;
