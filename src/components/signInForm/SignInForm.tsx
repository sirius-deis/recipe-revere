import { gql, useMutation } from "@apollo/client";
import { FC, useContext, useState } from "react";
import InputWithLabel from "../../components/input/InputWithLabel";
import Button from "../../components/button/Button";
import Row from "../../components/row/Row";
import CheckboxWithLabel from "../../components/checkbox/CheckboxWithLabel";
import { Link } from "react-router-dom";
import {
  handleChange,
  checkValidity,
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
} from "../../utils/utils";
import Loader from "../loader/Loader";
import MessageBox from "../messageBox/MessageBox";
import { setToken } from "../../utils/store";
import { UserContext } from "../../store/userContext";

const LOGIN = gql`
  mutation Login($email: String, $password: String) {
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

const SignInForm: FC = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
  const { signIn } = useContext(UserContext);
  const [login, { data, loading, error }] = useMutation(LOGIN, {
    onCompleted(data, clientOptions) {
      setToken(data.login.token);
      signIn(data.login.user, data.login.token);
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
    if (!isEmailValid && !isPasswordValid) {
      return;
    }
    await login({
      variables: {
        email,
        password,
      },
    });
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
        placeholder="example@email.com"
        icon="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(setEmail, e)
        }
        onBlur={() => checkValidity(email, setIsEmailValid, 9, EMAIL_REGEXP)}
        isValid={email.length > 0 && !isEmailValid}
      />
      <InputWithLabel
        labelText="Password"
        placeholder="************"
        type="password"
        icon="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(setPassword, e)
        }
        onBlur={() =>
          checkValidity(password, setIsPasswordValid, 6, PASSWORD_REGEXP)
        }
        isValid={password.length > 0 && !isPasswordValid}
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
      <Button size="lg" bg="main">
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
