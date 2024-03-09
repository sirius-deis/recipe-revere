import { FC } from "react";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu: FC = () => {
  return (
    <nav className={styles.navigation}>
      <span></span>
      <div></div>
      <div></div>
    </nav>
  );
};

export default HamburgerMenu;
