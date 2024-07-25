import { FaUserSecret } from "react-icons/fa";
import Col from "../column/Col";
import Row from "../row/Row";
import styles from "./Profile.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import SavedRecipeList from "../savedRecipeList/SavedRecipeList";
import FriendsActivityList from "../friendsActivityList/FriendsActivityList";
import { GET_USER } from "../../queries/queries";
import { useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import ErrorBox from "../errorBox/ErrorBox";

interface ProfileProps {
  userId: string;
}

const Profile: FC<ProfileProps> = ({ userId }) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id: userId },
  });
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorBox message={error.message} />;
  }
  return (
    <div className={styles.profile}>
      <h1>My Profile</h1>
      <p>This is the profile page</p>
      <div className={styles["profile-header"]}>
        <Col>
          <Row inlineStyles={{ gap: "1rem" }}>
            <div className={styles["image-container"]}>
              {data.user?.pictures ? (
                <FaUserSecret className={styles["user-icon"]} />
              ) : (
                <img src={`${data.user?.pictures![0]}`} alt="user profile" />
              )}
            </div>
            {data.user?.name}
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
        <SavedRecipeList user={data.user} />
      </section>
      <section>
        <h2>Friends activity</h2>
        <FriendsActivityList />
      </section>
    </div>
  );
};

export default Profile;
