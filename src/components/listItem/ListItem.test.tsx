import { render, screen } from "@testing-library/react";

import ListItem from "./ListItem";

describe("ListItem", () => {
  it("should match snapshot", () => {
    const { container } = render(<ListItem>Some content</ListItem>);
    expect(container).toMatchSnapshot();
  });
  it("should render plain text", () => {
    render(<ListItem>Some content</ListItem>);
    expect(screen.getByText("Some content")).toBeInTheDocument();
  });
  it("should render html", () => {
    render(
      <ListItem>
        <div>Some html</div>
      </ListItem>
    );
    expect(screen.getByText("Some html")).toBeInTheDocument();
  });
});
