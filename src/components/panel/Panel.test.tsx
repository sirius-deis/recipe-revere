import { render, screen } from "@testing-library/react";
import Panel from "./Panel";

const dummyText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consectetur maxime eius consequuntur illo eaque sit nam exercitationem totam dolore harum eos modi assumenda aperiam minus maiores. Eaque, accusamus perferendis.";
const dummyHtml = (
  <div>
    <ul>
      <li>list item 1</li>
      <li>list item 2</li>
    </ul>
  </div>
);
describe("Panel component", () => {
  it("should match snapshot", () => {
    const { container: container1 } = render(<Panel>dummyText</Panel>);
    const { container: container2 } = render(<Panel>dummyHtml</Panel>);
    expect(container1).toMatchSnapshot();
    expect(container2).toMatchSnapshot();
  });
  it("should render component with proper text", () => {
    render(<Panel>{dummyText}</Panel>);
    expect(screen.getByText(dummyText)).toBeInTheDocument();
  });
  it("should render component with proper html inside it", () => {
    render(<Panel>{dummyHtml}</Panel>);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("list item 1")).toBeInTheDocument();
    expect(screen.getByText("list item 2")).toBeInTheDocument();
  });
  it("should render component with correct props set without passing ant props", () => {
    render(<Panel>{dummyText}</Panel>);
    expect(screen.getByTestId("panel")).not.toHaveClass("bordered");
    expect(screen.getByTestId("panel")).not.toHaveClass("shadowed");
  });
  it("should render component with correct props set without passing ant props", () => {
    render(
      <Panel withBorder withShadow>
        {dummyText}
      </Panel>
    );
    expect(screen.getByTestId("panel")).toHaveClass("bordered");
    expect(screen.getByTestId("panel")).toHaveClass("shadowed");
  });
});
