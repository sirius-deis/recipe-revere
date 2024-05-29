import { render, screen, fireEvent } from "@testing-library/react";
import InputWithLabel from "./InputWithLabel";

describe("InputWithLabel component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <InputWithLabel
        labelText="email"
        placeholder="Example@email.com"
        icon="email"
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render element with correct label and placeholder", () => {
    render(
      <InputWithLabel
        labelText="Email"
        placeholder="Example@email.com"
        icon="email"
      />
    );
    expect(screen.getByLabelText("Email *")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Example@email.com")
    ).toBeInTheDocument();
  });
  it("should render element without an error class", () => {
    render(
      <InputWithLabel
        labelText="Email"
        placeholder="Example@email.com"
        icon="email"
        isValid
      />
    );
    expect(screen.getByLabelText("Email *").parentElement).not.toHaveClass(
      "error"
    );
  });
  it("should render element with an error class", () => {
    render(
      <InputWithLabel
        labelText="Email"
        placeholder="Example@email.com"
        icon="email"
      />
    );
    expect(screen.getByLabelText("Email *").parentElement).toHaveClass("error");
  });
});
