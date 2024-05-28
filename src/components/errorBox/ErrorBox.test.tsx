import { render, screen } from "@testing-library/react";
import ErrorBox from "./ErrorBox";

describe("ErrorBox component", () => {
  it("should match snapshot", () => {
    const { container } = render(<ErrorBox message="Error message" />);
    expect(container).toMatchSnapshot();
  });
  it("should render component with proper text", () => {
    render(<ErrorBox message="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });
});
