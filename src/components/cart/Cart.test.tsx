import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import Cart from "./Cart";

describe("Cart component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Cart title="Title" url="/some_url" icon={<FaHeart />} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render title correctly", () => {
    render(
      <BrowserRouter>
        <Cart title="Title" url="/some_url" icon={<FaHeart />} />
      </BrowserRouter>
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
  });
  it("should render icon correctly", () => {
    render(
      <BrowserRouter>
        <Cart title="Title" url="/some_url" icon={<FaHeart />} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("icon").firstChild).toBeInTheDocument();
  });
  it("should get the right url param", () => {
    render(
      <BrowserRouter>
        <Cart title="Title" url="/some_url" icon={<FaHeart />} />
      </BrowserRouter>
    );
    expect(screen.getByRole("link").getAttribute("href")).toBe("/some_url");
  });
});
