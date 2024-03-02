import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  isBlocked: boolean;
  role: "string";
  passwordChangedAt: number;
  pictures: [string];
}

interface IUserState {
  user: IUser | null;
  isLoading: boolean;
  error: Error | null;
  token: string | null;
}

const startLoading = (state: IUserState) => {
  state.isLoading = true;
  state.error = null;
};

const actionFailure = (state: IUserState, { payload }: { payload: Error }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpStart: startLoading,
    signInStart: startLoading,
    signOutStart: startLoading,
    signUpSuccess(state) {
      state.isLoading = false;
      state.error = null;
      state.token = null;
    },
    signInSuccess(
      state,
      { payload }: { payload: { data: { user: IUser }; token: string } }
    ) {
      state.isLoading = false;
      state.error = null;
      state.user = payload.data.user;
      state.token = payload.token;
    },
    signOutSuccess(state) {
      state = initialState;
    },
    signUpFailure: actionFailure,
    signInFailure: actionFailure,
    signOutFailure: actionFailure,
  },
});

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  signOutFailure,
  signOutStart,
  signOutSuccess,
  signUpFailure,
  signUpStart,
  signUpSuccess,
} = userSlice.actions;

export default userSlice;
