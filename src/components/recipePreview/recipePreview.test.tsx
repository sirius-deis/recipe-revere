import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RecipePreview from "./recipePreview";

const dummy = {
  id: "id",
  label: "label",
  image: "image",
  avgRating: 1,
  dietLabels: ["dietLabel 1", "dietLabel 2", "dietLabel 3"],
  btnTitle: "Click",
};

describe("RecipePreview component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <RecipePreview {...dummy} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render component with correct props", () => {
    render(
      <BrowserRouter>
        <RecipePreview {...dummy} />
      </BrowserRouter>
    );
    expect(screen.getByText(dummy.label)).toBeInTheDocument();
    expect(screen.getByText(dummy.avgRating)).toBeInTheDocument();
    expect(screen.getByText(dummy.dietLabels[0])).toBeInTheDocument();
    expect(screen.getByText(dummy.dietLabels[1])).toBeInTheDocument();
    expect(screen.getByText(dummy.dietLabels[2])).toBeInTheDocument();
    expect(screen.getByText(dummy.btnTitle)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `/recipe/${dummy.id}`
    );
  });
});
