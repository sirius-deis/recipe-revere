import { render, screen, fireEvent } from "@testing-library/react";
import MessageBox from "./MessageBox";

describe("MessageBox component", () => {
  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(
      <MessageBox closeMessageBox={fn}>
        <div>Some element</div>
      </MessageBox>
    );
    expect(container).toMatchSnapshot();
  });

  it("should close the message box", () => {
    const fn = jest.fn();
    render(
      <MessageBox closeMessageBox={fn}>
        <div>Some element</div>
      </MessageBox>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
