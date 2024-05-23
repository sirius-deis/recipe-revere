import { render, screen } from "@testing-library/react";
import List from "./List";

const dummy = [
  <div key={1}>Some content 1</div>,
  <div key={2}>Some content 2</div>,
  <div key={3}>Some content 3</div>,
];

describe("List component", () => {
  it("should match snapshot", () => {
    const { container } = render(<List>{dummy.map((el) => el)}</List>);
    expect(container).toMatchSnapshot();
  });
  it("should add vertical direction props correctly and apply corresponding class", () => {
    render(<List direction="vertical">{dummy.map((el) => el)}</List>);
    expect(screen.getByRole("list")).toHaveClass("vertical");
  });
  it("should add horizontal direction props correctly and apply corresponding class", () => {
    render(<List direction="horizontal">{dummy.map((el) => el)}</List>);
    expect(screen.getByRole("list")).toHaveClass("horizontal");
  });
  it("should add render provided children", () => {
    render(<List direction="horizontal">{dummy.map((el) => el)}</List>);
    expect(screen.getByText("Some content 1")).toBeInTheDocument();
    expect(screen.getByText("Some content 2")).toBeInTheDocument();
    expect(screen.getByText("Some content 3")).toBeInTheDocument();
  });
});
