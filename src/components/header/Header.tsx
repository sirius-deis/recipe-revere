import { FC } from "react";
import styles from "./Header.module.css";
import Col from "../column/Col";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Col>
        <div className={styles["image-container"]}>
          <img src="" alt="user picture" />
        </div>
      </Col>
      <Col></Col>
    </header>
  );
};

export default Header;
