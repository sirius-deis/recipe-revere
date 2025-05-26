import { render, screen } from "@testing-library/react";
import MessageGroup from "./MessageGroup";
import { types } from "../../types/types";

const dummy = [
  { _id: "1", message: "Hello", sender: { _id: '1', picture: 'https://example.com/profile.jpg' }, timestamp: 1626954246277, isRead: false, src: 'https://example.com/image1.jpg', type: types.image },
  { _id: "2", message: "World", sender: { _id: '2', picture: 'https://example.com/profile.jpg' }, timestamp: 1626954260956, isRead: true, type: types.text },
]

describe("MessageGroup component", () => {
  it("should match snapshot", () => {
    const { container } = render(<MessageGroup messages={[]} />);
    expect(container).toMatchSnapshot();
  });
  it("should render messages", () => {
    render(<MessageGroup messages={dummy} />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("World")).toBeInTheDocument();
  });
});