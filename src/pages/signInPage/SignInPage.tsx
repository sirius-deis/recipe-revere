import { FC, useState } from "react";
import { Link } from "react-router-dom";
import StarterImg from "../../assets/starterImg.png";
import styles from "./SignInPage.module.css";
import Button from "../../components/button/Button";
import InputWithLabel from "../../components/input/InputWithLabel";
import CheckboxWithLabel from "../../components/checkbox/CheckboxWithLabel";
import Row from "../../components/row/Row";

const SignInPage: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckHandler = () => {
    setIsChecked((prevState) => !prevState);
  };

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
        <InputWithLabel
          labelText="Confirm Password"
          inputPlaceholder="************"
          type="password"
          icon="password"
        />

        <Row inlineStyles={{ gap: "2rem" }}>
          <CheckboxWithLabel
            isChecked={isChecked}
            labelText="Remember me"
            onCheckHandler={onCheckHandler}
          />
          <Link
            to="/forgot"
            style={{ fontSize: "1.5rem", textDecoration: "underline" }}
          >
            Forgot password?
          </Link>
        </Row>
        <Button>Sign In</Button>
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
