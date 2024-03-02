import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Button>Get Starter</Button>);
    expect(container).toMatchSnapshot();
  });
});
