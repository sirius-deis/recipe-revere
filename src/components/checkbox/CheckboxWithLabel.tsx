import { FC, useId } from "react";
import styles from "./CheckboxWithLabel.module.css";

interface CheckboxWithLabelProps {
  isChecked: boolean;
  labelText: string;
  onCheckHandler: () => void;
}

const CheckboxWithLabel: FC<CheckboxWithLabelProps> = ({
  isChecked,
  labelText,
  onCheckHandler,
}) => {
  const id = useId();
  return (
    <div>
      <label className={styles.label}>
        {labelText}
        <label htmlFor={id} className={styles.container}>
          <input
            type="checkbox"
            id={id}
            checked={isChecked}
            onChange={onCheckHandler}
          />
          <span className={styles.checkmark}></span>
        </label>
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
