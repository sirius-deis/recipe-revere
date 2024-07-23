import { FC, PropsWithChildren } from "react";
import styles from "./Panel.module.css";

interface PanelProps {
  withBorder?: boolean;
  withShadow?: boolean;
  centered?: boolean;
  direction?: "vertical" | "horizontal";
  [x: string]: any;
}

const Panel: FC<PropsWithChildren & PanelProps> = ({
  children,
  withBorder,
  withShadow,
  centered,
  direction = "vertical",
  ...rest
}) => {
  return (
    <div
      className={`${styles.panel}${withBorder ? ` ${styles.bordered}` : ""}${
        withShadow ? ` ${styles.shadowed}` : ""
      }${centered ? ` ${styles.centered}` : ""}${` ${direction}`}`}
      data-testid="panel"
      {...rest}
    >
      {children}
    </div>
  );
};

export default Panel;
