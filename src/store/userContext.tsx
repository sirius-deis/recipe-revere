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
}

const INIT_STATE: IInitState = {
  user: null,
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
  { type: actionType; payload?: any }
> = (prevState, action) => {
  switch (action.type) {
    case USER_ACTIONS.SIGN_IN:
      return {
        ...prevState,
        user: action.payload.user,
      };
    case USER_ACTIONS.SIGN_OUT:
    case USER_ACTIONS.RESET_PASSWORD:
      return {
        ...prevState,
        user: null,
      };
    default:
      return prevState;
  }
};

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INIT_STATE);

  const signIn = ({ user }: { user: IUser }) => {
    dispatch({ type: actionType.SIGN_IN, payload: { user } });
  };

  const signOut =
    (actionType: actionType.SIGN_OUT | actionType.RESET_PASSWORD) => () => {
      dispatch({ type: actionType });
    };

  const value = {
    user: state.user,
    signIn,
    signOut: signOut(actionType.SIGN_OUT),
    resetPassword: signOut(actionType.RESET_PASSWORD),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
