import { render, screen, fireEvent } from "@testing-library/react";
import InputWithLabel from "./InputWithLabel";

describe("InputWithLabel component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <InputWithLabel
        labelText="email"
        inputPlaceholder="Example@email.com"
        icon="email"
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render element with correct label and placeholder", () => {
    render(
      <InputWithLabel
        labelText="Email"
        inputPlaceholder="Example@email.com"
        icon="email"
      />
    );
    expect(screen.getByLabelText("Email *")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Example@email.com")
    ).toBeInTheDocument();
  });
});
