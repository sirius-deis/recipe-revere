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

const RangeSlider: FC<RangeSliderProps> = ({
  max,
  min,
  value,
  onMouseDown,
  onTouchStart,
  width,
  withLabel,
}) => {
  return (
    <div
      className={styles["range-slider"]}
      style={{ width: width ? `${width}px` : "100%" }}
    >
      <div
        className={styles["range-slider-bar"]}
        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
      >
        <span className={styles["range-slider-handle"]}></span>
      </div>
    </div>
  );
};

export default RangeSlider;
