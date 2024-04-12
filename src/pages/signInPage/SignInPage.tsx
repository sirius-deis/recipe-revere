import { FC, useState } from "react";
import { Link } from "react-router-dom";
import StarterImg from "../../assets/starterImg.png";
import styles from "./SignInPage.module.css";
import SignInForm from "../../components/signInForm/SignInForm";

const SignInPage: FC = () => {
  return (
    <section>
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
        <SignInForm />
        <p className={styles.text}>
          Don't have an account?{" "}
          <Link to="/register" className={styles.link}>
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignInPage;
