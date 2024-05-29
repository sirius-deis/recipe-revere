import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FriendsActivity from "./FriendsActivity";

const time = new Date("2023-12-15T14:16:13").getTime();

const dummy = {
  _id: "123",
  name: "friend name",
  picture: "picture",
  activity: "some activity",
  time: time,
};

describe("FriendsActivity component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <FriendsActivity {...dummy} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render props correctly", () => {
    render(
      <BrowserRouter>
        <FriendsActivity {...dummy} />
      </BrowserRouter>
    );
    expect(screen.getByText("friend name")).toBeInTheDocument();
    expect(screen.getByText("some activity")).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "picture");
    expect(img).toHaveAttribute("alt", "friend name");
    expect(screen.getByRole("link")).toHaveAttribute("href", "/users/123");
    expect(screen.getByText(new Date(time).toISOString())).toBeInTheDocument();
  });
});
