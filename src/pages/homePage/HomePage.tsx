import { FC } from "react";
import { IoOptionsSharp } from "react-icons/io5";
import styles from "./HomePage.module.css";
import Search from "../../components/search/Search";
import Button from "../../components/button/Button";
import RecipeOfTheDay from "../../components/recipeOfTheDay/RecipeOfTheDay";

const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <h2 className={styles.heading}>What are we cooking today?</h2>
      <div className={styles["search-with-filter"]}>
        <Search placeholderText="Ex.: Burger" />
        <Button bg="icon">
          <IoOptionsSharp />
        </Button>
      </div>
      <section className="d-flex" style={{ gap: "2rem", marginTop: "1rem" }}>
        <h3 className={styles.title}>Recipe of the day</h3>
        <RecipeOfTheDay
          ratingAvg={4.9}
          title="Creamy Funghi Risotto"
          image="https://www.inspiredtaste.net/wp-content/uploads/2011/12/Mushroom-Risotto-Recipe-1-1200.jpg"
          tags={["Healthy", "Vegetarian", "Lunch"]}
        />
      </section>
    </div>
  );
};

export default HomePage;
