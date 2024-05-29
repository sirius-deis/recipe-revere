import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SavedRecipe from "./SavedRecipe";

describe("SavedRecipe component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <SavedRecipe
          imgUrl="https://spoonacular.com/recipeImages/623856-556x370.jpg"
          title="Spaghetti Bolognese"
          url="https://spoonacular.com/recipeImages/623856-556x370.jpg"
        />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render passed props correctly", () => {
    render(
      <BrowserRouter>
        <SavedRecipe
          imgUrl="https://spoonacular.com/recipeImages/623856-556x370.jpg"
          title="Spaghetti Bolognese"
          url="https://spoonacular.com/recipeImages/623856-556x370.jpg"
        />
      </BrowserRouter>
    );
    expect(screen.getByText("Spaghetti Bolognese")).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      "https://spoonacular.com/recipeImages/623856-556x370.jpg"
    );
    expect(img).toHaveAttribute("alt", "Spaghetti Bolognese");
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://spoonacular.com/recipeImages/623856-556x370.jpg"
    );
  });
});
