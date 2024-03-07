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
});
