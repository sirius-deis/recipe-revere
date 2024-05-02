import { gql, useMutation } from "@apollo/client";
import { FC, useEffect, useState } from "react";
import InputWithLabel from "../../components/input/InputWithLabel";
import Button from "../../components/button/Button";
import Row from "../../components/row/Row";
import CheckboxWithLabel from "../../components/checkbox/CheckboxWithLabel";
import { Link } from "react-router-dom";
import { handleChange, checkValidity } from "../../utils/utils";
import Loader from "../loader/Loader";
import MessageBox from "../messageBox/MessageBox";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        role
        pictures
      }
    }
  }
`;

//TODO: handle data
const SignInForm: FC = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [login, { data, loading, error }] = useMutation(LOGIN, {
    onCompleted(data, clientOptions) {
      setToken(data.login.token);
    },
    onError() {
      setIsMessageBoxOpen(true);
    },
  });

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
    setIsSent(true);
  };

  const openMessageBox = () => {
    setIsMessageBoxOpen((prevState: boolean) => {
      return !prevState;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && <Loader />}
      {error && isMessageBoxOpen && (
        <MessageBox closeMessageBox={openMessageBox}>
          {error.message}
        </MessageBox>
      )}
      <InputWithLabel
        labelText="Email"
        inputPlaceholder="example@email.com"
        icon="email"
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(setEmail, e)
        }
        blurHandler={() => checkValidity(email, setIsEmailValid, 9)}
      />
      <InputWithLabel
        labelText="Password"
        inputPlaceholder="************"
        type="password"
        icon="password"
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(setPassword, e)
        }
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
