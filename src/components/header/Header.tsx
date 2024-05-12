import { FC } from "react";
import { FaHome, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import styles from "./Header.module.css";
import Col from "../column/Col";
import HamburgerMenu from "../burger/HamburgerMenu";
import { useLocation } from "react-router-dom";

const paths = [
  {
    title: "Home",
    href: "/home",
    icon: <FaHome />,
  },
  {
    title: "Search",
    href: "/search",
    icon: <FaSearch />,
  },
  {
    title: "Shop list",
    href: "/shop-list",
    icon: <FaListCheck />,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: <FaUserCircle />,
  },
];

const Header: FC = () => {
  const pathname = useLocation().pathname;

  return (
    <header>
      <Col>
        <HamburgerMenu />
      </Col>
      <nav className={styles["header-bottom"]}>
        <ul className={styles.list}>
          {paths.map((path, i) => (
            <li className={styles.item} key={i}>
              <a
                href={path.href}
                className={`${styles.link} ${
                  pathname === path.href ? `${styles.active}` : ""
                }`}
              >
                {path.icon}
                {path.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
