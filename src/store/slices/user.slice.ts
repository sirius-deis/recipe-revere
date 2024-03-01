import { createSlice } from "@reduxjs/toolkit";

interface user {}

interface userState {
  user: user | null;
  isLoading: boolean;
  error: Error | null;
  token: string | null;
}

const startLoading = ({ value }: { value: userState }) => {
  value.isLoading = true;
  value.error = null;
};

const actionFailure = (
  { value }: { value: userState },
  action: { payload: Error }
) => {
  value.isLoading = false;
  value.error = action.payload;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      user: null,
      isLoading: false,
      error: null,
      token: null,
    },
  },
  reducers: {
    signUpStart: startLoading,
    signInStart: startLoading,
    signOutStart: startLoading,
    signUpSuccess(state) {
      state.value.isLoading = false;
      state.value.error = null;
      state.value.token = null;
    },
    signInSuccess(state) {},
    signOutSuccess(state) {},
    signUpFailure: actionFailure,
    signInFailure: actionFailure,
    signOutFailure: actionFailure,
  },
});

export default userSlice;
