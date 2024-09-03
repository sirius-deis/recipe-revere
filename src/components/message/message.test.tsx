import { render, screen } from "@testing-library/react";
import Message from "./message";

const timestamp = "2022-01-01 12:00:00";

describe("Message", () => {
  test("matches snapshot", () => {
    const { container } = render(<Message sender={{_id: '2'}} message="Hello, world!" timestamp={timestamp}/>);
    expect(container).toMatchSnapshot();
  });
  test("renders a single message", () => {
    render(<Message sender={{_id: '2'}} message="Hello, world!" timestamp={timestamp} />);

    const messageElement = screen.getByText("John Doe: Hello, world!");
    expect(messageElement).toBeInTheDocument();
  });

  test("renders a message with a timestamp", () => {
    render(<Message sender={{_id: '2'}} message="Hello, world!" timestamp={timestamp} />);

    const messageElement = screen.getByText("John Doe: Hello, world! (2022-01-01 12:00:00)");
    expect(messageElement).toBeInTheDocument();
  });
})