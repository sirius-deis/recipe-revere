import { gql, useQuery } from "@apollo/client";

const getUsers = gql`
  query getUsers {
    users {
      id
      name
      email
      role
      pictures
    }
    amount
  }
`;
