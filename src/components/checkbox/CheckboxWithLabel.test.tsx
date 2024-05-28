import { render, screen, fireEvent } from "@testing-library/react";
import CheckboxWithLabel from "./CheckboxWithLabel";

describe("CheckboxWithLabel component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <CheckboxWithLabel
        checked={false}
        labelText="Remember me"
        onChange={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render component with proper text", () => {
    render(
      <CheckboxWithLabel
        checked={false}
        labelText="Remember me"
        onChange={() => {}}
      />
    );
    expect(screen.getByText("Remember me")).toBeInTheDocument();
  });
  it("should call the function when a change event is fired", () => {
    const onCheckHandler = jest.fn();
    render(
      <CheckboxWithLabel
        checked={false}
        labelText="Remember me"
        onChange={onCheckHandler}
      />
    );
    const checkboxLabel = screen.getByLabelText("Remember me");
    fireEvent.click(checkboxLabel);
    expect(onCheckHandler).toHaveBeenCalled();
    expect(onCheckHandler).toHaveBeenCalledTimes(1);
    const checkbox = checkboxLabel?.nextElementSibling as HTMLInputElement;
    fireEvent.click(checkbox!);
    expect(onCheckHandler).toHaveBeenCalledTimes(2);
  });
});
