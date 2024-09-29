import { render, screen } from "@testing-library/react";
import TextMessage from "./TextMessage";

describe("TextMessage component", () => {
  it("should match snapshot", () => {
    const { container } = render(<TextMessage message="Hello, World!" />);
    expect(container).toMatchSnapshot();
  });

  it("should render the provided message", () => {
    render(<TextMessage message="Hello, World!" />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("should have a class name 'text-message'", () => {
    render(<TextMessage message="Hello, World!" />);
    expect(screen.getByText("Hello, World!")).toHaveClass("text-message");
  });
});