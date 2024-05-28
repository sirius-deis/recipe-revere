import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FriendsActivity from "./FriendsActivity";

const dummy = {
  _id: "123",
  name: "friend name",
  picture: "picture",
  activity: "some activity",
  time: Date.now(),
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
  it("should render name correctly", () => {
    render(
      <BrowserRouter>
        <FriendsActivity {...dummy} />
      </BrowserRouter>
    );
    expect(screen.getByText("friend name")).toBeInTheDocument();
  });
});
