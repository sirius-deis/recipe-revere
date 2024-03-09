import { FC } from "react";
import styles from "./Header.module.css";
import Col from "../column/Col";
import Row from "../row/Row";
import HamburgerMenu from "../burger/HamburgerMenu";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Col>
        <Row>
          <div className={styles["image-container"]}>
            <img src="" alt="user picture" />
          </div>
          Hello ...
        </Row>
      </Col>
      <Col>
        <HamburgerMenu />
      </Col>
    </header>
  );
};

export default Header;
