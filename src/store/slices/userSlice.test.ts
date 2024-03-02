import userSlice, {
  signInFailure,
  signInStart,
  signInSuccess,
  signOutFailure,
  signOutStart,
  signOutSuccess,
  signUpFailure,
  signUpStart,
  signUpSuccess,
  reducer,
} from "./userSlice";

const LoadingStartedState = {
  user: null,
  isLoading: true,
  error: null,
  token: null,
};

describe("tests for user slice", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      user: null,
      isLoading: false,
      error: null,
      token: null,
    });
  });
  it("should check if user state changes when sign up is started", () => {
    expect(reducer(undefined, signUpStart())).toEqual(LoadingStartedState);
  });
  it("should check if user state changes when sign in is started", () => {
    expect(reducer(undefined, signInStart())).toEqual(LoadingStartedState);
  });
  it("should check if user state changes when sign out is started", () => {
    expect(reducer(undefined, signOutStart())).toEqual(LoadingStartedState);
  });
});
