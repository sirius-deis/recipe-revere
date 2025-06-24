import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SavedRecipeList from "./SavedRecipeList";

jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useQuery: jest.fn(),
}));
import { useQuery } from "@apollo/client";

jest.mock("../loader/Loader", () => () => <div>Loading...</div>);

describe("SavedRecipeList", () => {
  const mockedData = {
    recipes: [
      { url: "1", label: "Recipe 1", image: "img1.jpg" },
      { url: "2", label: "Recipe 2", image: "img2.jpg" },
    ],
  }
  it("should match snapshot", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: mockedData,
    });
    const { container } = render(
      <Router>
        <SavedRecipeList />
      </Router>
    );
    expect(container).toMatchSnapshot();
  })
  it("should render loading state", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: true
    });
    render(<Router>
      <SavedRecipeList />
    </Router>);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  })
  it("should render error state", () => {
    const errorMessage = "Error fetching saved recipes";
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: new Error(errorMessage),
    });
    render(<Router>
      <SavedRecipeList />
    </Router>);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
  it("should render no saved recipes message", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: { recipes: [] }
    })
    render(<Router>
      <SavedRecipeList /></Router>);
    expect(screen.getByText("No saved recipes yet")).toBeInTheDocument();
  })
  it("should render saved recipes", () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: mockedData
    })
    render(<Router>
      <SavedRecipeList />
    </Router>)
    expect(screen.queryByTitle("Loading...")).not.toBeInTheDocument();
    for (let recipe of mockedData.recipes) {
      expect(screen.getByText(recipe.label)).toBeInTheDocument();
      const img = screen.getByAltText(recipe.label);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', recipe.image)
    }
  })
})