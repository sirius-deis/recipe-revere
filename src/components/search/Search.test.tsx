import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  it("should match snapchat", () => {
    const { container } = render(<Search placeholderText="Ex.: Something" />);
    expect(container).toMatchSnapshot();
  });
});
