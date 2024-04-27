import { FC, useEffect, useRef, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import styles from "./FriendsActivityList.module.css";
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
  const firstFetch = useRef(true);
  const [page, setPage] = useState(0);
  const { loading, error, data, refetch } = useQuery(GET_FRIENDS_ACTIVITY, {
    variables: { page },
    onCompleted: () => {
      firstFetch.current = false;
    },
  });
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);
  if (loading && firstFetch.current) {
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
    <section className={styles.list}>
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
      {loading && !firstFetch.current && <Loader />}
    </section>
  );
};

export default FriendsActivityList;
