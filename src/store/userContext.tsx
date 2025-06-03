import { FC, PropsWithChildren, createContext, useReducer } from "react";
import { getToken } from "../utils/store";

export interface IUser {
  _id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  role: string | undefined;
  pictures: string[] | undefined;
}

interface IInitState {
  user: IUser | null;
  token: string | null;
}

const INIT_STATE: IInitState = {
  user: null,
  token: getToken(),
};

export const UserContext = createContext({
  ...INIT_STATE,
  signIn: (user: IUser, token: string) => { },
  signOut: () => { },
  resetPassword: () => { },
});

export const USER_ACTIONS = {
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
  RESET_PASSWORD: "RESET_PASSWORD",
};

enum actionType {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  RESET_PASSWORD = "RESET_PASSWORD",
}

const userReducer: React.Reducer<
  IInitState,
  { type: actionType; payload?: any }
> = (prevState, action) => {
  switch (action.type) {
    case USER_ACTIONS.SIGN_IN:
      return {
        ...prevState,
        user: action.payload.user,
        token: action.payload.token,
      };
    case USER_ACTIONS.SIGN_OUT:
    case USER_ACTIONS.RESET_PASSWORD:
      return {
        ...prevState,
        user: null,
        token: null,
      };
    default:
      return prevState;
  }
};

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INIT_STATE);

  const signIn = (user: IUser, token: string) => {
    dispatch({ type: actionType.SIGN_IN, payload: { user, token } });
  };

  const signOut =
    (actionType: actionType.SIGN_OUT | actionType.RESET_PASSWORD) => () => {
      dispatch({ type: actionType });
    };

  const value = {
    user: state.user,
    token: null,
    signIn,
    signOut: signOut(actionType.SIGN_OUT),
    resetPassword: signOut(actionType.RESET_PASSWORD),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
