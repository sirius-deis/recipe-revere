import { gql, useMutation } from "@apollo/client";
import { FC, useState } from "react";
import InputWithLabel from "../input/InputWithLabel";
import Button from "../button/Button";
import { handleChange } from "../../utils/utils";
import Loader from "../loader/Loader";
import Error from "../error/Error";

const FORGET_PASSWORD = gql`
  mutation ForgetPassword($userEmail: String!) {
    forgetPassword(userEmail: $userEmail) {
      message
    }
  }
`;

const ForgetPasswordForm: FC = () => {
  const [email, setEmail] = useState("");
  const [forgetPassword, { data, loading, error }] =
    useMutation(FORGET_PASSWORD);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await forgetPassword({
      variables: {
        email,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && <Loader />}
      {error && <Error>{error.message}</Error>}
      <InputWithLabel
        labelText="Email"
        inputPlaceholder="example@email.com"
        icon="email"
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(setEmail, e)
        }
      />
      <Button>Submit</Button>
    </form>
  );
};

export default ForgetPasswordForm;
