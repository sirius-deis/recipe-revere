import { render } from "@testing-library/react";
import HamburgerMenu from "./HamburgerMenu";

describe("HamburgerMenu component", () => {
  it("should match snapshot", () => {
    const { container } = render(<HamburgerMenu />);
    expect(container).toMatchSnapshot();
  });
});
