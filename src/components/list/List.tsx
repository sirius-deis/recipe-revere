import React, { FC, PropsWithChildren, ReactNode } from "react";

import styles from "./List.module.css";
import ListItem from "../listItem/ListItem";

interface ListProps {
  direction: "vertical" | "horizontal";
}

const List: FC<PropsWithChildren & ListProps> = ({ children, direction }) => {
  return (
    <ul className={`${styles.list} ${styles[direction]}`}>
      {React.Children.map<ReactNode, ReactNode>(children, (child) => {
        return <ListItem>{child}</ListItem>;
      })}
    </ul>
  );
};

export default List;
