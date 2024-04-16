import { gql, useMutation } from "@apollo/client";
import { FC, useState } from "react";
import InputWithLabel from "../input/InputWithLabel";
import Button from "../button/Button";
import { handleChange } from "../../utils/utils";
import Loader from "../loader/Loader";
import MessageBox from "../error/MessageBox";

const FORGET_PASSWORD = gql`
  mutation ForgetPassword($userEmail: String!) {
    forgetPassword(userEmail: $userEmail) {
      message
    }
  }
`;

const ForgetPasswordForm: FC = () => {
  const [email, setEmail] = useState("");
  const [isErrorMessageBoxOpen, setIsErrorMessageBoxOpen] = useState(false);
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

  const openErrorMessageBox = () => {
    setIsErrorMessageBoxOpen((prevState: boolean) => {
      return !prevState;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && <Loader />}
      {error && isErrorMessageBoxOpen && (
        <MessageBox closeMessageBox={openErrorMessageBox}>
          {error.message}
        </MessageBox>
      )}
      {!loading && !error && data && (
        <MessageBox closeMessageBox={}>{data}</MessageBox>
      )}
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
