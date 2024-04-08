import { gql, useQuery } from "@apollo/client";
import Loader from "../components/loader/Loader";
import { FC } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  pictures: string[];
}

const GET_USERS = gql`
  query getUsers {
    users {
      _id
      name
      email
      role
      pictures
    }
    amount
  }
`;

const UserList: FC = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) {
    return <Loader />;
  }
  if (error) {
  }
  return (
    <ul>
      {data.users.map((user: User) => {
        return (
          <li key={user._id}>
            <img src={user.pictures[0]} alt="user" />
            <h2>user.name</h2>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
