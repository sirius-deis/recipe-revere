import { FaUserSecret } from "react-icons/fa";
import Col from "../column/Col";
import Row from "../row/Row";
import styles from "./Profile.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import SavedRecipeList from "../savedRecipeList/SavedRecipeList";
import FriendsActivityList from "../friendsActivityList/FriendsActivityList";

interface ProfileProps {
  user: {
    name: string;
    pictures: string[];
  };
}

const Profile: FC<ProfileProps> = ({ user }) => {
  return (
    <div className={styles.profile}>
      <h1>My Profile</h1>
      <p>This is the profile page</p>
      <div className={styles["profile-header"]}>
        <Col>
          <Row inlineStyles={{ gap: "1rem" }}>
            <div className={styles["image-container"]}>
              {user?.pictures ? (
                <FaUserSecret className={styles["user-icon"]} />
              ) : (
                <img src={`${user?.pictures![0]}`} alt="user profile" />
              )}
            </div>
            {user?.name}
          </Row>
        </Col>
      </div>
      <section>
        <Col>
          <h2>Saved recently</h2>
        </Col>
        <Col>
          <Link to="/saved">See all</Link>
        </Col>
        <SavedRecipeList />
      </section>
      <section>
        <h2>Friends activity</h2>
        <FriendsActivityList />
      </section>
    </div>
  );
};

export default Profile;
