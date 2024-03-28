import { FC } from "react";
import { Link } from "react-router-dom";
import { IoOptionsSharp } from "react-icons/io5";
import styles from "./HomePage.module.css";
import Search from "../../components/search/Search";
import Button from "../../components/button/Button";
import RecipeOfTheDay from "../../components/recipeOfTheDay/RecipeOfTheDay";
import Row from "../../components/row/Row";

const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.heading}>What are we cooking today?</h1>
      <div className={styles["search-with-filter"]}>
        <Search placeholderText="Ex.: Burger" />
        <Button bg="icon">
          <IoOptionsSharp />
        </Button>
      </div>
      <section className="d-flex" style={{ gap: "2rem", marginTop: "1rem" }}>
        <h2 className={styles.title}>Recipe of the day</h2>
        <RecipeOfTheDay
          ratingAvg={4.9}
          title="Creamy Funghi Risotto"
          image="https://www.inspiredtaste.net/wp-content/uploads/2011/12/Mushroom-Risotto-Recipe-1-1200.jpg"
          tags={["Healthy", "Vegetarian", "Lunch"]}
        />
      </section>
      <section className="mt-1">
        <Row inlineStyles={{ justifyContent: "space-between" }}>
          <h2 className={styles.title}>Categories</h2>
          <Link to="/search">See all</Link>
        </Row>
      </section>
    </div>
  );
};

export default HomePage;
