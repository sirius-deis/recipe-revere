import { render, screen } from "@testing-library/react";
import FriendsActivityList from "./FriendsActivityList";

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useQuery: jest.fn()
}))

import { useQuery } from "@apollo/client";

jest.mock("../loader/Loader", () => () => <div>Loading...</div>)

describe("FriendsActivityList", () => {
  const mockData = [{
    _id: "12",
    user: {
      _id: "34",
      name: "John",
      pictures: "https://example.com/pic.jpg"
    },
    activity: "Created a new post",
    date: 1633072800000
  }, {
    _id: "23",
    user: {
      _id: "45",
      name: "Sam",
      pictures: "https://example.com/pic.jpg"
    },
    activity: "Liked post",
    date: 1633076800000
  }]
  it("should match snapshot", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: mockData
    })
    const { container } = render(<FriendsActivityList />)
    expect(container).toMatchSnapshot();
  })
  it("should render loading state", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: true
    })
    render(<FriendsActivityList />)
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  })
  it("should render error state", () => {
    const errorMessage = "Error fetching friends activity";
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: new Error(errorMessage)
    })
    render(<FriendsActivityList />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  })
  it("should render no activity message", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: { friendsActivity: [] }
    })
    render(<FriendsActivityList />)
    expect(screen.getByText("No friends activity yet")).toBeInTheDocument();
  })
})