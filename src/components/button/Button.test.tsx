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
    expect(screen.getByRole("button")).toHaveTextContent("Get Starter");
  });
  it("should render component with html inside id", () => {
    render(
      <Button>
        <h2>Get Starter</h2>
      </Button>
    );
    expect(screen.getByRole("button")).toContainHTML(
      '<button class="btn btn-main"><h2>Get Starter</h2></button>'
    );
  });
});
