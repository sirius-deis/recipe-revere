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

const userReducer: React.Reducer<IInitState, { type: string; payload: any }> = (
  prevState,
  action
) => {
  switch (action.type) {
    case "":
      return prevState;
    default:
      return prevState;
  }
};

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INIT_STATE);

  const value = {
    user: null,
    token: "",
  };

  return <UserContext.Provider value={value}></UserContext.Provider>;
};
