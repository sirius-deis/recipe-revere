import { forwardRef } from "react";
import styles from "./FriendsActivity.module.css";
import { Link } from "react-router-dom";

interface FriendsActivityProps {
  _id: string;
  name: string;
  picture: string;
  activity: string;
  time: number;
}

const FriendsActivity = forwardRef<HTMLDivElement, FriendsActivityProps>(
  ({ _id, name, picture, activity, time }, ref) => {
    return (
      <article ref={ref} className={styles["friends-activity"]}>
        <div className={styles["image-container"]}>
          <img src={picture} alt={name} />
        </div>
        <div className={styles.activity}>
          <h3 className={styles.name}>
            <Link to={`/users/${_id}`}>{name}</Link>
          </h3>
          just
          <p className={styles.action}>{activity}</p>
        </div>
        <p className={styles.time}>{new Date(time).toISOString()}</p>
      </article>
    );
  }
);

export default FriendsActivity;
