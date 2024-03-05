import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import StarterImg from "../../assets/starterImg.png";
import styles from "./SignUpPage.module.css";
import Button from "../../components/button/Button";
import InputWithLabel from "../../components/input/InputWithLabel";

const SignUpPage: FC = () => {
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
        <p className={styles.text}>Create an account to continue</p>
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
        <Button>Sign Up</Button>
        <p className={styles.text}>
          Already have an account?{" "}
          <NavLink to="/login" className={styles.link}>
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
