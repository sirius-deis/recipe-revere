import { render, screen } from "@testing-library/react";
import ImageMessage from "./ImageMessage";


describe("ImageMessage component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ImageMessage src="example.jpg" desc="Example Image" />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render image correctly", () => {
    render(
      <ImageMessage src="example.jpg" desc="Example Image" />
    );
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "example.jpg");
  });
});