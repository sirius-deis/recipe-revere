import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import ForgetPasswordForm from "./ForgetPassword";
import { FORGET_PASSWORD } from "../../queries/queries";

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
})