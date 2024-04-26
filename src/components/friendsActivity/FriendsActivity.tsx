import { FC } from "react";
import styles from "./FriendsActivity.module.css";
import { Link } from "react-router-dom";

interface FriendsActivityProps {
  _id: string;
  name: string;
  picture: string;
  activity: string;
  time: number;
}

const FriendsActivity: FC<FriendsActivityProps> = ({
  _id,
  name,
  picture,
  activity,
  time,
}) => {
  return (
    <article>
      <div className={styles["image-container"]}>
        <img src={picture} alt={name} />
      </div>
      <div className={styles.activity}>
        <h3>
          <Link to={`/users/${_id}`}>{name}</Link>
        </h3>
        just
        <p className={styles.action}>{activity}</p>
      </div>
      <p className={styles.time}>{time}</p>
    </article>
  );
};

export default FriendsActivity;
