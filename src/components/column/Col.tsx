import { FC, PropsWithChildren } from "react";
import styles from "./Col.module.css";

const Col: FC<PropsWithChildren & { inlineStyles: {} }> = ({
  children,
  inlineStyles,
}) => {
  return (
    <div className={styles.col} style={inlineStyles}>
      {children}
    </div>
  );
};

export default Col;
