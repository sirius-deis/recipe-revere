import { FC, PropsWithChildren } from "react";
import styles from "./Row.module.css";

const Row: FC<PropsWithChildren & { inlineStyles?: {} }> = ({
  children,
  inlineStyles,
}) => {
  return (
    <div className={styles.row} style={inlineStyles}>
      {children}
    </div>
  );
};

export default Row;
