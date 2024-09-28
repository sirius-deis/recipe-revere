import { render, screen } from "@testing-library/react";
import MessageGroup from "./MessageGroup";


describe("MessageGroup component", () => {
  it("should match snapshot", () => {
    const { container } = render(<MessageGroup messages={[]} />);
    expect(container).toMatchSnapshot();
  });
  it("should render messages", () => {
    const messages = [
      { _id: "1", message: "Hello", sender: { _id: '1' }, timestamp: 1626954246277, isRead: false },
      { _id: "2", message: "World", sender: { _id: '2' }, timestamp: 1626954260956, isRead: true },
    ];
    render(<MessageGroup messages={messages} />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("World")).toBeInTheDocument();
  });
});