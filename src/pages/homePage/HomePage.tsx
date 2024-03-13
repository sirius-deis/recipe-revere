import { FC } from "react";
import { IoOptionsSharp } from "react-icons/io5";
import styles from "./HomePage.module.css";
import Search from "../../components/search/Search";
import Button from "../../components/button/Button";

const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <h2 className={styles.heading}>What are we cooking today?</h2>
      <div className={styles["search-with-filter"]}>
        <Search placeholderText="Ex.: Burger" />
        <Button type="icon">
          <IoOptionsSharp />
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
