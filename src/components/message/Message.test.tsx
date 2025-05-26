import { render, screen } from "@testing-library/react";
import Message from "./Message";
import { types } from "../../types/types";

const timestamp = Date.now() - 10000000;

const dummy = {
  sender: {
    _id: "1",
    picture: 'https://example.com/profile.jpg',
  },
  message: 'This is a test message',
  timestamp,
  type: types.text,
  src: 'https://example.com/profile.jpg',
}

describe("Message", () => {
  test("matches snapshot", () => {
    const { container } = render(<Message {...dummy} />);
    expect(container).toMatchSnapshot();
  });
  test("renders a single message", () => {
    render(<Message {...dummy} />);

    const messageElement = screen.getByText("Hello, world!");
    expect(messageElement).toBeInTheDocument();
  });

  test("renders a message with a timestamp", () => {
    render(<Message {...dummy} />);
    const date = new Date(timestamp)
    const messageElement = screen.getByText(`${date.getHours()} ${date.getMinutes()}`);
    expect(messageElement).toBeInTheDocument();
  });
})