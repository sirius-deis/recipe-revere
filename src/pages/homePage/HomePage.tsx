import { FC } from "react";
import { IoOptionsSharp } from "react-icons/io5";
import styles from "./HomePage.module.css";
import Search from "../../components/search/Search";
import Button from "../../components/button/Button";

const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <h2>What are we cooking today?</h2>
      <Search placeholderText="Ex.: Burger" />
      <Button type="icon">
        <IoOptionsSharp />
      </Button>
    </div>
  );
};

export default HomePage;
