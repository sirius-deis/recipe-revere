import { gql, useMutation } from "@apollo/client";
import { FC, useState } from "react";
import InputWithLabel from "../../components/input/InputWithLabel";
import Button from "../../components/button/Button";

const FORGET_PASSWORD = gql`
  mutation ForgetPassword($userEmail: String!) {
    forgetPassword(userEmail: $userEmail) {
      message
    }
  }
`;

const ForgetPasswordForm: FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [forgetPassword, { data, loading, error }] =
    useMutation(FORGET_PASSWORD);

  return (
    <form>
      <InputWithLabel
        labelText="Email"
        inputPlaceholder="example@email.com"
        icon="email"
      />
      <Button>Submit</Button>
    </form>
  );
};

export default ForgetPasswordForm;
