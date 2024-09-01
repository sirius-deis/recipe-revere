import { render, screen } from "@testing-library/react";
import MessageGroup from "./messageGroup";


describe("MessageGroup component", () => {
  it("should match snapshot", () => {
    const { container } = render(<MessageGroup messages={[]} sender="sender" />);
    expect(container).toMatchSnapshot();
  });
  it("should render messages", () => {
    const messages = [
      { _id: "1", message: "Hello", sender: "sender1", timestamp: "1626954246277", isRead: false, isMine: true },
      { _id: "2", message: "World", sender: "sender2", timestamp: "1626954260956", isRead: true, isMine: false },
    ];
    render(<MessageGroup messages={messages} sender="sender" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("World")).toBeInTheDocument();
  });
});