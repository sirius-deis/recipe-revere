import { FC, PropsWithChildren } from "react";
import styles from "./Panel.module.css";

const Panel: FC<PropsWithChildren> = ({ children }) => {
  return <article className="panel">{children}</article>;
};

export default Panel;
