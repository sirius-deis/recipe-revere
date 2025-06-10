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
    _id: string;
    name: string | undefined;
    isActive: boolean;
    isBlocked: boolean;
    pictures: string[];
  };
}

const Profile: FC<ProfileProps> = ({ user }) => {
  return (
    <div className={styles.profile}>
      <h1 className="text-left">My Profile</h1>
      <div className={styles["profile-header"]}>
        <Col>
          <Row inlineStyles={{ gap: "1rem" }}>
            <div className={styles["image-container"]}>
              {user?.pictures.length === 0 ? (
                <FaUserSecret className={styles["user-icon"]} />
              ) : (
                <img data-testid="img" src={`${user?.pictures![0]}`} alt="user profile" />
              )}
            </div>
          </Row>
          <Row>
            <h2>{user?.name || "Anonymous User"}</h2>
          </Row>
        </Col>
      </div>
      <section>
        <Row inlineStyles={{ justifyContent: "space-between" }}>
          <Col>
            <h2>Saved recently</h2>
          </Col>
          <Col>
            <Link to="/saved">See all</Link>
          </Col>
        </Row>
        <SavedRecipeList />
      </section>
      <section>
        <h2 className="text-left">Friends activity</h2>
        <FriendsActivityList />
      </section>
    </div>
  );
};

export default Profile;
