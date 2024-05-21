import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam magnam cum culpa nemo nesciunt laborum reiciendis necessitatibus ea, pariatur error itaque repudiandae repellat incidunt doloremque earum et officiis quam?`;

describe("Accordion component", () => {
  it("Should match snapshot", () => {
    const { container } = render(
      <Accordion title="Lorem">
        <p>{lorem}</p>
      </Accordion>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render component with proper title and with provided component inside component being hidden", () => {
    render(
      <Accordion title="Lorem">
        <p>{lorem}</p>
      </Accordion>
    );
    expect(screen.getByText("Lorem")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Lorem" })).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Lorem");
    expect(screen.queryByText(lorem)).toBeInTheDocument();
    expect(screen.getByTestId("accordion")).not.toHaveClass("active");
  });
  it("should render component, fire event and display hidden content after that", async () => {
    render(
      <Accordion title="Lorem">
        <p>{lorem}</p>
      </Accordion>
    );
    fireEvent(
      screen.getByRole("button", { name: "Lorem" }),
      new MouseEvent("click")
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByTestId("accordion")).toHaveClass("active");
  });
});
