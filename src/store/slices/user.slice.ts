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
  },
});

export default userSlice;
