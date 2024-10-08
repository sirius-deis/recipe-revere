import { render, screen, fireEvent } from "@testing-library/react";
import ChatInput from "./chatInput";

describe("ChatInput component", () => {
  test('matches snapshot', () => {
    const {container} = render(<ChatInput />);
    expect(container).toMatchSnapshot();
  })
  test("renders input field and submit button", () => {
    render(<ChatInput />);

    const inputField = screen.getByPlaceholderText("Type a message...");

    expect(inputField).toBeInTheDocument();
  });
  test("handles input change", () => {
    render(<ChatInput />);

    const inputField = screen.getByPlaceholderText("Type a message...");
    fireEvent.change(inputField, { target: { value: "Hello World!" } });

    expect(inputField.value).toBe("Hello World!");
  });
})