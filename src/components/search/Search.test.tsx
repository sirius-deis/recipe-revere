import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  it("should match snapchat", () => {
    const { container } = render(<Search placeholderText="Ex.: Something" />);
    expect(container).toMatchSnapshot();
  });
  it("should render component with the correct placeholder text", () => {
    render(<Search placeholderText="Ex.: Something" />);
    expect(screen.getByPlaceholderText("Ex.: Something")).toBeInTheDocument();
  });
});
