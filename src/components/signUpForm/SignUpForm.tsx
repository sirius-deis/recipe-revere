import { gql, useMutation } from "@apollo/client";
import { FC, useState, useEffect } from "react";
import InputWithLabel from "../../components/input/InputWithLabel";
import Button from "../../components/button/Button";
import { handleChange } from "../../utils/utils";
import Loader from "../loader/Loader";
import MessageBox from "../error/MessageBox";

const REGISTER = gql`
  mutation Register($email: String!, $password: String!. passwordConfirm: String!) {
    register(email: $email, password: $password, passwordConfirm: $passwordConfirm) {
    }
  }
`;

const SignUpForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [register, { data, loading, error }] = useMutation(REGISTER);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register({
      variables: {
        email,
        password,
        passwordConfirm,
      },
    });
    setIsSent(true);
  };

  useEffect(() => {
    if (isSent && error) {
      setIsMessageBoxOpen(true);
    }
  }, [isSent, error]);

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
      <InputWithLabel
        labelText="Password Confirm"
        inputPlaceholder="************"
        type="password"
        icon="password"
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(setPasswordConfirm, e)
        }
      />
      <Button>Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
