import { FC, useRef, useState } from "react";
import styles from "./RangleSlider.module.css";

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: (value: number) => void;
  width: number;
  withLabel: boolean;
}

const RangeSlider: FC<RangeSliderProps> = ({
  max,
  min,
  onChange,
  width,
  withLabel,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const range = useRef(null);
  return (
    <div
      className={styles["range-slider"]}
      style={{ width: width ? `${width}px` : "100%" }}
    >
      <input
        type="range"
        className={`${styles.thumbnail} ${styles["thumbnail--left"]}`}
        min={min}
        max={max}
        value={minVal}
      />
      <input
        type="range"
        className={`${styles.thumbnail} ${styles["thumbnail--right"]}`}
        min={min}
        max={max}
        value={maxVal}
      />
      <div className={styles.slider}>
        <div className={styles["slider-track"]} />
        <div ref={range} className={styles["slider-range"]} />
        {withLabel && (
          <>
            <div className={styles["slider-value"]}>{minVal}</div>
            <div className={styles["slider-value"]}>{maxVal}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default RangeSlider;
