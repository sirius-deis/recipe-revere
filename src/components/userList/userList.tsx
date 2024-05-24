import { gql, useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import { FC } from "react";
import styles from "./userList.module.css";
import Button from "../button/Button";

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
    <ul className={styles.list}>
      {data.users.map((user: User) => {
        return (
          <li key={user._id} className={styles["list-item"]}>
            <div className={styles["user-card"]}>
              <img src={user.pictures[0]} alt="user" />
              <h2>{user.name}</h2>
              <Button>Add</Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
