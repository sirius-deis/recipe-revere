import { FC } from "react";
import { Link } from "react-router-dom";
import StarterImg from "../../assets/starterImg.png";
import styles from "./SignUpPage.module.css";
import Button from "../../components/button/Button";

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
        <Button>Sign Up</Button>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
