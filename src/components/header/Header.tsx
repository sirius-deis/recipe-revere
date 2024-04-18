import { FC } from "react";
import { FaHome, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaListCheck, FaUserSecret } from "react-icons/fa6";
import styles from "./Header.module.css";
import Col from "../column/Col";
import Row from "../row/Row";
import HamburgerMenu from "../burger/HamburgerMenu";

const Header: FC = () => {
  return (
    <header>
      <Col>
        <HamburgerMenu />
      </Col>
      <nav className={styles["header-bottom"]}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="/home" className={styles.link}>
              <FaHome />
              Home
            </a>
          </li>
          <li className={styles.item}>
            <a href="/search" className={styles.link}>
              <FaSearch />
              Search
            </a>
          </li>
          <li className={styles.item}>
            <a href="/shop-list" className={styles.link}>
              <FaListCheck />
              Shop list
            </a>
          </li>
          <li className={styles.item}>
            <a href="/profile" className={styles.link}>
              <FaUserCircle />
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
