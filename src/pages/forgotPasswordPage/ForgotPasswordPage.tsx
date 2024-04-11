import { FC } from "react";
import styles from "./ForgotPasswordPage.module.css";
import StarterImg from "../../assets/starterImg.png";
import ForgetPasswordForm from "../../queries/forgetPasswordForm/ForgetPassword";

const ForgetPasswordPage: FC = () => {
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
        <p className={styles.text}>Forgot password?</p>
        <ForgetPasswordForm />
      </div>
    </section>
  );
};

export default ForgetPasswordPage;
