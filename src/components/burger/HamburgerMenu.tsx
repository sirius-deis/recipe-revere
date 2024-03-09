import { FC } from "react";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu: FC = () => {
  return (
    <nav className={styles.navigation}>
      <span></span>
      <span></span>
      <span></span>
    </nav>
  );
};

export default HamburgerMenu;
