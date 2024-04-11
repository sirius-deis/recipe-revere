import { FC } from "react";
import styles from "./ForgotPasswordPage.module.css";
import StarterImg from "../../assets/starterImg.png";
import InputWithLabel from "../../components/input/InputWithLabel";
import Button from "../../components/button/Button";
import { handleChange } from "../../utils/utils";

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
        <InputWithLabel
          labelText="Email"
          inputPlaceholder="example@email.com"
          icon="email"
        />
        <Button>Submit</Button>
      </div>
    </section>
  );
};

export default ForgetPasswordPage;
