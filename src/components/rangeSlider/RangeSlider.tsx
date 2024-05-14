import { FC, useCallback, useRef, useState } from "react";
import styles from "./RangleSlider.module.css";

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: (value: number) => void;
  width?: number;
  withLabel?: boolean;
}

const RangeSlider: FC<RangeSliderProps> = ({
  max,
  min,
  onChange,
  width,
  withLabel = true,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const range = useRef(null);

  const getValueInPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  return (
    <div
      className={styles["range-slider"]}
      style={{ width: width ? `${width}px` : "100%" }}
    >
      <input
        type="range"
        className={`${styles.thumb} ${styles["thumb-left"]}`}
        min={min}
        max={max}
        defaultValue={minVal}
      />
      <input
        type="range"
        className={`${styles.thumb} ${styles["thumb-right"]}`}
        min={min}
        max={max}
        defaultValue={maxVal}
      />
      <div className={styles.slider}>
        <div className={styles["slider-track"]} />
        <div ref={range} className={styles["slider-range"]} />
        {withLabel && (
          <>
            <div
              className={`${styles["slider-value"]} ${styles["slider-value-left"]}`}
            >
              {minVal}
            </div>
            <div
              className={`${styles["slider-value"]} ${styles["slider-value-right"]}`}
            >
              {maxVal}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RangeSlider;
