import { gql, useMutation } from "@apollo/client";
import { FC, useEffect, useState } from "react";
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
  const [isSent, setIsSent] = useState(false);
  const [isErrorMessageBoxOpen, setIsErrorMessageBoxOpen] = useState(false);
  const [isInfoMessageBoxOpen, setIsInfoMessageBoxOpen] = useState(false);
  const [forgetPassword, { data, loading, error }] =
    useMutation(FORGET_PASSWORD);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await forgetPassword({
      variables: {
        email,
      },
    });
    setIsSent(true);
  };

  useEffect(() => {
    if (isSent && error) {
      setIsErrorMessageBoxOpen(true);
    }
    if (isSent && !loading && !error) {
      setIsInfoMessageBoxOpen(true);
    }
  }, [isSent, loading, error]);

  const openErrorMessageBox = () => {
    setIsErrorMessageBoxOpen((prevState: boolean) => {
      return !prevState;
    });
  };

  const openInfoMessageBox = () => {
    setIsInfoMessageBoxOpen((prevState: boolean) => {
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
      {!loading && !error && data && isInfoMessageBoxOpen && (
        <MessageBox closeMessageBox={openInfoMessageBox}>{data}</MessageBox>
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
