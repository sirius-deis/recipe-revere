import { render, screen } from "@testing-library/react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import SignInForm from "./SignInForm";


jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useMutation: jest.fn()
}))

import { useMutation } from "@apollo/client";

jest.mock("../loader/Loader", () => () => <div>Loading...</div>)

describe("SignInForm", () => {
  it("should match snapshot", () => {
    (useMutation as jest.Mock).mockReturnValue([jest.fn(), {
      loading: false,
      error: null
    }])
    const { container } = render(<BrowserRouter><SignInForm /></BrowserRouter>)
    expect(container).toMatchSnapshot()
  })

  it("should render loading state", () => {
    (useMutation as jest.Mock).mockReturnValue([jest.fn(), {
      loading: true
    }])
    render(<BrowserRouter><SignInForm /></BrowserRouter>)
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })
});