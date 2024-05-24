import React, { FC, PropsWithChildren, ReactNode } from "react";

import styles from "./List.module.css";

interface ListProps {
  direction?: "vertical" | "horizontal";
  borderBottom?: boolean;
}

const List: FC<PropsWithChildren & ListProps> = ({
  children,
  direction = "vertical",
  borderBottom = false,
}) => {
  return (
    <ul className={`${styles.list} ${styles[direction]}`}>
      {React.Children.map<ReactNode, ReactNode>(children, (child) => {
        return (
          <li
            className={`${styles["list-item"]}${
              borderBottom ? " border-bottom" : ""
            }`}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
