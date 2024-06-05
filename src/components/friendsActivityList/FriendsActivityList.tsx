import { FC, useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import ErrorBox from "../errorBox/ErrorBox";
import FriendsActivity from "../friendsActivity/FriendsActivity";
import useOnScreen from "../../hooks/useOnScreen";
import List from "../list/List";
import { GET_FRIENDS_ACTIVITY } from "../../queries/queries";

type FriendsActivityType = {
  _id: string;
  user: {
    _id: string;
    name: string;
    pictures: string;
  };
  activity: string;
  date: number;
};

const FriendsActivityList: FC = () => {
  const firstFetch = useRef(true);
  const [page, setPage] = useState(0);
  const [friendsActivity, setFriendsActivity] = useState<
    FriendsActivityType[] | []
  >([]);
  const { loading, error } = useQuery(GET_FRIENDS_ACTIVITY, {
    variables: { page },
    onCompleted: (data) => {
      firstFetch.current &&= false;
      setFriendsActivity((currentState) => {
        return [...currentState, ...data];
      });
    },
  });
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);
  useEffect(() => {
    setPage((prevState: number) => {
      return prevState + 1;
    });
  }, [isIntersecting]);
  if (loading && firstFetch.current) {
    return <Loader />;
  }
  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <section>
      <List borderBottom>
        {friendsActivity.map(
          (
            { _id, user: { _id: userId, name, pictures }, activity, date },
            index
          ) => {
            return (
              <FriendsActivity
                key={_id}
                _id={userId}
                name={name}
                picture={pictures[0]}
                activity={activity}
                time={date}
                ref={friendsActivity.length - 1 <= index ? null : ref}
              />
            );
          }
        )}
      </List>
      {loading && !firstFetch.current && <Loader />}
    </section>
  );
};

export default FriendsActivityList;
