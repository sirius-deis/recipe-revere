import { render, screen } from "@testing-library/react";
import Ingredient from "./Ingredient";

const dummy = {
  food: "food",
  measure: "measure",
  quantity: 1,
  weight: 1,
  foodId: "foodId",
  image: "image",
  factor: 1,
};

describe("Ingredient component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Ingredient {...dummy} />);
    expect(container).toMatchSnapshot();
  });
  it("should render component with correct props", () => {
    render(<Ingredient {...dummy} />);
    expect(screen.getByText(dummy.food)).toBeInTheDocument();
    const el = screen.getByText(dummy.weight * dummy.factor);
    expect(el).toBeInTheDocument();
    expect(el).toBeInTheDocument();
    expect(el).toBe(dummy.weight * dummy.factor);
  });
});
