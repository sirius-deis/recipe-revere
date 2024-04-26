import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import ErrorBox from "../errorBox/ErrorBox";
import FriendsActivity from "../friendsActivity/FriendsActivity";

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

type friendType = {
  _id: string;
  name: string;
  pictures: string;
};

const FriendsActivityList: FC = () => {
  const { loading, error, data } = useQuery(GET_FRIENDS_ACTIVITY);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <section>
      {data.friendsActivityList.map(
        ({
          friend: { _id, name, pictures },
          activity,
          time,
        }: {
          friend: friendType;
          activity: string;
          time: number;
        }) => (
          <FriendsActivity
            key={_id}
            _id={_id}
            name={name}
            picture={pictures[0]}
            activity={activity}
            time={time}
          />
        )
      )}
    </section>
  );
};

export default FriendsActivityList;
