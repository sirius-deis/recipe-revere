import { render, screen, fireEvent } from "@testing-library/react";
import CheckboxWithLabel from "./CheckboxWithLabel";

describe("CheckboxWithLabel component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <CheckboxWithLabel
        isChecked={false}
        labelText="Remember me"
        onCheckHandler={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render component with proper text", () => {
    render(
      <CheckboxWithLabel
        isChecked={false}
        labelText="Remember me"
        onCheckHandler={() => {}}
      />
    );
    expect(screen.getByText("Remember me")).toBeInTheDocument();
  });
  it("should call the function when a change event is fired", () => {
    const onCheckHandler = jest.fn();
    render(
      <CheckboxWithLabel
        isChecked={false}
        labelText="Remember me"
        onCheckHandler={onCheckHandler}
      />
    );
    const checkboxLabel = screen.getByLabelText("Remember me");
    fireEvent.click(checkboxLabel);
    expect(onCheckHandler).toHaveBeenCalled();
    expect(onCheckHandler).toHaveBeenCalledTimes(1);
    const checkbox = checkboxLabel?.nextElementSibling;
    fireEvent.click(checkbox!);
    expect(onCheckHandler).toHaveBeenCalledTimes(2);
  });
});
