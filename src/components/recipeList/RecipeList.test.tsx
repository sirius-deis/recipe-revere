import { render, screen } from "@testing-library/react";
import RecipeList from "./RecipeList";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useQuery: jest.fn(),
}))

jest.mock("./../loader/Loader", () => () => <div>Loading...</div>);

import { useQuery } from "@apollo/client";

describe("RecipeList component", () => {
  const data = {
    getRecipes: [
      { recipe: { url: "1", label: "Recipe 1", image: "img1.jpg" }, avgRating: 4.5 },
      { recipe: { url: "2", label: "Recipe 2", image: "img2.jpg" }, avgRating: 4.0 },
    ]
  }
  it("should match snapshot", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data
    })
    const { container } = render(<Router><RecipeList /></Router>)
    expect(container).toMatchSnapshot()
  })
  it("should render loading state", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: true,
      error: null,
      data: null
    })
    render(<Router><RecipeList /></Router>)
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })
  it("should render error state", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: new Error("Error fetching recipes"),
      data: null
    })
    render(<Router><RecipeList /></Router>)
    expect(screen.getByText("Error fetching recipes")).toBeInTheDocument()
  })
  it("should render recipes when data is available", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data
    })
    render(<Router><RecipeList /></Router>)
    expect(screen.getByText("Recipe 1")).toBeInTheDocument()
    expect(screen.getByText("Recipe 2")).toBeInTheDocument()
    const images = screen.getAllByTestId("img");
    expect(images.length).toBe(2);
    expect(images[0]).toHaveStyle(`backgroundImage: url(${data.getRecipes[0].recipe.image})`)
    expect(images[1]).toHaveStyle(`backgroundImage: url(${data.getRecipes[1].recipe.image})`)
  })
})