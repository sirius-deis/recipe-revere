import { FC, PropsWithChildren, createContext, useReducer } from "react";

export interface IUser {
  _id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  role: string | undefined;
  pictures: string[] | undefined;
}

interface IInitState {
  user: IUser | null;
  token: string | undefined;
}

const INIT_STATE: IInitState = {
  user: null,
  token: undefined,
};

const UserContext = createContext(INIT_STATE);

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
  { type: actionType; payload: any }
> = (prevState, action) => {
  switch (action.type) {
    case USER_ACTIONS.SIGN_IN:
      return {
        ...prevState,
        user: action.payload.user,
        token: action.payload.token,
      };
    case USER_ACTIONS.SIGN_OUT:
      return {
        ...prevState,
        user: null,
        token: undefined,
      };
    default:
      return prevState;
  }
};

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INIT_STATE);

  const signIn = ({ user, token }: { user: IUser; token: string }) => {
    dispatch({ type: actionType.SIGN_IN, payload: { user, token } });
  };

  const value = {
    user: state.user,
    token: state.token,
    signIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
