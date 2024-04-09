import { gql, useMutation } from "@apollo/client";
import { FC, useState } from "react";
import InputWithLabel from "../../components/input/InputWithLabel";
import Button from "../../components/button/Button";

const REGISTER = gql`
  mutation Register($email: String!, $password: String!. passwordConfirm: String!) {
    register(email: $email, password: $password, passwordConfirm: $passwordConfirm) {
      email
      password
      passwordConfirm
    }
  }
`;

const SignUpForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [register] = useMutation(REGISTER);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register({
      variables: {
        email,
        password,
        passwordConfirm,
      },
    });
  };

  const handleChange = (
    setFunction: (value: string) => void,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setFunction(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      />
      <Button>Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
