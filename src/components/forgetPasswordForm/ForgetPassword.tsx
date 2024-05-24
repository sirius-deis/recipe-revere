import { gql, useMutation } from "@apollo/client";
import { FC, useContext, useEffect, useState } from "react";
import InputWithLabel from "../input/InputWithLabel";
import Button from "../button/Button";
import { handleChange, checkValidity, EMAIL_REGEXP } from "../../utils/utils";
import Loader from "../loader/Loader";
import MessageBox from "../messageBox/MessageBox";
import { UserContext } from "../../store/userContext";

const FORGET_PASSWORD = gql`
  mutation ForgetPassword($userEmail: String) {
    forgetPassword(userEmail: $userEmail) {
      message
    }
  }
`;

const ForgetPasswordForm: FC = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isErrorMessageBoxOpen, setIsErrorMessageBoxOpen] = useState(false);
  const [isInfoMessageBoxOpen, setIsInfoMessageBoxOpen] = useState(false);
  const { resetPassword } = useContext(UserContext);
  const [forgetPassword, { data, loading, error }] = useMutation(
    FORGET_PASSWORD,
    {
      onError: () => {
        setIsErrorMessageBoxOpen(true);
      },
      onCompleted: () => {
        setIsInfoMessageBoxOpen(true);
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmailValid) {
      return;
    }
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
      {!loading && !error && isInfoMessageBoxOpen && (
        <MessageBox closeMessageBox={openInfoMessageBox}>{data}</MessageBox>
      )}
      <InputWithLabel
        labelText="Email"
        inputPlaceholder="example@email.com"
        icon="email"
        value={email}
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(setEmail, e)
        }
        blurHandler={() =>
          checkValidity(email, setIsEmailValid, 9, EMAIL_REGEXP)
        }
        isValid={email.length > 0 && !isEmailValid}
      />
      <Button>Submit</Button>
    </form>
  );
};

export default ForgetPasswordForm;
