import { render, screen } from "@testing-library/react";
import Message from "./message";

describe("Message", () => {
  test("matches snapshot", () => {
    const { container } = render(<Message username="John Doe" message="Hello, world!" />);
    expect(container).toMatchSnapshot();
  });
  test("renders a single message", () => {
    render(<Message username="John Doe" message="Hello, world!" />);

    const messageElement = screen.getByText("John Doe: Hello, world!");
    expect(messageElement).toBeInTheDocument();
  });

  test("renders a message with a timestamp", () => {
    render(<Message username="John Doe" message="Hello, world!" timestamp="2022-01-01 12:00:00" />);

    const messageElement = screen.getByText("John Doe: Hello, world! (2022-01-01 12:00:00)");
    expect(messageElement).toBeInTheDocument();
  });
})