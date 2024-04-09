import { FC } from "react";
import { Link } from "react-router-dom";
import StarterImg from "../../assets/starterImg.png";
import styles from "./SignUpPage.module.css";
import Button from "../../components/button/Button";
import InputWithLabel from "../../components/input/InputWithLabel";
import SignUpForm from "../../queries/signUpForm/SignUpForm";

const SignUpPage: FC = () => {
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
        <p className={styles.text}>Create an account to continue</p>
        <SignUpForm />
        <p className={styles.text}>
          Already have an account?{" "}
          <Link to="/login" className={styles.link}>
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUpPage;
