import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartList from "./CartList";
import { FaLeaf, FaSeedling } from "react-icons/fa";

const carts = [
  {
    title: "Vegetarian",
    icon: <FaLeaf />,
    url: "/search-results?category=vegetarian",
  },
  {
    title: "Vegan",
    icon: <FaSeedling />,
    url: "/search-results?category=vegan",
  },
];

describe("CartList component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <CartList carts={carts} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render component with correct titles", () => {
    render(
      <BrowserRouter>
        <CartList carts={carts} />
      </BrowserRouter>
    );
    expect(screen.getByText("Vegetarian")).toBeInTheDocument();
    expect(screen.getByText("Vegan")).toBeInTheDocument();
  });
  it("should render component with correct urls", () => {
    render(
      <BrowserRouter>
        <CartList carts={carts} />
      </BrowserRouter>
    );
    expect(screen.getByText("Vegetarian").closest("a")).toHaveAttribute(
      "href",
      "/search-results?category=vegetarian"
    );
    expect(screen.getByText("Vegan").closest("a")).toHaveAttribute(
      "href",
      "/search-results?category=vegan"
    );
  });
});
