import { FC, useEffect, useRef, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import ErrorBox from "../errorBox/ErrorBox";
import FriendsActivity from "../friendsActivity/FriendsActivity";
import useOnScreen from "../../hooks/useOnScreen";

const GET_FRIENDS_ACTIVITY = gql`
  query getFriendsActivity($page: number!) {
    friendsActivityList(page: $page) {
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
  const [page, setPage] = useState(0);
  const { loading, error, data, refetch } = useQuery(GET_FRIENDS_ACTIVITY, {
    variables: { page },
  });
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorBox message={error.message} />;
  }

  useEffect(() => {
    setPage((prevState: number) => {
      return prevState + 1;
    });
    refetch({ page });
  }, [isIntersecting]);

  return (
    <section>
      {data.friendsActivityList.map(
        (
          {
            friend: { _id, name, pictures },
            activity,
            time,
          }: {
            friend: friendType;
            activity: string;
            time: number;
          },
          index: number,
          array: []
        ) => {
          if (array.length < index) {
            return (
              <FriendsActivity
                key={_id}
                _id={_id}
                name={name}
                picture={pictures[0]}
                activity={activity}
                time={time}
              />
            );
          }
          return (
            <FriendsActivity
              ref={ref}
              key={_id}
              _id={_id}
              name={name}
              picture={pictures[0]}
              activity={activity}
              time={time}
            />
          );
        }
      )}
    </section>
  );
};

export default FriendsActivityList;
