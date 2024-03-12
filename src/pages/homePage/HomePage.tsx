import { FC } from "react";
import styles from "./HomePage.module.css";
import Search from "../../components/search/Search";

const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <h2>What are we cooking today?</h2>
      <Search placeholderText="Ex.: Burger" />
    </div>
  );
};

export default HomePage;
