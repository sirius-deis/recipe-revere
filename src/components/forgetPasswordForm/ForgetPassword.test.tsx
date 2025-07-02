import { render, screen, fireEvent } from "@testing-library/react";
import ForgetPasswordForm from "./ForgetPassword";

jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useMutation: jest.fn()
}))

import { useMutation } from "@apollo/client";

jest.mock("../loader/Loader", () => () => <div>Loading...</div>)

describe("ForgetPasswordForm", () => {
  it("should match snapshot", () => {
    (useMutation as jest.Mock).mockReturnValue([jest.fn(), {
      loading: false,
      error: null
    }])
    const { container } = render(<ForgetPasswordForm />)
    expect(container).toMatchSnapshot()
  })
  it("should render loading state", () => {
    (useMutation as jest.Mock).mockReturnValue([jest.fn(), {
      loading: true
    }])
    render(<ForgetPasswordForm />)
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })
  it("should render error message box when there is an error", () => {
    const errorMessage = "Error occurred while sending reset link";
    (useMutation as jest.Mock).mockReturnValue([jest.fn(), {
      loading: false,
      error: new Error(errorMessage)
    }])
    render(<ForgetPasswordForm />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  })
})