import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from "./Search";

describe("Search component", () => {
  it("should match snapchat", () => {
    const { container } = render(
      <BrowserRouter>
        <Search placeholderText="Ex.: Something" />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render component with the correct placeholder text", () => {
    render(
      <BrowserRouter>
        <Search placeholderText="Ex.: Something" />
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText("Ex.: Something")).toBeInTheDocument();
  });
});
