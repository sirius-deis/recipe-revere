import { FC } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  width: number;
  withLabel: boolean;
}

const RangeSlider: FC<RangeSliderProps> = () => {
  return <div></div>;
};

export default RangeSlider;
