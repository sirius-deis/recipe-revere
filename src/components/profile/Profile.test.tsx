import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from "./Profile";

jest.mock("../savedRecipeList/SavedRecipeList.tsx", () => () => <div>SavedRecipeList</div>)
jest.mock("../friendsActivityList/FriendsActivityList.tsx", () => () => <div>FriendsActivityList</div>)

describe("Profile component", () => {
  const mockedUser = {
    _id: "123",
    name: "John Doe",
    isActive: true,
    isBlocked: false,
    pictures: ["https://example.com/profile.jpg"],
  };
  it("should match snapshot", () => {
    const { container } = render(<Router><Profile user={mockedUser} /></Router>);
    expect(container).toMatchSnapshot();
  })
  it("should render user profile with provided user data", () => {
    render(<Router><Profile user={mockedUser} /></Router>);
    expect(screen.getByText(mockedUser.name)).toBeInTheDocument()
    expect(screen.queryByText("Anonymous User")).not.toBeInTheDocument()
    expect(screen.getByTestId("img")).toHaveAttribute("src", mockedUser.pictures[0])
  })
  it("should render 'Anonymous User' when user name is not provided", () => {
    render(<Router><Profile user={{ ...mockedUser, name: undefined }} /></Router>);
    expect(screen.getByText("Anonymous User")).toBeInTheDocument()
  })
})