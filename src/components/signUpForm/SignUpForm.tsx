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
  mutation Register($email: String!, $password: String!. passwordConfirm: String!) {
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
        inputPlaceholder="example@email.com"
        icon="email"
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(setEmail, e)
        }
        blurHandler={() =>
          checkValidity(email, setIsEmailValid, 9, EMAIL_REGEXP)
        }
      />
      <InputWithLabel
        labelText="Password"
        inputPlaceholder="************"
        type="password"
        icon="password"
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(setPassword, e)
        }
        blurHandler={() =>
          checkValidity(password, setIsPasswordValid, 6, PASSWORD_REGEXP)
        }
      />
      <InputWithLabel
        labelText="Password Confirm"
        inputPlaceholder="************"
        type="password"
        icon="password"
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(setPasswordConfirm, e)
        }
        blurHandler={() =>
          checkValidity(password, setIsPasswordConfirmValid, 6, PASSWORD_REGEXP)
        }
      />
      <Button>Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
