import { render, screen } from "@testing-library/react";
import MessageInfo from "./MessageInfo";

describe("MessageInfo component", () => {
  it("should match snapshot", () => {
    const { container } = render(<MessageInfo timestamp={1631360000} isRead={true} isSend={true} />);
    expect(container).toMatchSnapshot();
  });

  it("should render read status icon", () => {
    render(<MessageInfo timestamp={1631360000} isRead={true} isSend={true} />);
    const readIcon = screen.getByTestId('read-icon');
    expect(readIcon).toBeInTheDocument();
    const sendIcon = screen.queryByTestId('send-icon');
    expect(sendIcon).not.toBeInTheDocument();
  });

  it("should render send status icon", () => {
    render(<MessageInfo timestamp={1631360000} isRead={false} isSend={true} />);
    const sendIcon = screen.getByTestId('send-icon');
    expect(sendIcon).toBeInTheDocument();
    const readIcon = screen.queryByTestId('read-icon');
    expect(readIcon).not.toBeInTheDocument();
  });

  it("should render timestamp", () => {
    render(<MessageInfo timestamp={new Date("2024-07-19T12:24:04").getTime()} isRead={true} isSend={false} />);
    const timestamp = screen.getByText('12:24');
    expect(timestamp).toBeInTheDocument();
  });
})