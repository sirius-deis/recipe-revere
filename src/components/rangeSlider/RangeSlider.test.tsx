import { render, screen, fireEvent } from "@testing-library/react";
import RangeSlider from "./RangeSlider";

describe("RangeSlider component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <RangeSlider min={0} max={100} onChange={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render component with proper values", () => {
    render(<RangeSlider min={0} max={100} onChange={() => {}} />);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });
  it("should fire event", () => {
    const fn = jest.fn();
    render(<RangeSlider min={0} max={100} onChange={fn} />);
    fireEvent.change(screen.getByTestId("range1"), {
      target: { value: 30 },
    });
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith(30, 100);

    fireEvent.change(screen.getByTestId("range2"), {
      target: { value: 70 },
    });
    expect(screen.getByText("70")).toBeInTheDocument();
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenCalledWith(30, 70);
  });
});
