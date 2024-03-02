import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Button>Get Starter</Button>);
    expect(container).toMatchSnapshot();
  });
  it("should render component with proper text", () => {
    render(<Button>Get Starter</Button>);
    expect(screen.getByText("Get Starter")).toBeInTheDocument();
  });
});
