import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import RecipeOfTheDay from "./RecipeOfTheDay";

jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useQuery: jest.fn(),
}))

import { useQuery } from "@apollo/client";

jest.mock("../loader/Loader", () => () => <div>Loading</div>)

describe("RecipeOfTheDay", () => {
  const mockData = {
    getRecipe: {
      recipe: {
        url: "1",
        label: "Recipe of the Day",
        image: "img1.jpg",
        dietLabels: ["Vegan"],
      },
      averageRating: 4.5,
    },
  };
  it("should match snapshot", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: mockData,
    });
    const { container } = render(<Router><RecipeOfTheDay /></Router>);
    expect(container).toMatchSnapshot();
  })
  it("Should render loading state", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: true
    });
    render(<Router><RecipeOfTheDay /></Router>);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  })
  it("Should render error state", () => {
    const errorMessage = 'Error fetching recipe of the day';
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: new Error(errorMessage)
    });
    render(<Router><RecipeOfTheDay /></Router>)
    expect(screen.queryByText(errorMessage)).toBeInTheDocument();
  });
  it("Should render error message if data is null", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: null,
    });
    render(<Router><RecipeOfTheDay /></Router>);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  })
})