import { FC, PropsWithChildren } from "react";
import styles from "./Panel.module.css";

interface PanelProps {
  withBorder?: boolean;
  withShadow?: boolean;
  centered?: boolean;
  [x: string]: any;
}

const Panel: FC<PropsWithChildren & PanelProps> = ({
  children,
  withBorder,
  withShadow,
  centered,
  ...rest
}) => {
  return (
    <article
      className={`${styles.panel}${withBorder ? ` ${styles.bordered}` : ""}${
        withShadow ? ` ${styles.shadowed}` : ""
      }${centered ? ` ${styles.centered}` : ""}`}
      data-testid="panel"
      {...rest}
    >
      {children}
    </article>
  );
};

export default Panel;
