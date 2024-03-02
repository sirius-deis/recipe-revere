import userSlice, {
  IUserState,
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

describe("tests for user slice", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual({
      user: null,
      isLoading: false,
      error: null,
      token: null,
    });
  });
});
