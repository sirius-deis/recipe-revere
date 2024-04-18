import { FC } from "react";
import { Link } from "react-router-dom";
import { IoOptionsSharp } from "react-icons/io5";
import {
  FaBurger,
  FaLeaf,
  FaCookieBite,
  FaFishFins,
  FaUserSecret,
} from "react-icons/fa6";
import styles from "./HomePage.module.css";
import Search from "../../components/search/Search";
import Button from "../../components/button/Button";
import RecipeOfTheDay from "../../components/recipeOfTheDay/RecipeOfTheDay";
import Row from "../../components/row/Row";
import Col from "../../components/column/Col";

//TODO: add a user data
const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles["header-top"]}>
        <Col>
          <Row inlineStyles={{ gap: "1rem" }}>
            <div className={styles["image-container"]}>
              <FaUserSecret className={styles["user-icon"]} />
              {/* <img src="" alt="user profile picture" /> */}
            </div>
            Hello ... name
          </Row>
        </Col>
      </div>
      <h1 className={styles.heading}>What are we cooking today?</h1>
      <div className={styles["search-with-filter"]}>
        <Search placeholderText="Ex.: Burger" />
        <Button bg="icon">
          <IoOptionsSharp />
        </Button>
      </div>
      <section className="d-flex" style={{ gap: "2rem", marginTop: "1rem" }}>
        <h2 className={styles.title}>Recipe of the day</h2>
        <RecipeOfTheDay />
      </section>
      <section className="mt-1">
        <Row inlineStyles={{ justifyContent: "space-between" }}>
          <h2 className={styles.title}>Categories</h2>
          <Link to="/search">See all</Link>
        </Row>
        <Row inlineStyles={{ gap: "1rem" }}>
          <Button bg="icon" size="sm">
            <Col>
              <FaBurger />
              <span className="fs-2">Burger</span>
            </Col>
          </Button>
          <Button bg="icon" size="sm">
            <Col>
              <FaLeaf />
              <span className="fs-2">Vegan</span>
            </Col>
          </Button>
          <Button bg="icon" size="sm">
            <Col>
              <FaCookieBite />
              <span className="fs-2">Desserts</span>
            </Col>
          </Button>
          <Button bg="icon" size="sm">
            <Col>
              <FaFishFins />
              <span className="fs-2">Seafood</span>
            </Col>
          </Button>
        </Row>

        <Row inlineStyles={{ gap: "1rem" }}>
          <Button bg="icon" size="sm">
            <Col>
              <FaBurger />
              <span className="fs-2">Burger</span>
            </Col>
          </Button>
          <Button bg="icon" size="sm">
            <Col>
              <FaLeaf />
              <span className="fs-2">Vegan</span>
            </Col>
          </Button>
          <Button bg="icon" size="sm">
            <Col>
              <FaCookieBite />
              <span className="fs-2">Desserts</span>
            </Col>
          </Button>
          <Button bg="icon" size="sm">
            <Col>
              <FaFishFins />
              <span className="fs-2">Seafood</span>
            </Col>
          </Button>
        </Row>
      </section>
    </div>
  );
};

export default HomePage;
