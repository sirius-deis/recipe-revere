import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation Register($email: String!, $password: String!. passwordConfirm: String!) {
    register(email: $email, password: $password, passwordConfirm: $passwordConfirm) {
      email
      password
      passwordConfirm
    }
  }
`;
