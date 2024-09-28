import { render, screen } from "@testing-library/react";
import Message from "./Message";

const timestamp = Date.now() - 10000000;

describe("Message", () => {
  test("matches snapshot", () => {
    const { container } = render(<Message sender={{ _id: '2' }} message="Hello, world!" timestamp={timestamp} />);
    expect(container).toMatchSnapshot();
  });
  test("renders a single message", () => {
    render(<Message sender={{ _id: '2' }} message="Hello, world!" timestamp={timestamp} />);

    const messageElement = screen.getByText("Hello, world!");
    expect(messageElement).toBeInTheDocument();
  });

  test("renders a message with a timestamp", () => {
    render(<Message sender={{ _id: '2' }} message="Hello, world!" timestamp={timestamp} />);
    const date = new Date(timestamp)
    const messageElement = screen.getByText(`${date.getHours()} ${date.getMinutes()}`);
    expect(messageElement).toBeInTheDocument();
  });
})