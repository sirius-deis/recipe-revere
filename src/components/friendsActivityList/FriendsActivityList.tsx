import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import ErrorBox from "../errorBox/ErrorBox";

const GET_FRIENDS_ACTIVITY = gql`
  query getFriendsActivity {
    friendsActivityList {
      friend {
        _id
        name
        pictures
      }
      activity
      time
    }
  }
`;

const FriendsActivityList: FC = () => {
  const { loading, error, data } = useQuery(GET_FRIENDS_ACTIVITY);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return <section></section>;
};

export default FriendsActivityList;
