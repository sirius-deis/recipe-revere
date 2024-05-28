import { gql, useMutation } from "@apollo/client";
import { FC, useState } from "react";
import InputWithLabel from "../../components/input/InputWithLabel";
import Button from "../../components/button/Button";
import {
  EMAIL_REGEXP,
  checkValidity,
  handleChange,
  PASSWORD_REGEXP,
} from "../../utils/utils";
import Loader from "../loader/Loader";
import MessageBox from "../messageBox/MessageBox";
import { useNavigate } from "react-router-dom";

const REGISTER = gql`
  mutation Register($email: String, $password: String. passwordConfirm: String) {
    register(email: $email, password: $password, passwordConfirm: $passwordConfirm) {
    }
  }
`;

const SignUpForm: FC = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false);
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
  const [register, { data, loading, error }] = useMutation(REGISTER, {
    onCompleted() {
      navigate("/login");
    },
    onError() {
      setIsMessageBoxOpen(true);
    },
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid && isPasswordConfirmValid) {
      return;
    }
    await register({
      variables: {
        email,
        password,
        passwordConfirm,
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
      <InputWithLabel
        labelText="Password Confirm"
        placeholder="************"
        type="password"
        icon="password"
        value={passwordConfirm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(setPasswordConfirm, e)
        }
        onBlur={() =>
          checkValidity(
            passwordConfirm,
            setIsPasswordConfirmValid,
            6,
            PASSWORD_REGEXP
          )
        }
        isValid={passwordConfirm.length > 0 && !isPasswordConfirmValid}
      />
      <Button>Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
