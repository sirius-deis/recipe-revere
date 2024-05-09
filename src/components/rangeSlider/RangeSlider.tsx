import { FC } from "react";
import styles from "./RangleSlider.module.css";

interface RangeSliderProps {
  min: number;
  max: number;
  value: number;
  onMouseDown: (value: number) => void;
  onTouchStart: (value: number) => void;
  width: number;
  withLabel: boolean;
}

const RangeSlider: FC<RangeSliderProps> = () => {
  return (
    <div className={styles["range-slider"]}>
      <div></div>
    </div>
  );
};

export default RangeSlider;
