import { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles["image-container"]}>
          <img src="" alt="user picture" />
        </div>
      </div>
    </header>
  );
};

export default Header;
