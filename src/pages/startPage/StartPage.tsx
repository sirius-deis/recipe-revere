import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./StartPage.module.css";
import StarterImg from "../../assets/starterImg.png";
import Button from "../../components/button/Button";

const StartPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles["image-container"]}>
        <img
          className={styles.img}
          src={StarterImg}
          alt="A person that enjoy cooking"
        />
      </div>
      <h1 className={styles.heading}>RecipeRevere</h1>
      <p className={styles.text}>
        3000+ easy and delicious recipes from the best chefs from around the
        world
      </p>
      <Link to="/register">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default StartPage;
