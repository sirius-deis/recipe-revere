import { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "./RangleSlider.module.css";

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: (minVal: number, maxVal: number) => void;
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
  const minValueRef = useRef(min);
  const maxValueRef = useRef(max);
  const range = useRef(null);

  const getValueInPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercentage = getValueInPercent(minVal);
    const maxPercentage = getValueInPercent(maxValueRef.current);

    if (range.current) {
      (range.current as HTMLDivElement).style.left = `${minPercentage}%`;
      (range.current as HTMLDivElement).style.width = `${
        maxPercentage - minPercentage
      }%`;
    }
  }, [minVal, getValueInPercent]);

  useEffect(() => {
    const minPercentage = getValueInPercent(minValueRef.current);
    const maxPercentage = getValueInPercent(maxVal);

    if (range.current) {
      (range.current as HTMLDivElement).style.width = `${
        maxPercentage - minPercentage
      }%`;
    }
  }, [maxVal, getValueInPercent]);

  useEffect(() => {
    onChange(minVal, maxVal);
  }, [minVal, maxVal, onChange]);

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
