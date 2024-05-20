import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

const lorem = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam magnam cum culpa nemo nesciunt laborum reiciendis necessitatibus ea, pariatur error itaque repudiandae repellat incidunt doloremque earum et officiis quam?`;

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
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Lorem");
    expect(screen.queryByText(lorem)).not.toBeInTheDocument();
  });
});
