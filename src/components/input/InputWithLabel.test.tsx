import { render, screen, fireEvent } from "@testing-library/react";
import InputWithLabel from "./InputWithLabel";

describe("InputWithLabel component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <InputWithLabel
        labelText="email"
        inputPlaceholder="Example@email.com"
        icon="email"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
