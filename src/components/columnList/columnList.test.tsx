import { render, screen } from "@testing-library/react";
import ColumnList from "./columnList";

describe("ColumnList component", () => {
  const mockData = [<div>item 1</div>, <div>item 2</div>, <div>item 3</div>, <div>item 4</div>];
  it("should match snapshot", () => {
    const { container } = render(<ColumnList items={mockData} />);
    expect(container).toMatchSnapshot();
  })
  it("should render items in a grid layout with default number of columns", () => {
    render(<ColumnList items={[]} />);
    const columnList = screen.getByRole("list");
    expect(columnList).toHaveStyle("grid-template-columns: repeat(3, 1fr)");
  });

  it("should render items in a grid layout", () => {
    render(<ColumnList items={mockData} numberOfColumns={2} />);
    const columnList = screen.getByRole("list");
    expect(columnList).toHaveStyle("grid-template-columns: repeat(2, 1fr)");
    const items = screen.getAllByRole("list-item");
    expect(items.length).toBe(mockData.length)
  })
  it("should render items in a grid layout when numberOfColumns exceeds 3", () => {
    render(<ColumnList items={[]} numberOfColumns={4} />);
    const columnList = screen.getByRole("list");
    expect(columnList).toHaveStyle("grid-template-columns: repeat(3, 1fr)");
  })
})