import { FC } from "react";
import { gql, useQuery } from "@apollo/client";

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
  return <section></section>;
};

export default FriendsActivityList;
