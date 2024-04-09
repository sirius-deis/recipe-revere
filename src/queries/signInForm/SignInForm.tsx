import { gql, useMutation } from "@apollo/client";
import { FC, useState } from "react";
import InputWithLabel from "../../components/input/InputWithLabel";
import Button from "../../components/button/Button";
import Row from "../../components/row/Row";
import CheckboxWithLabel from "../../components/checkbox/CheckboxWithLabel";
import { Link } from "react-router-dom";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      password
    }
  }
`;

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [login] = useMutation(LOGIN);

  const onCheckHandler = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({
      variables: {
        email,
        password,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default SignInForm;
