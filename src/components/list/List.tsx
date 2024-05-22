import React, { FC, PropsWithChildren, ReactNode } from "react";

import styles from "./List.module.css";

const List: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className={styles.list}>
      {React.Children.map<ReactNode, ReactNode>(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {});
      })}
    </ul>
  );
};

export default List;
