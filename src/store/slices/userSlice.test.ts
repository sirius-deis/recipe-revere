import userSlice, {
  IUser,
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

const loadingStartedState = {
  user: null,
  isLoading: true,
  error: null,
  token: null,
};

const userData: IUser = {
  _id: "507f1f77bcf86cd799439011",
  name: "John",
  email: "john@example.com",
  password: "password",
  isActive: true,
  isBlocked: false,
  role: "user",
  passwordChangedAt: 1709352761,
  pictures: [],
};

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9";

const signInPayload: { data: { user: IUser }; token: string } = {
  data: {
    user: userData,
  },
  token,
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
    expect(reducer(undefined, signUpStart())).toEqual(loadingStartedState);
  });
  it("should check if user state changes when sign in is started", () => {
    expect(reducer(undefined, signInStart())).toEqual(loadingStartedState);
  });
  it("should check if user state changes when sign out is started", () => {
    expect(reducer(undefined, signOutStart())).toEqual(loadingStartedState);
  });
  it("should check if user sign up successfully when action if fired", () => {
    expect(reducer(undefined, signUpSuccess())).toEqual({
      user: null,
      isLoading: false,
      error: null,
      token: null,
    });
  });
  it("should check if user sign up successfully when action if fired", () => {
    expect(reducer(undefined, signInSuccess(signInPayload))).toEqual({
      user: userData,
      isLoading: false,
      error: null,
      token,
    });
  });
  it("should check if user sign out successfully when action if fired", () => {
    expect(reducer(undefined, signOutSuccess())).toEqual({
      user: null,
      isLoading: false,
      error: null,
      token: null,
    });
  });
});
