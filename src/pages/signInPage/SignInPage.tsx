import { FC } from "react";
import { Link } from "react-router-dom";
import StarterImg from "../../assets/starterImg.png";
import styles from "./SignInPage.module.css";
import Button from "../../components/button/Button";
import InputWithLabel from "../../components/input/InputWithLabel";

const SignInPage: FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles["image-container"]}>
          <img
            className={styles.img}
            src={StarterImg}
            alt="A person that enjoy cooking"
          />
        </div>
        <h1 className={styles.heading}>RecipeRevere</h1>
        <p className={styles.text}>Login to continue</p>
        <InputWithLabel
          labelText="Email"
          inputPlaceholder="example@email.com"
          icon="email"
        />
        <InputWithLabel
          labelText="Password"
          inputPlaceholder="************"
          type="password"
          icon="password"
        />
        <Button>Sign In</Button>
        <p className={styles.text}>
          Don't have an account?{" "}
          <Link to="/register" className={styles.link}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
