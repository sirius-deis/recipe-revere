import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Button>Get Started</Button>);
    expect(container).toMatchSnapshot();
  });
  it("should render component with proper text", () => {
    render(<Button>Get Started</Button>);
    expect(screen.getByText("Get Started")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Get Started");
  });
  it("should render component with html inside it", () => {
    render(
      <Button>
        <h2>Get Started</h2>
      </Button>
    );
    expect(screen.getByRole("button")).toContainHTML(
      '<button class="btn btn-lg btn-main"><h2>Get Started</h2></button>'
    );
  });
  it("should fire provided function on click event", () => {
    const fn = jest.fn();
    render(<Button clickHandler={fn}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(fn).toHaveBeenCalled();
  });
  it("should check if default classes are provided correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn");
    expect(screen.getByRole("button")).toHaveClass("btn-lg");
    expect(screen.getByRole("button")).toHaveClass("btn-main");
    expect(screen.getByRole("button")).not.toHaveClass("btn-rounded");
  });
});
