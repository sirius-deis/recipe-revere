import { FC, PropsWithChildren } from "react";
import styles from "./Column.module.css";

const Column: FC<PropsWithChildren & { inlineStyles: {} }> = ({
  children,
  inlineStyles,
}) => {
  return (
    <div className={styles.column} style={inlineStyles}>
      {children}
    </div>
  );
};

export default Column;
