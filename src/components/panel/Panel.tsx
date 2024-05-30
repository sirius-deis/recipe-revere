import { FC, PropsWithChildren } from "react";
import styles from "./Panel.module.css";

interface PanelProps {
  withBorder?: boolean;
  withShadow?: boolean;
}

const Panel: FC<PropsWithChildren & PanelProps> = ({
  children,
  withBorder,
  withShadow,
}) => {
  return (
    <article
      className={`${styles.panel}${withBorder ? ` ${styles.bordered}` : ""}${
        withShadow ? ` ${styles.shadowed}` : ""
      }`}
    >
      {children}
    </article>
  );
};

export default Panel;
