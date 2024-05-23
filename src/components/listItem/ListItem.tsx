import { FC, PropsWithChildren } from "react";

const ListItem: FC<PropsWithChildren> = ({ children }) => {
  return <li>{children}</li>;
};

export default ListItem;
